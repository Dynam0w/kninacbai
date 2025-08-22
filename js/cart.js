let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const SHIPPING_COST = 15;
const PROTECTION_COST_PER_ITEM = 15;
let protectionEnabled = false;

// Slideshow variables
let currentSlide = 0;
const totalSlides = 3;

// Protection function for cart page
function initializeCartProtection() {
    // Disable right-click
    document.addEventListener('contextmenu', event => event.preventDefault());
    // Disable image dragging
    disableImageDrag();

    // Detect DevTools opening - multiple detection methods
    let devToolsOpen = false;
    const threshold = 160;

    function checkDevTools() {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) return;
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                document.body.innerHTML = "Access Denied - Developer Tools Detected";
            }
        } else {
            devToolsOpen = false;
        }
    }

    function detectConsoleOpen() {
        const startTime = performance.now();
        console.log('%c', 'color: transparent');
        const endTime = performance.now();
        if (endTime - startTime > 100 && !devToolsOpen) {
            devToolsOpen = true;
            document.body.innerHTML = "Access Denied - Developer Tools Detected";
        }
    }

    function detectDebugger() {
        const startTime = new Date();
        debugger;
        const endTime = new Date();
        if (endTime - startTime > 100 && !devToolsOpen) {
            devToolsOpen = true;
            document.body.innerHTML = "Access Denied - Developer Tools Detected";
        }
    }

    const originalClear = console.clear;
    console.clear = function () {
        if (!devToolsOpen) {
            devToolsOpen = true;
            document.body.innerHTML = "Access Denied - Developer Tools Detected";
        }
        originalClear.call(console);
    };

    document.onkeydown = function (e) {
        if (e.keyCode == 123) return false;
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
    };

    setInterval(checkDevTools, 1000);
    setInterval(detectDebugger, 2000);
    setInterval(detectConsoleOpen, 1000);

    if (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) {
        document.body.innerHTML = "Access Denied - Developer Tools Detected";
    }

    setTimeout(checkDevTools, 500);
    setTimeout(detectConsoleOpen, 700);
}

function disableImageDrag() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
        img.setAttribute('draggable', 'false');
        img.style.userDrag = 'none';
        img.style.webkitUserDrag = 'none';
    });

    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
}

function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartContainer = document.getElementById('empty-cart');
    const cartBadge = document.getElementById('cart-badge');

    if (cartBadge) {
        cartBadge.textContent = cartItems.length;
    }

    if (cartItems.length === 0) {
        cartItemsContainer.style.display = 'none';
        emptyCartContainer.style.display = 'block';
        document.querySelector('.cart-summary').style.display = 'none';
        return;
    }

    cartItemsContainer.style.display = 'block';
    emptyCartContainer.style.display = 'none';
    document.querySelector('.cart-summary').style.display = 'block';

    cartItemsContainer.innerHTML = cartItems.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='images/placeholder.jpg'" draggable="false">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">RM ${item.price}</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    setTimeout(() => {
        disableImageDrag();
    }, 100);

    updateCartSummary();
}

function updateQuantity(productId, change) {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            loadCartItems();
        }
    }
}

function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
}

function updateCartSummary() {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = SHIPPING_COST;
    const protection = protectionEnabled ? cartItems.reduce((total, item) => total + (item.quantity * PROTECTION_COST_PER_ITEM), 0) : 0;
    const total = subtotal + shipping + protection;

    document.getElementById('subtotal').textContent = `RM ${subtotal}`;
    document.getElementById('total').textContent = `RM ${total}`;

    if (protectionEnabled) {
        document.getElementById('protection-fee').textContent = `RM ${protection}`;
    }
}

function updateProtectionCost() {
    const checkbox = document.getElementById('product-protection');
    const protectionRow = document.getElementById('protection-row');

    protectionEnabled = checkbox.checked;

    if (protectionEnabled) {
        protectionRow.style.display = 'flex';
    } else {
        protectionRow.style.display = 'none';
    }

    updateCartSummary();
}

function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cartItems = [];
        localStorage.removeItem('cartItems');
        loadCartItems();
    }
}

// WORKING SLIDESHOW FUNCTIONALITY
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');

    if (n >= totalSlides) currentSlide = 0;
    if (n < 0) currentSlide = totalSlides - 1;
    else currentSlide = n;

    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
    }
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add('active');
    }

    setTimeout(() => {
        disableImageDrag();
    }, 100);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(n) {
    showSlide(n);
}

// FIXED: CREATE ARROWS FUNCTION - NON-LOOPING + MOBILE SUPPORT
function createArrows() {
    const slideshow = document.querySelector('.slideshow-container');
    if (!slideshow) return;

    // Remove any existing arrows
    const existingArrows = slideshow.querySelectorAll('.slide-arrow-btn');
    existingArrows.forEach(arrow => arrow.remove());

    // Create left arrow
    const leftArrow = document.createElement('button');
    leftArrow.classList.add('slide-arrow-btn', 'slide-arrow-left');
    leftArrow.id = 'modalPrevBtn';
    leftArrow.innerHTML = '◀';
    leftArrow.addEventListener('click', prevSlide);
    slideshow.appendChild(leftArrow);

    // Create right arrow
    const rightArrow = document.createElement('button');
    rightArrow.classList.add('slide-arrow-btn', 'slide-arrow-right');
    rightArrow.id = 'modalNextBtn';
    rightArrow.innerHTML = '▶';
    rightArrow.addEventListener('click', nextSlide);
    slideshow.appendChild(rightArrow);

    console.log('Arrows created successfully!'); // Debug log
}

// FIXED: NON-LOOPING SLIDESHOW FUNCTIONS
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const leftArrow = document.getElementById('modalPrevBtn');
    const rightArrow = document.getElementById('modalNextBtn');

    // Prevent looping - stop at boundaries
    if (n < 0) currentSlide = 0;
    else if (n >= totalSlides) currentSlide = totalSlides - 1;
    else currentSlide = n;

    // Show/hide slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
    }
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add('active');
    }

    // Disable arrows at boundaries
    if (leftArrow) {
        if (currentSlide === 0) {
            leftArrow.disabled = true;
            leftArrow.style.opacity = '0.4';
            leftArrow.style.cursor = 'not-allowed';
        } else {
            leftArrow.disabled = false;
            leftArrow.style.opacity = '1';
            leftArrow.style.cursor = 'pointer';
        }
    }

    if (rightArrow) {
        if (currentSlide === totalSlides - 1) {
            rightArrow.disabled = true;
            rightArrow.style.opacity = '0.4';
            rightArrow.style.cursor = 'not-allowed';
        } else {
            rightArrow.disabled = false;
            rightArrow.style.opacity = '1';
            rightArrow.style.cursor = 'pointer';
        }
    }

    setTimeout(() => {
        disableImageDrag();
    }, 100);
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeCartProtection();
    loadCartItems();

    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }

    const payBtn = document.getElementById('pay-btn');
    if (payBtn) {
        payBtn.addEventListener('click', () => {
            if (cartItems.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            window.open('https://t.me/TenagaBatinBot', '_blank');
        });
    }

    // Modal logic
    const payModal = document.getElementById('payModal');
    const howBtn = document.getElementById('howToPayBtn');
    const closePay = document.getElementById('payCloseBtn');

    if (howBtn && payModal && closePay) {
        // Open modal
        howBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentSlide = 0;
            payModal.style.display = 'block';
            setTimeout(() => {
                createArrows(); // Create arrows when modal opens
                showSlide(0);
            }, 100);
        });

        // Close modal
        closePay.addEventListener('click', () => {
            payModal.style.display = 'none';
        });

        // Close modal when clicking outside
        payModal.addEventListener('click', (e) => {
            if (e.target === payModal) {
                payModal.style.display = 'none';
            }
        });

        // Indicator dots
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (payModal.style.display === 'block') {
                if (e.key === 'ArrowLeft') prevSlide();
                if (e.key === 'ArrowRight') nextSlide();
                if (e.key === 'Escape') payModal.style.display = 'none';
            }
        });
    }
});

// Make functions globally available
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.updateProtectionCost = updateProtectionCost;
