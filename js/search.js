
export function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchInput && searchBtn) {
        searchInput.addEventListener('input', performSearch);
        searchBtn.addEventListener('click', performSearch);

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.toLowerCase().trim();
    const productCards = document.querySelectorAll('.product-card');

    let visibleCount = 0;

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        const isVisible = productName.includes(searchTerm) || searchTerm === '';

        card.style.display = isVisible ? 'block' : 'none';
        if (isVisible) visibleCount++;
    });

    const productsTitle = document.querySelector('.products-title');
    if (searchTerm === '') {
        productsTitle.textContent = 'All Products';
    } else {
        productsTitle.textContent = `Search Results (${visibleCount} found)`;
    }
}

