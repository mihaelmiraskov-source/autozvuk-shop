const products = [
    // Акустика
    { id: 1, name: "Компонентная акустика Focal PS 165F", price: 32000, category: "dynamics" },
    { id: 2, name: "Сабвуфер JBL GT5-12", price: 18000, category: "subwoofers" },
    { id: 3, name: "Овальная акустика Hertz EPX 690", price: 9500, category: "ovals" },
    { id: 4, name: "Пищалки Morel MDT 20", price: 6200, category: "tweeters" },
    
    // Усилители
    { id: 5, name: "Усилитель Alpine MRV-F300", price: 12500, category: "amplifiers" },
    { id: 6, name: "Усилитель JBL GX-A602", price: 9800, category: "amplifiers" },
    
    // Автомагнитолы
    { id: 10, name: "Магнитола Alpine UTE-73BT", price: 15000, category: "headunits" },
    { id: 11, name: "Магнитола Sony XAV-AX1000", price: 12000, category: "headunits" },
    { id: 12, name: "Магнитола JVC KW-V950BTS", price: 18000, category: "headunits" },
    
    // Аксессуары
    { id: 7, name: "Акустический кабель 5м", price: 1200, category: "accessories" },
    { id: 8, name: "Блок предохранителей 60А", price: 450, category: "accessories" },
    { id: 9, name: "Конденсатор 1F с индикатором", price: 2200, category: "accessories" }
];

let cart = [];

function showPage(page) {
    document.querySelectorAll('#home-page, .page').forEach(el => el.classList.add('hidden'));
    if (page === 'home') {
        document.getElementById('home-page').classList.remove('hidden');
    } else {
        const el = document.getElementById(page + '-page');
        if (el) {
            el.classList.remove('hidden');
            renderCategoryPage(page);
        }
    }
}

function getImageForProduct(name) {
    const safeName = name.replace(/\s+/g, ' ').trim();
    return `
    <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1a142a" rx="8"/>
      <text x="50%" y="50%" fill="#88d3ce" font-size="10" text-anchor="middle" dominant-baseline="middle">
        ${safeName}
      </text>
      <text x="50%" y="65%" fill="#ffcc00" font-size="8" text-anchor="middle">
        Нажмите для выбора
      </text>
    </svg>`;
}

function renderCategoryPage(cat) {
    const cont = document.getElementById(cat + '-products');
    if (!cont) return;
    cont.innerHTML = '';
    let list = [];

    if (cat === 'dynamics') {
        list = products.filter(p => ['dynamics','subwoofers','ovals','tweeters'].includes(p.category));
    } else if (cat === 'amplifiers') {
        list = products.filter(p => p.category === 'amplifiers');
    } else if (cat === 'headunits') {
        list = products.filter(p => p.category === 'headunits');
    } else if (cat === 'subsacc') {
        // Сабвуферы + аксессуары
        list = products.filter(p => p.category === 'subwoofers' || p.category === 'accessories');
    }

    renderList(list, cont);
}

function renderList(items, container) {
    if (items.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:30px; color:#aaa;">Нет товаров</p>`;
        return;
    }
    items.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML =`
            ${getImageForProduct(p.name)}
            <h3>${p.name}</h3>
            <div class="price">${p.price.toLocaleString()} ₽</div>
            <button onclick="addToCart(${p.id})">В корзину</button>
        `;
        container.appendChild(card);
    });
}

function addToCart(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    cart.push(p);
    const btn = document.getElementById('cart-btn');
    if (btn) btn.textContent = `🛒 Корзина (${cart.length})`;
    alert(`✅ ${p.name} добавлен в корзину!`);
}

document.addEventListener('DOMContentLoaded', () => {
    // Главная страница — пустая
});
