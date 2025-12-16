// Реальные товары по категориям
const products = [
    // === АКУСТИКА ===
    {
        id: 1,
        name: "Компонентная акустика Focal PS 165F",
        price: 32000,
        image: "https://i.ibb.co/7yFz8Gk/focal-ps165f.jpg",
        category: "dynamics"
    },
    {
        id: 2,
        name: "Сабвуфер JBL GT5-12",
        price: 18000,
        image: "https://i.ibb.co/Kx2qVnB/jbl-gt5-12.jpg",
        category: "subwoofers"
    },
    {
        id: 3,
        name: "Овальная акустика Hertz EPX 690",
        price: 9500,
        image: "https://i.ibb.co/0XH5wJk/hertz-epx690.jpg",
        category: "ovals"
    },
    {
        id: 4,
        name: "Пищалки Morel MDT 20",
        price: 6200,
        image: "https://i.ibb.co/6nHkVvq/morel-mdt20.jpg",
        category: "tweeters"
    },

    // === УСИЛИТЕЛИ ===
    {
        id: 5,
        name: "Усилитель Alpine MRV-F300",
        price: 12500,
        image: "https://i.ibb.co/6FbQjWv/alpine-mrv-f300.jpg",
        category: "amplifiers"
    },
    {
        id: 6,
        name: "Усилитель JBL GX-A602",
        price: 9800,
        image: "https://i.ibb.co/6FbQjWv/jbl-gx-a602.jpg",
        category: "amplifiers"
    },

    // === АКСЕССУАРЫ ===
    {
        id: 7,
        name: "Акустический кабель 4 Ga (5м)",
        price: 1200,
        image: "https://i.ibb.co/6FbQjWv/cable-4ga.jpg",
        category: "accessories"
    },
    {
        id: 8,
        name: "Блок предохранителей 60А",
        price: 450,
        image: "https://i.ibb.co/6FbQjWv/fuse-block.jpg",
        category: "accessories"
    },
    {
        id: 9,
        name: "Конденсатор 1F с индикатором",
        price: 2200,
        image: "https://i.ibb.co/6FbQjWv/capacitor-1f.jpg",
        category: "accessories"
    }
];

let cart = [];
let currentPage = 'home';

// Показать страницу
function showPage(page) {
    document.querySelectorAll('.page, #home-page').forEach(el => el.classList.add('hidden'));
    if (page === 'home') {
        document.getElementById('home-page').classList.remove('hidden');
        renderProducts('all');
    } else {
        document.getElementById(page + '-page').classList.remove('hidden');
        renderCategoryPage(page);
    }
    currentPage = page;
}

// Отобразить товары на главной
function renderProducts(category = 'all') {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:30px; color:#aaa;">Нет товаров</p>`;
        return;
    }

    filtered.forEach(product => {
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

// Отобразить товары на странице категории
function renderCategoryPage(categoryKey) {
    const container = document.getElementById(categoryKey + '-products');
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

    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:30px; color:#aaa;">Нет товаров в этой категории</p>`;
        return;
    }

    filtered.forEach(product => {
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
    cart.push(product);
    document.getElementById('cart-btn').textContent = `🛒 Корзина (${cart.length})`;
    alert(`✅ ${product.name} добавлен в корзину!`);
}

// Фильтрация на главной
function showCategory(category) {
    renderProducts(category);
}

// Инициализация
renderProducts('all');
