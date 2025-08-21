export function initializeMainFeatures() {
    // Initialize protection features first
    initializeProtection();

    // Enhanced smooth scrolling for browse button
    const browseBtn = document.querySelector('.browse-btn');
    const productsSection = document.querySelector('.products');

    if (browseBtn && productsSection) {
        browseBtn.addEventListener('click', function(e) {
            e.preventDefault();

            // Calculate the offset for the header
            const headerHeight = document.querySelector('.header').offsetHeight || 80;
            const targetPosition = productsSection.offsetTop - headerHeight - 20; // Added extra padding

            // Custom smooth scroll function for better control
            smoothScrollTo(targetPosition, 800); // 800ms duration
        });
    }

    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Enhanced header scroll effect with smooth transitions
    let ticking = false;

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                const header = document.querySelector('.header');
                if (window.scrollY > 50) {
                    header.style.background = 'rgba(0, 0, 0, 0.8)';
                    header.style.backdropFilter = 'blur(10px)';
                    header.style.transition = 'all 0.3s ease';
                } else {
                    header.style.background = 'rgba(0, 0, 0, 0.3)';
                    header.style.backdropFilter = 'blur(5px)';
                    header.style.transition = 'all 0.3s ease';
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Protection function
function initializeProtection() {
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
                document.body.innerHTML = "nuh uh nigga dick u cannot";
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
            document.body.innerHTML = "nuh uh nigga dick u cannot";
        }
    }

    // Method 3: debugger detection
    function detectDebugger() {
        const startTime = new Date();
        debugger;
        const endTime = new Date();

        if (endTime - startTime > 100 && !devToolsOpen) {
            devToolsOpen = true;
            document.body.innerHTML = "nuh uh nigga dick u cannot";
        }
    }

    // Method 4: console.clear detection
    const originalClear = console.clear;
    console.clear = function () {
        if (!devToolsOpen) {
            devToolsOpen = true;
            document.body.innerHTML = "nuh uh nigga dick u cannot";
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
        document.body.innerHTML = "nuh uh nigga dick u cannot";
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

// Custom smooth scroll function with easing
function smoothScrollTo(targetPosition, duration = 1000) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function for smooth animation
    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}