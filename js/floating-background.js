
export function initializeFloatingBackground() {
    const floatingContainer = document.querySelector('.floating-background');
    
    if (!floatingContainer) return;

    // Function to create a new floating GIF element
    function createFloatingGif() {
        const gifElement = document.createElement('div');
        gifElement.className = 'floating-emoji';
        
        // Create img element for the GIF
        const img = document.createElement('img');
        img.src = 'images/background.gif';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        
        gifElement.appendChild(img);
        
        // Better random horizontal position distribution
        gifElement.style.left = Math.random() * 95 + '%';
        
        // Random animation duration (faster and more frequent)
        gifElement.style.animationDuration = (10 + Math.random() * 15) + 's';
        
        // Random delay with better distribution
        gifElement.style.animationDelay = Math.random() * 5 + 's';
        
        // Add slight horizontal drift
        const drift = (Math.random() - 0.5) * 100;
        gifElement.style.setProperty('--drift', drift + 'px');
        
        // Random size variation (smaller sizes)
        const size = 1 + Math.random() * 1.5;
        gifElement.style.fontSize = size + 'rem';
        gifElement.style.width = (20 + Math.random() * 30) + 'px';
        gifElement.style.height = (20 + Math.random() * 30) + 'px';
        
        floatingContainer.appendChild(gifElement);
        
        // Remove element after animation completes
        setTimeout(() => {
            if (gifElement.parentNode) {
                gifElement.parentNode.removeChild(gifElement);
            }
        }, 25000);
    }
    
    // Create initial GIF elements (more than before)
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createFloatingGif(), i * 1000);
    }
    
    // Continuously add new GIF elements more frequently
    setInterval(createFloatingGif, 1500);
}
