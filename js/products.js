const productsData = [
    {
        id: 1,
        name: "100g Brick Premium King Sojo",
        price: 290,
        category: "bricks",
        type: "bricks",
        stock: "∞",
        image: "images/king-sojo.jpg"
    },
    {
        id: 2,
        name: "1kg Brick King Foil Blue",
        price: 1000,
        category: "bricks",
        type: "bricks",
        stock: "∞",
        image: "images/foil-blue.jpg"
    },
    {
        id: 3,
        name: "1kg Brick Manggo Laos mix Opiat",
        price: 1190,
        category: "bricks",
        type: "bricks",
        stock: "∞",
        image: "images/Laos-mix-Opiat.png"
    },
    {
        id: 4,
        name: "100g CB Runtz SuperBlack",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/runtz-superblack.jpg"
    },
    {
        id: 5,
        name: "100g CB Runt Rayer",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/runt-rayer.jpg"
    },
    {
        id: 6,
        name: "100g CB BKB Dosidos",
        price: 300,
        category: "cb",
        type: "cb",
        stock: "∞",
        image: "images/bkb-dosidos.png"
    },
    {
        id: 7,
        name: "100g CB Khalifa Kush",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/khalifa-kush.jpg"
    },
    {
        id: 8,
        name: "100g CB Tropicana Cherry",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/tropicana-cherry.jpg"
    },
    {
        id: 9,
        name: "100g CB Mac-1",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/mac-1.jpg"
    },
    {
        id: 10,
        name: "100g CB Candy Man",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/candy-man.jpg"
    },
    {
        id: 11,
        name: "100g CB White Truffle",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/white-truffle.jpg"
    },
    {
        id: 12,
        name: "100g CB Blackberry Oreo",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/blackberry-oreo.jpg"
    },
    {
        id: 13,
        name: "100g CB Miami",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/miami.jpg"
    },
    {
        id: 14,
        name: "100g CB Wedding Cake",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/wedding-cake.jpg"
    },
    {
        id: 15,
        name: "100g CB Gorilla Glue",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/gorilla-glue.jpg"
    },
    {
        id: 16,
        name: "100g CB Khalifa Mint",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/khalifa-mint.jpg"
    },
    {
        id: 17,
        name: "100g CB Labubu Purple",
        price: 430,
        category: "cb",
        type: "cb",
        stock: "0",
        image: "images/labubu-purple.jpg"
    },
    {
        id: 18,
        name: "100g CB SK Snow",
        price: 320,
        category: "cb",
        type: "cb",
        stock: "∞",
        image: "images/sk-strain.jpg"
    },
    {
        id: 19,
        name: "100g CB Delax Sugarcane",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/delax-sugarcane.jpg"
    },
    {
        id: 20,
        name: "100g CB White Runtz",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/white-runtz.jpg"
    },
    {
        id: 21,
        name: "100g CB Sour Diesel",
        price: 320,
        category: "cb",
        type: "cb",
        stock: 0,
        image: "images/sour-diesel.jpg"
    },
    {
        id: 22,
        name: "100g Buds Wattaya Purple",
        price: 690,
        category: "buds",
        type: "buds",
        stock: "∞",
        image: "images/wattaya-purple.jpg"
    },
    {
        id: 23,
        name: "100g CB Peat Shebet",
        price: 300,
        category: "cb",
        type: "cb",
        stock: "0",
        image: "images/peat-shebet.png"
    },
    {
        id: 24,
        name: "100g CB Snow Diamond",
        price: 350,
        category: "cb",
        type: "cb",
        stock: "0",
        image: "images/cb-snow-diamond.jpg"
    },
    {
        id: 25,
        name: "1kg CB Blackberry mix THC Oil",
        price: 1399,
        category: "cb",
        type: "cb",
        stock: "∞",
        image: "images/Blackberry-mix-THC-Oil.png"
    },
    {
        id: 26,
        name: "100g Buds Snow Diamond",
        price: 1000,
        category: "buds",
        type: "buds",
        stock: "0",
        image: "images/snow-diamond.png"
    },
    {
        id: 27,
        name: "100g Buds Grape Diamond",
        price: 490,
        category: "buds",
        type: "buds",
        stock: "∞",
        image: "images/grape-diamond.png"
    },
    {
        id: 28,
        name: "100g Buds Konsher Kush",
        price: 490,
        category: "buds",
        type: "buds",
        stock: "0",
        image: "images/kunsher-kush.png"
    },
    {
        id: 29,
        name: "100g Buds Black Lebanon",
        price: 490,
        category: "buds",
        type: "buds",
        stock: "0",
        image: "images/black-lebanon.png"
    },
    {
        id: 30,
        name: "1pcs MuhaMeds 2G",
        price: 300,
        category: "dispo",
        type: "dispo",
        stock: "0",
        image: "images/MuhaMeds.png"
    },
];

// --- CART LOGIC ---
let cartCount = 0;
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let isProcessing = false;
let eventListenerAdded = false;

// Load cart count from localStorage on page load
cartCount = cartItems.length;

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.textContent = cartCount;
        badge.classList.add('pulse');
        setTimeout(() => badge.classList.remove('pulse'), 300);
    }
    updateFloatingCart();
}

function updateFloatingCart() {
    const floatingCart = document.getElementById('floating-cart');
    if (floatingCart) {
        const cartCountElement = document.getElementById('floating-cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = cartItems.length;
        }

        if (cartItems.length > 0) {
            floatingCart.style.display = 'block';
            floatingCart.classList.add('cart-bounce');
            setTimeout(() => floatingCart.classList.remove('cart-bounce'), 500);
        } else {
            floatingCart.style.display = 'none';
        }
    }
}

function createFloatingCart() {
    const floatingCartHTML = `
        <div id="floating-cart" class="floating-cart" onclick="goToCart()">
            <div class="floating-cart-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"/>
                </svg>
                <span id="floating-cart-count" class="floating-cart-count">${cartItems.length}</span>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', floatingCartHTML);
}

// Navigate to cart page
function goToCart() {
    window.location.href = 'cart.html';
}

// Add cart navigation to header cart button
function setupCartNavigation() {
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', goToCart);
    }
}

// --- PRODUCT RENDERING (Updated with sorting for out-of-stock items) ---
export function initializeProducts() {
    renderProducts();
    setupPurchaseButtons();
    createFloatingCart();
    setupCartNavigation();
    updateCartBadge();
}

function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    // Sort products: in-stock first, out-of-stock last
    const sortedProducts = productsData.slice().sort((a, b) => {
        const aOutOfStock = a.stock === 0;
        const bOutOfStock = b.stock === 0;
        if (aOutOfStock && !bOutOfStock) return 1;
        if (!aOutOfStock && bOutOfStock) return -1;
        return 0;
    });

    productsGrid.innerHTML = sortedProducts.map(product => createProductCard(product)).join('');
}

export function createProductCard(product) {
    const isOutOfStock = product.stock === 0;
    const stockDisplay = getStockDisplay(product.stock);

    return `
        <div class="product-card ${isOutOfStock ? 'out-of-stock' : ''}" data-category="${product.category}" data-id="${product.id}">
            <div class="product-image ${getBackgroundClass(product.type)}" style="overflow: hidden; position: relative;">
                ${product.image ? 
                    `<img src="${product.image}" 
                          alt="${product.name}" 
                          class="product-custom-image" 
                          style="width: 100%; height: 100%; object-fit: cover; object-position: center; transition: transform 0.3s ease; display: block;"
                          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                     <div class="product-logo fallback-logo" style="display: none;">
                        ${getProductIcon(product.type)}
                        <span class="service-text">${getServiceText(product.type)}</span>
                     </div>` 
                    : 
                    `<div class="product-logo">
                        ${getProductIcon(product.type)}
                        <span class="service-text">${getServiceText(product.type)}</span>
                     </div>`
                }
                ${isOutOfStock ? '<div class="out-of-stock-overlay">Out of Stock</div>' : ''}
                <div class="cart-indicator" id="cart-indicator-${product.id}" style="display: none;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#4ADE80">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-details">
                    <span class="price">RM${product.price}</span>
                    <span class="stock ${isOutOfStock ? 'out-of-stock-text' : 'in-stock-text'}">${stockDisplay}</span>
                </div>
                <button class="purchase-btn ${isOutOfStock ? 'disabled' : ''}" 
                        data-product-id="${product.id}" 
                        id="btn-${product.id}"
                        ${isOutOfStock ? 'disabled' : ''}>
                    ${isOutOfStock ? 'Out of Stock' : 'Purchase'}
                </button>
            </div>
        </div>
    `;
}

// Helper function to display stock status (∞ for in stock, 0 for out of stock)
function getStockDisplay(stock) {
    if (stock === 0) {
        return 'Out of stock';
    } else if (stock === "∞") {
        return 'On stock';
    } else {
        return 'On stock'; // Fallback for any other values
    }
}

export function getBackgroundClass(type) {
    const backgrounds = {
        cb: 'cb-bg',
        bricks: 'bricks-bg',
        'compressed-buds': 'compressed-buds-bg',
        buds: 'buds-bg'
    };
    return backgrounds[type] || 'default-bg';
}

export function getProductIcon(type) {
    const icons = {
        cb: `<div class="cb-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                    <circle cx="12" cy="12" r="8" fill="#22c55e"/>
                    <path d="M8 12h8M12 8v8" stroke="white" stroke-width="2"/>
                </svg>
             </div>`,
        bricks: `<div class="bricks-icon">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                       <rect x="2" y="6" width="20" height="4" rx="1"/>
                       <rect x="2" y="12" width="20" height="4" rx="1"/>
                       <rect x="2" y="18" width="20" height="4" rx="1"/>
                   </svg>
                 </div>`,
        'compressed-buds': `<div class="compressed-icon">
                             <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                                 <circle cx="12" cy="12" r="6" fill="#4ADE80"/>
                                 <circle cx="8" cy="8" r="2" fill="white"/>
                                 <circle cx="16" cy="16" r="2" fill="white"/>
                             </svg>
                           </div>`,
        buds: `<div class="buds-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FFD700"/>
                    </svg>
                  </div>`
    };
    return icons[type] || icons.bricks;
}

function getServiceText(type) {
    const texts = {
        cb: 'COMPRESSED BUDS',
        bricks: 'PREMIUM BRICKS',
        buds: 'BUDS'
    };
    return texts[type] || 'PREMIUM';
}

function setupPurchaseButtons() {
    if (eventListenerAdded) return;
    document.addEventListener('click', handlePurchaseClick);
    eventListenerAdded = true;
}

function handlePurchaseClick(e) {
    if (e.target.classList.contains('purchase-btn') && !isProcessing && !e.target.disabled) {
        const productId = parseInt(e.target.dataset.productId);
        const product = productsData.find(p => p.id === productId);

        if (product && product.stock !== 0) {
            handlePurchase(product, e.target);
        }
    }
}

function handlePurchase(product, button) {
    if (isProcessing || product.stock === 0) return;

    isProcessing = true;
    const originalText = button.textContent;

    button.textContent = 'Adding to Cart...';
    button.disabled = true;
    button.style.background = '#22c55e';

    setTimeout(() => {
        // Check if item already exists in cart
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({...product, quantity: 1});
        }

        cartCount = cartItems.length;

        // Save to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        updateCartBadge();

        const cartIndicator = document.getElementById(`cart-indicator-${product.id}`);
        if (cartIndicator) {
            cartIndicator.style.display = 'flex';
            cartIndicator.classList.add('cart-indicator-show');
        }

        button.textContent = 'Added to Cart ✓';
        button.style.background = '#4ADE80';

        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
            isProcessing = false;
        }, 2000);

        console.log('Product added to cart:', product);
        console.log('Total cart items:', cartItems.length);
    }, 800);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProducts);

// Make functions globally available
window.goToCart = goToCart;
