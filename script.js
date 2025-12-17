const products = [
    // Акустика
    { id: 1, name: "Компонентная акустика Focal PS 165F", price: 32000, image: "https://i.ibb.co/7yFz8Gk/focal-ps165f.jpg", category: "dynamics" },
    { id: 2, name: "Сабвуфер JBL GT5-12", price: 18000, image: "https://i.ibb.co/Kx2qVnB/jbl-gt5-12.jpg", category: "subwoofers" },
    { id: 3, name: "Овальная акустика Hertz EPX 690", price: 9500, image: "https://i.ibb.co/0XH5wJk/hertz-epx690.jpg", category: "ovals" },
    { id: 4, name: "Пищалки Morel MDT 20", price: 6200, image: "https://i.ibb.co/6nHkVvq/morel-mdt20.jpg", category: "tweeters" },
    
    // Усилители
    { id: 5, name: "Усилитель Alpine MRV-F300", price: 12500, image: "https://i.ibb.co/6FbQjWv/alpine-mrv-f300.jpg", category: "amplifiers" },
    { id: 6, name: "Усилитель JBL GX-A602", price: 9800, image: "https://i.ibb.co/6FbQjWv/jbl-gx-a602.jpg", category: "amplifiers" },
    
    // Аксессуары
    { id: 7, name: "Акустический кабель 4 Ga (5м)", price: 1200, image: "https://i.ibb.co/6FbQjWv/cable-4ga.jpg", category: "accessories" },
    { id: 8, name: "Блок предохранителей 60А", price: 450, image: "https://i.ibb.co/6FbQjWv/fuse-block.jpg", category: "accessories" },
    { id: 9, name: "Конденсатор 1F с индикатором", price: 2200, image: "https://i.ibb.co/6FbQjWv/capacitor-1f.jpg", category: "accessories" }
];

let cart = [];

function showPage(page) {
    // Скрыть всё
    document.querySelectorAll('#home-page, .page').forEach(el => {
        el.classList.add('hidden');
    });
    // Показать нужное
    if (page === 'home') {
        document.getElementById('home-page').classList.remove('hidden');
        renderProducts('all');
    } else {
        const pageEl = document.getElementById(page + '-page');
        if (pageEl) {
            pageEl.classList.remove('hidden');
            renderCategoryPage(page);
        }
    }
}

function renderProducts(category = 'all') {
    const container = document.getElementById('products-container');
    if (!container) return;
    container.innerHTML = '';
    const list = category === 'all' ? products : products.filter(p => p.category === category);
    renderProductList(list, container);
}

function renderCategoryPage(categoryKey) {
    const container = document.getElementById(categoryKey + '-products');
    if (!container) return;
    container.innerHTML = '';
    let list = [];
    if (categoryKey === 'dynamics') {
        list = products.filter(p => ['dynamics','subwoofers','ovals','tweeters'].includes(p.category));
    } else {
        list = products.filter(p => p.category === categoryKey);
    }
    renderProductList(list, container);
}

function renderProductList(productsList, container) {
    if (productsList.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:30px; color:#aaa;">Нет товаров</p>`;
        return;
    }
    productsList.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <div class="price">${p.price.toLocaleString()} ₽</div>
            <button onclick="addToCart(${p.id})">В корзину</button>
        `;
        container.appendChild(card);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    cart.push(product);
    const btn = document.getElementById('cart-btn');
    if (btn) btn.textContent = `🛒 Корзина (${cart.length})`;
    alert(`✅ ${product.name} добавлен в корзину!`);
}

function showCategory(cat) {
    renderProducts(cat);
}

// Запуск
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
});
