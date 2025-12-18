const products = [
    // === АКУСТИЧЕСКИЕ СИСТЕМЫ (ДИНАМИКИ) ===
    { id: 101, name: "Компонентная акустика Focal PS 165F", price: 32000, category: "dynamics" },
    { id: 102, name: "Коаксиальная акустика Hertz ESK 165.5", price: 11500, category: "dynamics" },
    { id: 103, name: "Компонентная акустика Morel Tempo 602", price: 24000, category: "dynamics" },
    { id: 104, name: "Коаксиальная акустика JBL GX602", price: 5800, category: "dynamics" },
    { id: 105, name: "Компонентная акустика Rainbow EL-C6.2", price: 19800, category: "dynamics" },
    { id: 106, name: "Коаксиальная акустика Pioneer TS-A6985S", price: 7200, category: "dynamics" },
    { id: 107, name: "Компонентная акустика Audison Prima AP1", price: 35500, category: "dynamics" },
    { id: 108, name: "Коаксиальная акустика Alpine SPS-610C", price: 9800, category: "dynamics" },
    { id: 109, name: "Компонентная акустика Focal IC 165VC", price: 18500, category: "dynamics" },
    { id: 110, name: "Коаксиальная акустика Kenwood KFC-1696PS", price: 6500, category: "dynamics" },
    { id: 111, name: "Компонентная акустика Hertz Dieci DK 165.3", price: 22000, category: "dynamics" },
    { id: 112, name: "Коаксиальная акустика Sony XS-FB6922", price: 8200, category: "dynamics" },
    { id: 113, name: "Компонентная акустика Morel Maximo 602", price: 28000, category: "dynamics" },
    { id: 114, name: "Коаксиальная акустика JBL Club 6522F", price: 6300, category: "dynamics" },
    { id: 115, name: "Компонентная акустика Rainbow EL-W8", price: 26500, category: "dynamics" },

    // === УСИЛИТЕЛИ, ПРОЦЕССОРЫ, ПРИБОРЫ, ДАТЧИКИ ===
    { id: 201, name: "Усилитель Alpine MRV-F300", price: 12500, category: "amps" },
    { id: 202, name: "Процессор Audison Bit One HD", price: 120000, category: "amps" },
    { id: 203, name: "Усилитель JL Audio JD500/1", price: 32000, category: "amps" },
    { id: 204, name: "Линейный корректор Audio System CO-1000", price: 9500, category: "amps" },
    { id: 205, name: "Усилитель Focal FPS 4160", price: 28500, category: "amps" },
    { id: 206, name: "Вольтметр цифровой с RGB-подсветкой", price: 1200, category: "amps" },
    { id: 207, name: "Процессор Helix DSP Ultra", price: 180000, category: "amps" },
    { id: 208, name: "Усилитель Hertz EP 4", price: 15800, category: "amps" },
    { id: 209, name: "Амперметр аналоговый 100A", price: 850, category: "amps" },
    { id: 210, name: "Усилитель JBL GX-A604", price: 9800, category: "amps" },
    { id: 211, name: "Линейный выходной преобразователь (LOC)", price: 2200, category: "amps" },
    { id: 212, name: "Усилитель Audison SR 4", price: 42000, category: "amps" },
    { id: 213, name: "Датчик напряжения с сигнализацией", price: 1500, category: "amps" },
    { id: 214, name: "Усилитель Morel MPS 4.200", price: 48000, category: "amps" },
    { id: 215, name: "Эквалайзер 15-полосный Behringer", price: 11000, category: "amps" },

    // === АВТОМАГНИТОЛЫ ===
    { id: 301, name: "Автомагнитола Alpine ILX-F109", price: 29900, category: "headunits" },
    { id: 302, name: "Автомагнитола Pioneer DMH-Z5000BT", price: 25800, category: "headunits" },
    { id: 303, name: "Автомагнитола Sony XAV-AX5500", price: 38500, category: "headunits" },
    { id: 304, name: "Автомагнитола JVC KW-V950BTS", price: 18000, category: "headunits" },
    { id: 305, name: "Автомагнитола Kenwood DDX4019DAB", price: 32000, category: "headunits" },
    { id: 306, name: "Автомагнитола Alpine UTE-73BT", price: 15000, category: "headunits" },
    { id: 307, name: "Автомагнитола Pioneer DEH-X8800DAB", price: 19500, category: "headunits" },
    { id: 308, name: "Автомагнитола Sony MEX-N5400BT", price: 22000, category: "headunits" },
    { id: 309, name: "Автомагнитола Alpine CDE-175R", price: 9800, category: "headunits" },
    { id: 310, name: "Автомагнитола JVC KW-M790BT", price: 42000, category: "headunits" },
    { id: 311, name: "Автомагнитола Kenwood Excelon DDX9907XR", price: 68000, category: "headunits" },
    { id: 312, name: "Автомагнитола Pioneer DMH-Z7000BT", price: 45000, category: "headunits" },
    { id: 313, name: "Автомагнитола Focal i300", price: 36500, category: "headunits" },
    { id: 314, name: "Автомагнитола Sony XAV-AX1000", price: 12000, category: "headunits" },
    { id: 315, name: "Автомагнитола Alpine X509U-WRA", price: 310000, category: "headunits" },

    // === САБВУФЕРЫ И АКСЕССУАРЫ ===
    // Сабвуферы
    { id: 401, name: "Сабвуфер JBL GT5-12", price: 18000, category: "subwoofers" },
    { id: 402, name: "Сабвуфер Focal Performance P 30F", price: 22000, category: "subwoofers" },
    { id: 403, name: "Сабвуфер Hertz EP 4", price: 28000, category: "subwoofers" },
    { id: 404, name: "Сабвуфер Morel Supremo SUB421", price: 52000, category: "subwoofers" },
    { id: 405, name: "Сабвуфер Alpine S-W12D4", price: 15500, category: "subwoofers" },
    // Аксессуары
    { id: 406, name: "Акустический кабель 4 Ga, 5м", price: 1200, category: "accessories" },
    { id: 407, name: "Блок предохранителей 60А с держателем", price: 450, category: "accessories" },
    { id: 408, name: "Конденсатор 1F с цифровым вольтметром", price: 2200, category: "accessories" },
    { id: 409, name: "RCA-кабель межблочный 5м", price: 850, category: "accessories" },
    { id: 410, name: "Клеммник акустический 4 Ga", price: 320, category: "accessories" },
    { id: 411, name: "Разветвитель питания 4 Ga", price: 550, category: "accessories" },
    { id: 412, name: "Антенна авто магнитная AM/FM", price: 900, category: "accessories" },
    { id: 413, name: "ЗИП-торцевые заглушки 1DIN", price: 180, category: "accessories" },
    { id: 414, name: "Шумоизоляция колесных арок", price: 1600, category: "accessories" },
    { id: 415, name: "Крепёжный комплект для динамиков", price: 250, category: "accessories" },

    // === КОРОБА И ПОДИУМЫ ===
    { id: 501, name: "Короб под JBL GT5-12 (закрытый)", price: 3500, category: "boxes" },
    { id: 502, name: "Короб под Focal Performance P 30F", price: 4200, category: "boxes" },
    { id: 503, name: "Подиумы под динамики 16 см (пара)", price: 2200, category: "boxes" },
    { id: 504, name: "Короб фазоинверторный под Alpine S-W12D4", price: 3800, category: "boxes" },
    { id: 505, name: "Подиумы под овалы 6x9 дюймов", price: 2500, category: "boxes" },
    { id: 506, name: "Короб под Hertz EP 4", price: 4500, category: "boxes" },
    { id: 507, name: "Подиумы универсальные регулируемые", price: 2800, category: "boxes" },
    { id: 508, name: "Короб bandpass под JBL GT5-12", price: 5500, category: "boxes" },
    { id: 509, name: "Подиумы с подсветкой RGB", price: 3200, category: "boxes" },
    { id: 510, name: "Короб из МДФ 18 мм (заказной)", price: 6000, category: "boxes" },
    { id: 511, name: "Подиумы под пищалки 25 мм", price: 1500, category: "boxes" },
    { id: 512, name: "Короб с LED-подсветкой", price: 4800, category: "boxes" },
    { id: 513, name: "Подиумы с вентиляцией", price: 2900, category: "boxes" },
    { id: 514, name: "Короб под 2 сабвуфера 10 дюймов", price: 7500, category: "boxes" },
    { id: 515, name: "Подиумы аэродинамические", price: 3500, category: "boxes" }
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

function renderCategoryPage(cat) {
    const cont = document.getElementById(cat + '-products');
    if (!cont) return;
    cont.innerHTML = '';
    let list = [];

    if (cat === 'dynamics') {
        list = products.filter(p => p.category === 'dynamics');
    } else if (cat === 'amps') {
        list = products.filter(p => p.category === 'amps');
    } else if (cat === 'headunits') {
        list = products.filter(p => p.category === 'headunits');
    } else if (cat === 'subsacc') {
        list = products.filter(p => p.category === 'subwoofers' || p.category === 'accessories');
    } else if (cat === 'boxes') {
        list = products.filter(p => p.category === 'boxes');
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
            <img src="https://i.ibb.co/CpC2bz1K/4463c342-3c99-44ae-a94c-99eb76c790a8.jpg" alt="${p.name}">
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

document.addEventListener('DOMContentLoaded', () => {});
