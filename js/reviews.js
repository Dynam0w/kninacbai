// Sample reviews data with custom avatars
const allReviews = [
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews13.png",
        type: "10KG Brick"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews14.png",
        type: "50KG CB"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews15.png",
        type: "200g CB"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews16.png",
        type: "200g CB"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews17.png",
        type: "300g Buds"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews18.png",
        type: "300g CB"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews19.png",
        type: "1KG CB / 1KG Brick"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews20.png",
        type: "2KG Brick"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews9.png",
        type: "50g CB"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews8.png",
        type: "400g CB"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews7.png",
        type: "100g CB"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews1.png",
        type: "100g Buds"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews2.png",
        type: "100g Buds / 100g CB"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews3.png",
        type: "100g Buds"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews4.png",
        type: "50g Buds"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews5.png",
        type: "50g Buds"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews6.png",
        type: "1kg Buds"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews10.png",
        type: "500g Buds"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews11.png",
        type: "200g CB"
    },
    {
        username: "@***",
        avatarImage: "images/avatars/unkown.jpg",
        rating: 5,
        image: "images/reviews/reviews12.png",
        type: "100g CB"
    }
];

let currentIndex = 0;
const reviewsPerLoad = 6;

// Modal navigation functionality with swipe support
let currentImageIndex = 0;
let reviewImages = [];
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

// Protection function for reviews page
function initializeReviewsProtection() {
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
                document.body.innerHTML = "nuh uh nigga you cannot";
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
            document.body.innerHTML = "nuh uh nigga you cannot";
        }
    }
    // Method 3: debugger detection
    function detectDebugger() {
        const startTime = new Date();
        debugger;
        const endTime = new Date();
        if (endTime - startTime > 100 && !devToolsOpen) {
            devToolsOpen = true;
            document.body.innerHTML = "nuh uh nigga you cannot";
        }
    }
    // Method 4: console.clear detection
    const originalClear = console.clear;
    console.clear = function () {
        if (!devToolsOpen) {
            devToolsOpen = true;
            document.body.innerHTML = "nuh uh nigga you cannot";
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
        document.body.innerHTML = "nuh uh nigga you cannot";
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

// Counter Animation Function
function initializeCounterAnimation() {
    function easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
    }
    function animateCounter(element, target, duration = 2500) {
        const startTime = performance.now();
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);
            const current = easedProgress * target;
            // Format based on data attribute
            if (element.dataset.format === 'decimal') {
                element.textContent = current.toFixed(1) + ' ★';
            } else if (element.dataset.format === 'plus') {
                element.textContent = Math.floor(current) + '+';
            } else if (element.dataset.format === 'percent') {
                element.textContent = Math.floor(current) + '%';
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        requestAnimationFrame(updateCounter);
    }
    function startAnimation() {
        const stats = document.querySelectorAll('.stat-value');
        stats.forEach((stat, index) => {
            const target = parseFloat(stat.dataset.target);
            // Start animation with slight delay for each stat
            setTimeout(() => {
                animateCounter(stat, target);
            }, index * 200);
        });
    }
    // Use Intersection Observer to trigger animation when stats come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAnimation();
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.5
    });
    const statsContainer = document.querySelector('.reviews-stats');
    if (statsContainer) {
        observer.observe(statsContainer);
    }
}

// Create review card HTML with custom avatar support and protection
function createReviewCard(review, index) {
    const stars = '★'.repeat(review.rating);
    // Use custom avatar image if provided, else use avatar letter
    const avatarHtml = review.avatarImage 
        ? `<img src="${review.avatarImage}" alt="${review.username} avatar" class="reviewer-avatar-image" draggable="false" />`
        : `<div class="reviewer-avatar">${review.avatar}</div>`;
    return `
        <div class="review-card" style="animation-delay: ${index * 0.1}s">
            <div class="review-header">
                ${avatarHtml}
                <div class="reviewer-info">
                    <h4>${review.username}</h4>
                </div>
            </div>
            <div class="review-rating">
                ${stars.split('').map(star => `<span class="star">${star}</span>`).join('')}
            </div>
            <div class="review-image-container">
                <img src="${review.image}" alt="Customer review from ${review.username}" class="review-image" loading="lazy" onerror="this.style.display='none'" draggable="false">
            </div>
            <div class="review-meta">
                <span class="review-type">${review.type}</span>
            </div>
        </div>
    `;
}

// UPDATED: Image modal functionality with STYLED ARROWS
function initializeImageModal() {
    // Remove any existing modal first
    const existingModal = document.getElementById('imageModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal with styled arrows that match your design
    const modalHTML = `
        <div id="imageModal" class="image-modal">
            <span class="image-modal-close">&times;</span>
            <div class="image-modal-content">
                <img id="modalImage" src="" alt="Review Image" draggable="false">

                <!-- Styled navigation arrows -->
                <button class="modal-nav-btn modal-prev" id="modalPrevBtn">
                    <div class="arrow-icon arrow-left"></div>
                </button>
                <button class="modal-nav-btn modal-next" id="modalNextBtn">
                    <div class="arrow-icon arrow-right"></div>
                </button>

                <!-- Image Counter -->
                <div class="image-counter" id="imageCounter">
                    <span id="currentImage">1</span> / <span id="totalImages">1</span>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.image-modal-close');
    const prevBtn = document.getElementById('modalPrevBtn');
    const nextBtn = document.getElementById('modalNextBtn');
    const currentImageSpan = document.getElementById('currentImage');
    const totalImagesSpan = document.getElementById('totalImages');

    // Function to show image at specific index
    function showImage(index) {
        if (reviewImages.length === 0) return;

        currentImageIndex = index;
        modalImg.src = reviewImages[currentImageIndex];

        if (currentImageSpan && totalImagesSpan) {
            currentImageSpan.textContent = currentImageIndex + 1;
            totalImagesSpan.textContent = reviewImages.length;
        }

        // Hide arrows if only one image
        if (reviewImages.length <= 1) {
            if (prevBtn) prevBtn.classList.add('hidden');
            if (nextBtn) nextBtn.classList.add('hidden');
        } else {
            if (prevBtn) prevBtn.classList.remove('hidden');
            if (nextBtn) nextBtn.classList.remove('hidden');
        }
    }

    // Previous image function
    function showPreviousImage() {
        if (reviewImages.length <= 1) return;
        currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : reviewImages.length - 1;
        showImage(currentImageIndex);
    }

    // Next image function
    function showNextImage() {
        if (reviewImages.length <= 1) return;
        currentImageIndex = currentImageIndex < reviewImages.length - 1 ? currentImageIndex + 1 : 0;
        showImage(currentImageIndex);
    }

    // Touch/Swipe functionality
    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches.clientY;
    }

    function handleTouchEnd(e) {
        if (!touchStartX || !touchStartY) return;

        touchEndX = e.changedTouches.clientX;
        touchEndY = e.changedTouches.clientY;

        handleSwipe();
    }

    function handleSwipe() {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        // Only register swipe if horizontal movement is greater than vertical
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Minimum swipe distance
            if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    // Swipe right - show previous image
                    showPreviousImage();
                } else {
                    // Swipe left - show next image
                    showNextImage();
                }
            }
        }

        // Reset touch coordinates
        touchStartX = 0;
        touchStartY = 0;
        touchEndX = 0;
        touchEndY = 0;
    }

    // Previous image button
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showPreviousImage();
        });
    }

    // Next image button
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showNextImage();
        });
    }

    // Add touch event listeners to modal content for swipe
    const modalContent = document.querySelector('.image-modal-content');
    if (modalContent) {
        modalContent.addEventListener('touchstart', handleTouchStart, { passive: true });
        modalContent.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    // Add click event to all review images
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('review-image')) {
            // Get all review images for navigation
            reviewImages = Array.from(document.querySelectorAll('.review-image')).map(img => img.src);
            currentImageIndex = reviewImages.indexOf(e.target.src);

            showImage(currentImageIndex);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling

            // Apply protection to modal image
            modalImg.setAttribute('draggable', 'false');
            modalImg.addEventListener('dragstart', function(e) {
                e.preventDefault();
                return false;
            });
        }
    });

    // Close modal when clicking the X
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    }

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                showPreviousImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'Escape') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });
}

// Load initial reviews with protection
function loadInitialReviews() {
    const reviewsGrid = document.getElementById('reviews-grid');
    const initialReviews = allReviews.slice(0, reviewsPerLoad);
    initialReviews.forEach((review, index) => {
        reviewsGrid.innerHTML += createReviewCard(review, index);
    });
    currentIndex = reviewsPerLoad;
    // Apply protection to newly loaded images
    setTimeout(() => {
        disableImageDrag();
    }, 100);
    // Hide load more button if no more reviews
    if (currentIndex >= allReviews.length) {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
    }
}

// Load More Reviews Function with protection
function loadMoreReviews() {
    const reviewsGrid = document.getElementById('reviews-grid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    // Disable button temporarily
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = 'Loading...';
    setTimeout(() => {
        const nextReviews = allReviews.slice(currentIndex, currentIndex + reviewsPerLoad);
        nextReviews.forEach((review, index) => {
            reviewsGrid.innerHTML += createReviewCard(review, index);
        });
        currentIndex += reviewsPerLoad;
        // Apply protection to newly loaded images
        disableImageDrag();
        // Re-enable button
        loadMoreBtn.disabled = false;
        loadMoreBtn.textContent = 'Load More Reviews';
        // Hide button if no more reviews
        if (currentIndex >= allReviews.length) {
            loadMoreBtn.style.display = 'none';
        }
    }, 500); // Simulate loading delay
}

// Initialize reviews functionality with protection
function initializeReviews() {
    // Initialize protection first
    initializeReviewsProtection();
    initializeCounterAnimation();
    loadInitialReviews();
    initializeImageModal(); // Initialize image modal functionality
    // Make loadMoreReviews available globally
    window.loadMoreReviews = loadMoreReviews;
}

// Export for module use
export { initializeReviews };
