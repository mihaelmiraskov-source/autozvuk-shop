const products = [
    // === АКУСТИКА ===
    {
        id: 1,
        name: "Компонентная акустика Focal PS 165F",
        price: 32000,
        image: "https://via.placeholder.com/300x150/4a00e0/FFFFFF?text=Focal+PS165F",
        category: "dynamics"
    },
    {
        id: 2,
        name: "Сабвуфер JBL GT5-12",
        price: 18000,
        image: "https://via.placeholder.com/300x150/8e2de2/FFFFFF?text=JBL+GT5-12",
        category: "subwoofers"
    },
    {
        id: 3,
        name: "Овальная акустика Hertz EPX 690",
        price: 9500,
        image: "https://via.placeholder.com/300x150/00c9ff/FFFFFF?text=Hertz+EPX690",
        category: "ovals"
    },
    {
        id: 4,
        name: "Пищалки Morel MDT 20",
        price: 6200,
        image: "https://via.placeholder.com/300x150/ff6b6b/FFFFFF?text=Morel+MDT20",
        category: "tweeters"
    },

    // === УСИЛИТЕЛИ ===
    {
        id: 5,
        name: "Усилитель Alpine MRV-F300",
        price: 12500,
        image: "https://via.placeholder.com/300x150/6e45e2/FFFFFF?text=Alpine+MRV-F300",
        category: "amplifiers"
    },
    {
        id: 6,
        name: "Усилитель JBL GX-A602",
        price: 9800,
        image: "https://via.placeholder.com/300x150/222222/FFFFFF?text=JBL+GX-A602",
        category: "amplifiers"
    },

    // === АКСЕССУАРЫ ===
    {
        id: 7,
        name: "Акустический кабель 5м",
        price: 1200,
        image: "https://via.placeholder.com/300x150/aaaaaa/FFFFFF?text=Кабель+4+Ga",
        category: "accessories"
    },
    {
        id: 8,
        name: "Блок предохранителей 60А",
        price: 450,
        image: "https://via.placeholder.com/300x150/555555/FFFFFF?text=Блок+предохранителей",
        category: "accessories"
    },
    {
        id: 9,
        name: "Конденсатор 1F с индикатором",
        price: 2200,
        image: "https://via.placeholder.com/300x150/333333/FFFFFF?text=Конденсатор+1F",
        category: "accessories"
    }
];

let cart = [];

// Показать страницу
function showPage(page) {
    document.querySelectorAll('#home-page, .page').forEach(el => {
        el.classList.add('hidden');
    });
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

// Отобразить товары на главной
function renderProducts(category = 'all') {
    const container = document.getElementById('products-container');
    if (!container) return;
    container.innerHTML = '';
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    renderProductList(filtered, container);
}

// Отобразить товары на странице категории
function renderCategoryPage(categoryKey) {
    const container = document.getElementById(categoryKey + '-products');
    if (!container) return;
    container.innerHTML = '';
    let filtered = [];
    if (categoryKey === 'dynamics') {
        // Все типы акустики
        filtered = products.filter(p => 
            ['dynamics', 'subwoofers', 'ovals', 'tweeters'].includes(p.category)
        );
    } else {
        // Остальные — по одному типу
        filtered = products.filter(p => p.category === categoryKey);
    }
    renderProductList(filtered, container);
}

// Универсальная отрисовка списка
function renderProductList(list, container) {
    if (list.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:30px; color:#aaa;">Нет товаров</p>`;
        return;
    }
    list.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="price">${product.price.toLocaleString()} ₽</div>
            <button onclick="addToCart(${product.id})">В корзину</button>
        `;
        container.appendChild(card);
    });
}

// Добавить в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    cart.push(product);
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.textContent = `🛒 Корзина (${cart.length})`;
    }
    alert(`✅ ${product.name} добавлен в корзину!`);
}

// Фильтрация на главной
function showCategory(category) {
    renderProducts(category);
}

// Запуск после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
});
