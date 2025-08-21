
export function initializeNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');

    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            navTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const category = this.dataset.category;
            filterProductsByCategory(category);
        });
    });
}

function filterProductsByCategory(category) {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        if (category === 'all' || category === card.dataset.category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
