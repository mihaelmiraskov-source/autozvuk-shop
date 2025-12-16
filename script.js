// Твои реальные товары — просто добавляй сюда!
const products = [
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
        name: "Коаксиальные динамики Pioneer TS-A6902F",
        price: 4800,
        image: "https://i.ibb.co/6FbQjWv/pioneer-tsa6902f.jpg",
        category: "dynamics"
    }
];

let cart = [];

function renderProducts(category = 'all') {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

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

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById('cart-btn').textContent = `🛒 Корзина (${cart.length})`;
    alert(`✅ ${product.name} добавлен в корзину!`);
}

function showCategory(category) {
    renderProducts(category);
}

// Инициализация
renderProducts('all');

// Корзина
document.getElementById('cart-btn').onclick = () => {
    if (cart.length === 0) return alert("Корзина пуста 😢");
    
    let text = "📦 Новый заказ:\n\n";
    let total = 0;
    cart.forEach(i => {
        text += `• ${i.name} — ${i.price} ₽\n`;
        total += i.price;
    });
    text += `\nИТОГО: ${total} ₽`;

    // Отправить заказ (позже — тебе в Telegram)
    alert(text);
    
    // Пример: открыть ссылку на оплату
    // window.open("https://yoomoney.ru/checkout/...");
};
