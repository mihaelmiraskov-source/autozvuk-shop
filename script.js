// Товары по категориям
const products = [
    {
        id: 1,
        name: "Компонентная акустика Focal PS 165F",
        price: 32000,
        image: "https://i.ibb.co/CpC2bz1K/4463c342-3c99-44ae-a94c-99eb76c790a8.jpg",
        category: "dynamics"
    },
    {
        id: 2,
        name: "Сабвуфер JBL GT5-12",
        price: 18000,
        image: "https://i.ibb.co/Kx2qVnB/jbl-gt5.jpg",
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
    {
        id: 5,
        name: "Усилитель Alpine MRV-F300",
        price: 12500,
        image: "https://i.ibb.co/6FbQjWv/pioneer-tsa6902f.jpg",
        category: "amplifiers"
    },
    {
        id: 6,
        name: "Кабель акустический Oxygen-Free",
        price: 450,
        image: "https://i.ibb.co/6FbQjWv/pioneer-tsa6902f.jpg",
        category: "accessories"
    }
];

let cart = [];
let currentPage = 'home';

// Показать страницу
function showPage(page) {
    document.querySelectorAll('.page, #home-page').forEach(el => el.classList.add('hidden'));
    document.getElementById(page + '-page')?.classList.remove('hidden');
    if (page === 'home') {
        document.getElementById('home-page').classList.remove('hidden');
        renderProducts('all');
    } else {
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

    const filtered = products.filter(p => 
        categoryKey === 'dynamics' ? ['dynamics', 'subwoofers', 'ovals', 'tweeters'].includes(p.category)
        : p.category === categoryKey
    );

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
