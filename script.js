/* --- TAMACHEBAAZ STORE STABLE APPLICATION CORE ENGINE --- */

const CAPSULE_DATA = [
    // === 180 GSM STANDARD TEES ===
    { id: "std-tee-1", name: "Corporate Slavery Protocol Tee", category: "T-Shirt 180GSM", retailPrice: 488, specs: "180 GSM // 100% Super Combed Cotton[cite: 1]", sizes: ["S","M","L","XL","2XL"], colors: [{name:"PURE BLACK",hex:"#000000"},{name:"STARK WHITE",hex:"#FFFFFF"}], image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80" },
    { id: "std-tee-2", name: "Double Standards Daily Tee", category: "T-Shirt 180GSM", retailPrice: 488, specs: "180 GSM // 100% Super Combed Cotton[cite: 1]", sizes: ["S","M","L","XL"], colors: [{name:"DESERT BEIGE",hex:"#BBA576"},{name:"PURE BLACK",hex:"#000000"}], image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80" },
    { id: "std-tee-3", name: "Per My Last Email Tee", category: "T-Shirt 180GSM", retailPrice: 488, specs: "180 GSM // Bio-Washed Apparel Base[cite: 1]", sizes: ["M","L","XL","2XL"], colors: [{name:"FOREST GREEN",hex:"#05270B"},{name:"DARK GREY",hex:"#353A4A"}], image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=600&q=80" },
    { id: "std-tee-4", name: "System Bug Overlord Tee", category: "T-Shirt 180GSM", retailPrice: 488, specs: "180 GSM // Pre-Shrunk Comfort Base[cite: 1]", sizes: ["S","M","L","XL"], colors: [{name:"LAVENDER",hex:"#9E68C6"},{name:"STARK WHITE",hex:"#FFFFFF"}], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80" },

    // === OVERSIZED 180 GSM TEES ===
    { id: "os-180-1", name: "Asymmetric Double Standards Box Tee", category: "Oversized 180GSM", retailPrice: 570, specs: "180 GSM Oversized // Knit Comfort Flow[cite: 1]", sizes: ["S","M","L","XL"], colors: [{name:"PURE BLACK",hex:"#000000"},{name:"DESERT BEIGE",hex:"#BBA576"}], image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80" },
    { id: "os-180-2", name: "Passive Aggressive Architecture Tee", category: "Oversized 180GSM", retailPrice: 570, specs: "180 GSM Oversized // Dropped Silhouette[cite: 1]", sizes: ["M","L","XL","2XL"], colors: [{name:"LAVENDER",hex:"#9E68C6"},{name:"STARK WHITE",hex:"#FFFFFF"}], image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80" },

    // === OVERSIZED 240 GSM TEES ===
    { id: "os-240-1", name: "Heavy Armour Cynicism Armor Tee", category: "Oversized 240GSM", retailPrice: 683, specs: "240 GSM Heavyweight // Dense Heavy Structure[cite: 1]", sizes: ["S","M","L","XL","2XL"], colors: [{name:"PURE BLACK",hex:"#000000"},{name:"STARK WHITE",hex:"#FFFFFF"}], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80" },
    { id: "os-240-2", name: "Hard Slap Reality Drop Tee", category: "Oversized 240GSM", retailPrice: 683, specs: "240 GSM Heavyweight // High Density Weave[cite: 1]", sizes: ["M","L","XL"], colors: [{name:"DESERT BEIGE",hex:"#BBA576"},{name:"BROWN SLAP",hex:"#290C06"}], image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=600&q=80" },

    // === 240 GSM TERRY SHIRTS ===
    { id: "terry-sh-1", name: "Structured Fluidity Cuban Collar", category: "French Terry 240GSM", retailPrice: 758, specs: "240 GSM French Terry Shirt // Box Fit[cite: 1]", sizes: ["S","M","L","XL","2XL"], colors: [{name:"SLATE INDUSTRIAL",hex:"#3F4955"},{name:"PURE BLACK",hex:"#000000"}], image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80" },
    { id: "terry-sh-2", name: "Office Escapism Layer Shirt", category: "French Terry 240GSM", retailPrice: 758, specs: "240 GSM French Terry Shirt // Loopback Terry[cite: 1]", sizes: ["M","L","XL"], colors: [{name:"PEARL DEEP",hex:"#091837"},{name:"OFF WHITE CORE",hex:"#FAF9F6"}], image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80" },

    // === OVERSIZED TANK TOPS ===
    { id: "tank-1", name: "Asymmetric Rebellion Tank", category: "Oversized Tank Tops", retailPrice: 683, specs: "240 GSM French Terry // Oversized Dropped Armhole[cite: 1]", sizes: ["S","M","L","XL"], colors: [{name:"SLATE GREY",hex:"#3F4955"},{name:"PURE BLACK",hex:"#000000"}], image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80" },
    { id: "tank-2", name: "Out of Office Terminal Tank", category: "Oversized Tank Tops", retailPrice: 683, specs: "240 GSM French Terry // Heavy Relaxed Rib[cite: 1]", sizes: ["M","L","XL","2XL"], colors: [{name:"PEARL BLUE",hex:"#091837"},{name:"OFF WHITE",hex:"#FAF9F6"}], image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=600&q=80" },

    // === OVERSIZED STONEWASH TEES ===
    { id: "stone-180-1", name: "Vintage Cynicism Acid Wash Tee", category: "Oversized Stonewash", retailPrice: 638, specs: "180 GSM Stonewash // Uniquely Distressed Pattern[cite: 1]", sizes: ["S","M","L","XL","2XL"], colors: [{name:"STONEWASH BLACK",hex:"#1C1B21"}], image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?auto=format&fit=crop&w=600&q=80" },
    { id: "stone-240-1", name: "Heavyweight Chaos Wash Shell", category: "Oversized Stonewash", retailPrice: 773, specs: "240 GSM French Terry Stonewash // Heavy Mineral Treat[cite: 1]", sizes: ["S","M","L","XL"], colors: [{name:"MINERAL BLACK",hex:"#24232A"}], image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=600&q=80" },

    // === POLO T-SHIRTS ===
    { id: "polo-1", name: "Corporate Uniform Sabotage Polo", category: "Polo Tshirt", retailPrice: 608, specs: "220 GSM Pique Cotton // Premium Knit Collar[cite: 1]", sizes: ["S","M","L","XL","2XL"], colors: [{name:"MAROON COMM",hex:"#3C0008"},{name:"PURE BLACK",hex:"#000000"}], image: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?auto=format&fit=crop&w=600&q=80" },
    { id: "polo-2", name: "Polite Hypocrisy Retail Polo", category: "Polo Tshirt", retailPrice: 608, specs: "220 GSM Pique Cotton // Lock-Stitched Boundary[cite: 1]", sizes: ["M","L","XL"], colors: [{name:"CHERRY RED",hex:"#F20007"},{name:"STARK WHITE",hex:"#FFFFFF"}], image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80" },

    // === HOODIES & SWEATSHIRTS ===
    { id: "hood-1", name: "Double Layer Anti-Social Shield Hoodie", category: "Oversized Hoodie", retailPrice: 1050, specs: "350 GSM Heavy Fleece // Double Hood Guard (No Tag)[cite: 1]", sizes: ["S","M","L","XL","2XL"], colors: [{name:"DARK GREY",hex:"#14141C"},{name:"PURE BLACK",hex:"#000000"}], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80" },
    { id: "sweat-1", name: "Monday Morning Existential Dread Sweatshirt", category: "Sweatshirt", retailPrice: 953, specs: "350 GSM Premium Fleece // Biowash + Silicone Flow[cite: 1]", sizes: ["S","M","L","XL","2XL"], colors: [{name:"CHARCOAL CORE",hex:"#14141C"},{name:"PURE BLACK",hex:"#000000"}], image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80" }
];

const SYSTEM_SIZE_CHARTS = {
    standard: [
        { sz: "S", chest: 38, len: 25 }, { sz: "M", chest: 40, len: 26 },
        { sz: "L", chest: 42, len: 27 }, { sz: "XL", chest: 44, len: 28 }, { sz: "2XL", chest: 46, len: 29 }
    ],
    oversized: [
        { sz: "S", chest: 43, len: 28.5 }, { sz: "M", chest: 45, len: 29 },
        { sz: "L", chest: 47, len: 29.5 }, { sz: "XL", chest: 49, len: 30 }, { sz: "2XL", chest: 51, len: 30.5 }
    ]
};

let currentCategoryFilter = "ALL";
let selectedProduct = null;
let editingCartKey = null; 
let transactionBundle = { color: null, size: null };

let localCart = JSON.parse(localStorage.getItem('tbz_cart')) || [];
let localWishlist = JSON.parse(localStorage.getItem('tbz_wishlist')) || [];

let trackingDatabase = [
    { id: "TBZ-9942", name: "Corporate Slavery Protocol Tee", spec: "M // PURE BLACK", timestamp: "10 Hours ago", status: "pending", fill: 35 },
    { id: "TBZ-9810", name: "Asymmetric Double Standards Box Tee", spec: "XL // DESERT BEIGE", timestamp: "2 Days ago", status: "completed", fill: 100 }
];

window.onload = () => {
    buildNavigationStructure();
};

function toggleViewSegment(targetSegmentId) {
    document.querySelectorAll('.view-segment').forEach(view => view.classList.remove('visible'));
    document.querySelectorAll('.util-btn').forEach(btn => btn.classList.remove('active-util'));
    
    document.getElementById(`view-${targetSegmentId}`).classList.add('visible');
    
    if(targetSegmentId !== 'catalog') {
        const btn = document.getElementById(`nav-btn-${targetSegmentId}`);
        if(btn) btn.classList.add('active-util');
    }
    
    if(targetSegmentId === 'cart') renderCartSegment();
    if(targetSegmentId === 'wishlist') renderWishlistSegment();
    if(targetSegmentId === 'track') renderTrackingSegment();

    window.scrollTo({top: 0, behavior: 'smooth'});
}

function buildNavigationStructure() {
    const filters = ["ALL", ...new Set(CAPSULE_DATA.map(item => item.category))];
    const container = document.getElementById("category-nav");
    if(!container) return;
    container.innerHTML = "";

    filters.forEach(cat => {
        const tab = document.createElement("button");
        tab.className = `filter-tab ${cat === currentCategoryFilter ? 'active' : ''}`;
        tab.id = `filter-tab-${cat.replace(/[^A-Za-z0-9]/g, '-')}`;
        tab.innerText = cat;
        tab.onclick = () => {
            currentCategoryFilter = cat;
            document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            renderRetinaGrid();
        };
        container.appendChild(tab);
    });

    renderRetinaGrid();
    updateCounterBadges();
}

function renderRetinaGrid() {
    const grid = document.getElementById("product-grid");
    if(!grid) return;
    grid.innerHTML = "";

    const targetedPool = currentCategoryFilter === "ALL" 
        ? CAPSULE_DATA 
        : CAPSULE_DATA.filter(p => p.category === currentCategoryFilter);

    targetedPool.forEach(item => {
        const isStashed = localWishlist.includes(item.id);
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <button class="card-wishlist-hook ${isStashed ? 'stashed' : ''}" onclick="toggleWishlistState(event, '${item.id}')">
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
            <div class="product-media" onclick="launchInteractiveDrawer('${item.id}')">
                <div class="card-glow-bg"></div>
                <img src="${item.image}" alt="${item.name}" class="compiled-dynamic-photo">
            </div>
            <div class="product-info" onclick="launchInteractiveDrawer('${item.id}')">
                <h3>${item.name}</h3>
                <p class="card-meta">Premium Print Formulation // A4 Size Only</p>
                <div class="card-bottom">
                    <span class="price-tag">₹${item.retailPrice}</span>
                    <button class="view-btn">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M1 8h14M9 2l6 6-6 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function toggleWishlistState(event, productId) {
    event.stopPropagation();
    const idx = localWishlist.indexOf(productId);
    if(idx > -1) {
        localWishlist.splice(idx, 1);
    } else {
        localWishlist.push(productId);
    }
    localStorage.setItem('tbz_wishlist', JSON.stringify(localWishlist));
    updateCounterBadges();
    renderRetinaGrid();
    if(document.getElementById('view-wishlist').classList.contains('visible')) renderWishlistSegment();
}

function updateCounterBadges() {
    document.getElementById('wishlist-counter').innerText = localWishlist.length;
    document.getElementById('cart-counter').innerText = localCart.length;
}

function renderWishlistSegment() {
    const grid = document.getElementById("wishlist-grid");
    if(!grid) return;
    grid.innerHTML = "";
    if(localWishlist.length === 0) {
        grid.innerHTML = `<p class="cart-empty-message">// WISHLIST_VACANT_NO_ITEMS_FOUND</p>`;
        return;
    }
    const stashedItems = CAPSULE_DATA.filter(item => localWishlist.includes(item.id));
    stashedItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <button class="card-wishlist-hook stashed" onclick="toggleWishlistState(event, '${item.id}')">
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
            <div class="product-media" onclick="launchInteractiveDrawer('${item.id}')"><img src="${item.image}" alt="${item.name}" class="compiled-dynamic-photo"></div>
            <div class="product-info" onclick="launchInteractiveDrawer('${item.id}')"><h3>${item.name}</h3><div class="card-bottom"><span class="price-tag">₹${item.retailPrice}</span></div></div>
        `;
        grid.appendChild(card);
    });
}

function launchInteractiveDrawer(id, editingKey = null) {
    const item = CAPSULE_DATA.find(p => p.id === id);
    selectedProduct = item;
    editingCartKey = editingKey;

    document.getElementById("inline-size-chart").style.display = "none";

    if(editingCartKey) {
        const currentCartObject = localCart.find(c => c.uniqueKey === editingCartKey);
        transactionBundle = { color: currentCartObject.color, size: currentCartObject.size };
        document.getElementById("drawer-btn-text").innerText = "CONFIRM EDITS";
    } else {
        transactionBundle = { color: item.colors[0].name, size: item.sizes[0] };
        document.getElementById("drawer-btn-text").innerText = "ADD TO BAG";
    }

    document.getElementById("drawer-title").innerText = item.name;
    document.getElementById("drawer-spec").innerText = item.specs;
    document.getElementById("drawer-preview-box").innerHTML = `<div class="inner-glow"></div><img src="${item.image}" alt="${item.name}" class="compiled-dynamic-photo">`;
    document.getElementById("drawer-price").innerText = item.retailPrice;

    compilePillSelectors();
    compileSizeChartMatrix();

    document.getElementById("product-drawer").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeDrawer() {
    document.getElementById("product-drawer").style.display = "none";
    document.body.style.overflow = "auto";
}

function toggleInlineSizeChart() {
    const chartContainer = document.getElementById("inline-size-chart");
    chartContainer.style.display = chartContainer.style.display === "block" ? "none" : "block";
}

function compileSizeChartMatrix() {
    const tableBody = document.getElementById("size-chart-rows");
    const titleNode = document.getElementById("chart-profile-title");
    if(!tableBody || !titleNode) return;

    tableBody.innerHTML = "";
    const architectureType = selectedProduct.category.toLowerCase().includes("oversized") || selectedProduct.category.toLowerCase().includes("terry") || selectedProduct.category.toLowerCase().includes("hoodie") ? "oversized" : "standard";
    
    titleNode.innerText = `${architectureType} ratio scale layout[cite: 1]`;
    const rowsPool = SYSTEM_SIZE_CHARTS[architectureType];

    rowsPool.forEach(r => {
        const rowElement = document.createElement("tr");
        rowElement.innerHTML = `<td>${r.sz}[cite: 1]</td><td>${r.chest}[cite: 1]</td><td>${r.len}[cite: 1]</td>`;
        tableBody.appendChild(rowElement);
    });
}

function compilePillSelectors() {
    const colorBox = document.getElementById("color-options");
    colorBox.innerHTML = "";
    selectedProduct.colors.forEach(c => {
        const swatch = document.createElement("div");
        swatch.className = `color-circle ${c.name === transactionBundle.color ? 'selected' : ''}`;
        swatch.style.backgroundColor = c.hex;
        swatch.onclick = () => { transactionBundle.color = c.name; compilePillSelectors(); };
        colorBox.appendChild(swatch);
    });

    const sizeBox = document.getElementById("size-options");
    sizeBox.innerHTML = "";
    selectedProduct.sizes.forEach(sz => {
        const btn = document.createElement("button");
        btn.className = `pill-btn ${sz === transactionBundle.size ? 'selected' : ''}`;
        btn.innerText = sz;
        btn.onclick = () => { transactionBundle.size = sz; compilePillSelectors(); };
        sizeBox.appendChild(btn);
    });
}

function addItemToCart() {
    if(editingCartKey) {
        const matchingCartObject = localCart.find(c => c.uniqueKey === editingCartKey);
        if(matchingCartObject) {
            matchingCartObject.color = transactionBundle.color;
            matchingCartObject.size = transactionBundle.size;
        }
        editingCartKey = null; 
        localStorage.setItem('tbz_cart', JSON.stringify(localCart));
        if(document.getElementById('view-cart').classList.contains('visible')) renderCartSegment();
        closeDrawer();
        return;
    }

    const newItem = {
        uniqueKey: Date.now() + Math.random().toString(36).substr(2, 5),
        id: selectedProduct.id,
        name: selectedProduct.name,
        category: selectedProduct.category,
        price: selectedProduct.retailPrice,
        color: transactionBundle.color,
        size: transactionBundle.size,
        image: selectedProduct.image
    };
    localCart.push(newItem);
    localStorage.setItem('tbz_cart', JSON.stringify(localCart));
    
    // Pulse animation on the navbar cart counter
    const counterNode = document.getElementById('nav-btn-cart');
    if(counterNode) {
        counterNode.classList.add('pop-animate');
        setTimeout(() => counterNode.classList.remove('pop-animate'), 400);
    }
    
    // Explicit 1.5-second feedback window on the button before closing
    const actionBtn = document.getElementById('drawer-add-to-bag-btn');
    if(actionBtn) {
        actionBtn.style.background = "#00A15A";
        document.getElementById("drawer-btn-text").innerText = "ADDED TO BAG!";
        setTimeout(() => {
            actionBtn.style.background = "var(--accent-gradient)";
            document.getElementById("drawer-btn-text").innerText = "ADD TO BAG";
            closeDrawer();
        }, 1500); // 1500ms delay gives clear confirmation without feeling rushed
    }

    updateCounterBadges();
}

function launchCartItemMutation(uniqueKey, productId) {
    launchInteractiveDrawer(productId, uniqueKey);
}

function removeCartItem(uniqueKey) {
    localCart = localCart.filter(item => item.uniqueKey !== uniqueKey);
    localStorage.setItem('tbz_cart', JSON.stringify(localCart));
    updateCounterBadges();
    renderCartSegment();
}

function renderCartSegment() {
    const itemsContainer = document.getElementById("cart-items-container");
    const summaryBlock = document.getElementById("cart-summary-block");
    if(!itemsContainer || !summaryBlock) return;
    
    itemsContainer.innerHTML = "";
    summaryBlock.innerHTML = "";

    if(localCart.length === 0) {
        itemsContainer.innerHTML = `<p class="cart-empty-message">// LOGISTICAL_BAG_EMPTY_NO_ITEMS_PRESET</p>`;
        summaryBlock.innerHTML = `<p style="color: var(--text-muted); text-align:center; padding: 20px;">Await order configuration variables...</p>`;
        return;
    }

    let netValueSubtotal = 0;
    localCart.forEach(item => {
        netValueSubtotal += item.price;
        const row = document.createElement("div");
        row.className = "cart-item-row";
        row.innerHTML = `
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="cart-item-meta">CONFIG: ${item.size} // ${item.color} [${item.category.split(' ')[0]}]</p>
            </div>
            <div class="cart-item-right">
                <span class="cart-item-price">₹${item.price}</span>
                <button class="action-icon-btn edit-trigger" onclick="launchCartItemMutation('${item.uniqueKey}', '${item.id}')" title="Edit Parameters">
                    <svg viewBox="0 0 24 24" class="action-svg"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                <button class="action-icon-btn delete-trigger" onclick="removeCartItem('${item.uniqueKey}')" title="Delete Entry">
                    <svg viewBox="0 0 24 24" class="action-svg"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
            </div>
        `;
        itemsContainer.appendChild(row);
    });

    summaryBlock.innerHTML = `
        <h3>DESPATCH_SUMMARY</h3>
        <div class="summary-row"><span>BAG SUB-TOTAL</span><span>₹${netValueSubtotal}</span></div>
        <div class="summary-row"><span>LOGISTICS DEPLOYMENT</span><span style="color:#00A15A">FREE_COURIER_PROMO</span></div>
        <div class="summary-row total-bold"><span>ESTIMATED PAY</span><span>₹${netValueSubtotal}</span></div>
        <button class="checkout-btn" style="margin-top:15px;" onclick="forwardCartPayloadToWhatsApp(${netValueSubtotal})">
            <span>DISPATCH OVER WHATSAPP</span>
        </button>
    `;
}

function forwardCartPayloadToWhatsApp(totalPrice) {
    let itemsString = "";
    localCart.forEach((item, idx) => {
        itemsString += `${idx + 1}. ${item.name} (${item.size} // ${item.color})\n`;
    });

    const payload = 
`⚡ TAMACHEBAAZ MULTI-ITEM DISPATCH ⚡
───────────────────────────
${itemsString}───────────────────────────
TOTAL CONFIG PRICE: ₹${totalPrice} (Excl. GST)
───────────────────────────
Generate multi-invoice gateway link and track allocation metrics immediately.`;

    const simulatedOrderId = "TBZ-" + Math.floor(1000 + Math.random() * 9000);
    trackingDatabase.unshift({
        id: simulatedOrderId,
        name: localCart[0].name + (localCart.length > 1 ? ` (+ ${localCart.length - 1} items)` : ""),
        spec: `${localCart[0].size} // ${localCart[0].color}`,
        timestamp: "Just now",
        status: "pending",
        fill: 15
    });

    window.open(`https://wa.me/918958958484?text=${encodeURIComponent(payload)}`, '_blank');
}

function renderTrackingSegment() {
    const pendingContainer = document.getElementById("pending-orders-list");
    const completedContainer = document.getElementById("completed-orders-list");
    if(!pendingContainer || !completedContainer) return;
    
    pendingContainer.innerHTML = "";
    completedContainer.innerHTML = "";

    trackingDatabase.forEach(ord => {
        const card = document.createElement("div");
        card.className = "order-track-card";
        card.innerHTML = `
            <div class="track-card-header">
                <span class="track-id-lbl">${ord.id}</span>
                <span>${ord.timestamp}</span>
            </div>
            <h4 class="track-card-title">${ord.name}</h4>
            <p class="track-card-meta">${ord.spec} // A4 Print Formulation</p>
            <div class="track-timeline-bar">
                <div class="track-timeline-fill ${ord.status === 'completed' ? 'complete-green' : ''}" style="width: ${ord.fill}%"></div>
            </div>
        `;
        
        if(ord.status === 'pending') pendingContainer.appendChild(card);
        if(ord.status === 'completed') completedContainer.appendChild(card);
    });
}

function triggerNavFilter(categoryName) {
    toggleViewSegment('catalog');
    setTimeout(() => {
        const targetElement = document.getElementById(`filter-tab-${categoryName.replace(/[^A-Za-z0-9]/g, '-')}`);
        if (targetElement) {
            targetElement.click();
            window.scrollTo({top: document.getElementById("product-grid").offsetTop - 120, behavior: 'smooth'});
        }
    }, 50);
}