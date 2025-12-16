const products = [
    { id: 1, name: "Усилитель Alpine PDX-V9", price: 25000, image: "https://placehold.co/300x150/4a00e0/FFFFFF?text=Alpine+PDX" },
    { id: 2, name: "Сабвуфер JBL GT5-12", price: 18000, image: "https://placehold.co/300x150/8e2de2/FFFFFF?text=JBL+GT5" },
    { id: 3, name: "Магнитола Sony XAV-AX1000", price: 12000, image: "https://placehold.co/300x150/00c9ff/FFFFFF?text=Sony+XAV" },
    { id: 4, name: "Акустика Focal PS 165F", price: 32000, image: "https://placehold.co/300x150/ff6b6b/FFFFFF?text=Focal" }
];

let cart = [];

function renderProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = products.map(p => `
        <div class="product-card" onclick="addToCart(${p.id})">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.price} ₽</p>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById('cart-btn').textContent = `🛒 Корзина (${cart.length})`;
    alert(`✅ ${product.name} добавлен в корзину!`);
}

document.getElementById('cart-btn').onclick = () => {
    if (cart.length === 0) return alert("Корзина пуста 😢");
    let text = "Ваш заказ:\n\n";
    let total = 0;
    cart.forEach(i => { text += `${i.name} — ${i.price} ₽\n`; total += i.price; });
    text += `\nИТОГО: ${total} ₽`;
    alert(text);
    // Здесь можно добавить ссылку на оплату позже
};

renderProducts();
