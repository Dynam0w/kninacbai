let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const SHIPPING_COST = 15;
const PROTECTION_COST_PER_ITEM = 15;
let protectionEnabled = false;

// Protection function for cart page
function initializeCartProtection() {
    // Disable right-click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Disable image dragging
    disableImageDrag();

    // Detect DevTools opening - multiple detection methods
    let devToolsOpen = false;
    const threshold = 160;

    // Method 1: Window size difference detection
    function checkDevTools() {
        // First check if this is a mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        // Skip this detection method on mobile devices
        if (isMobile) return;

        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (widthThreshold || heightThreshold) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                // Take action when DevTools opens
                document.body.innerHTML = "Access Denied - Developer Tools Detected";
            }
        } else {
            devToolsOpen = false;
        }
    }

    // Method 2: Console detection function
    function detectConsoleOpen() {
        const startTime = performance.now();
        console.log('%c', 'color: transparent');
        const endTime = performance.now();

        if (endTime - startTime > 100 && !devToolsOpen) {
            devToolsOpen = true;
            document.body.innerHTML = "Access Denied - Developer Tools Detected";
        }
    }

    // Method 3: debugger detection
    function detectDebugger() {
        const startTime = new Date();
        debugger;
        const endTime = new Date();

        if (endTime - startTime > 100 && !devToolsOpen) {
            devToolsOpen = true;
            document.body.innerHTML = "Access Denied - Developer Tools Detected";
        }
    }

    // Method 4: console.clear detection
    const originalClear = console.clear;
    console.clear = function () {
        if (!devToolsOpen) {
            devToolsOpen = true;
            document.body.innerHTML = "Access Denied - Developer Tools Detected";
        }
        originalClear.call(console);
    };

    // Block keyboard shortcuts for DevTools
    document.onkeydown = function (e) {
        // Block F12
        if (e.keyCode == 123) {
            return false;
        }

        // Block Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }

        // Block Ctrl+Shift+J
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }

        // Block Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }

        // Block Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    };

    // Run all detection methods periodically
    setInterval(checkDevTools, 1000);
    setInterval(detectDebugger, 2000);
    setInterval(detectConsoleOpen, 1000);

    // Additional protection: Detect Firebug
    if (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) {
        document.body.innerHTML = "Access Denied - Developer Tools Detected";
    }

    // Additional protection: Detect if DevTools is already open when page loads
    setTimeout(checkDevTools, 500);
    setTimeout(detectConsoleOpen, 700);
}

// Function to disable image dragging
function disableImageDrag() {
    // Disable dragging for existing images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });

        // Additional protection
        img.setAttribute('draggable', 'false');
        img.style.userDrag = 'none';
        img.style.webkitUserDrag = 'none';
    });

    // Disable dragging for future images (using event delegation)
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Additional general drag protection
    document.addEventListener('dragover', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('drop', function(e) {
        e.preventDefault();
        return false;
    });
}

function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartContainer = document.getElementById('empty-cart');
    const cartBadge = document.getElementById('cart-badge');

    // Update cart badge
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

    // Apply protection to newly loaded images
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

// Slideshow functionality
let currentSlide = 0;
const totalSlides = 3;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');

    // Wrap around if necessary
    if (n >= totalSlides) currentSlide = 0;
    if (n < 0) currentSlide = totalSlides - 1;

    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Show current slide
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
    }
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add('active');
    }

    // Apply protection to slide images
    setTimeout(() => {
        disableImageDrag();
    }, 100);
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

// Enhanced modal functionality with protection
function initializeModalProtection() {
    const payModal = document.getElementById('payModal');

    if (payModal) {
        // Apply protection when modal opens
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    if (payModal.style.display === 'block') {
                        setTimeout(() => {
                            disableImageDrag();
                        }, 100);
                    }
                }
            });
        });

        observer.observe(payModal, {
            attributes: true,
            attributeFilter: ['style']
        });
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize protection first
    initializeCartProtection();
    initializeModalProtection();

    loadCartItems();

    // Clear cart button
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }

    // Telegram payment button
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

    // How-to-pay modal logic
    const payModal = document.getElementById('payModal');
    const howBtn = document.getElementById('howToPayBtn');
    const closePay = document.getElementById('payCloseBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (howBtn && payModal && closePay) {
        // Open modal
        howBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentSlide = 0; // Reset to first slide
            showSlide(currentSlide);
            payModal.style.display = 'block';
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

        // Navigation buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }

        // Indicator dots
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });

        // Enhanced keyboard navigation with protection
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