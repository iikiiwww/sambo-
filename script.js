// =======================
// DATA PRODUK FINAL (SESUSAI LIST)
// =======================
const PRODUCTS = [
    // PRODUK UTAMA
    { id: 1, name: "FROZEN KRAMPUS", price: 103568 },
    { id: 2, name: "JETSKI FROZEN", price: 56568 },

    { id: 3, name: "VIP", price: 48398 },
    { id: 4, name: "MUTATION", price: 34090 },
    { id: 5, name: "ADV LUCK", price: 58590 },
    { id: 6, name: "EXTRA LUCK", price: 27990 },
    { id: 7, name: "2X XP", price: 23890 },
    { id: 8, name: "PERAHU MELAYANG MINI", price: 23950 },
    { id: 9, name: "SEEL ANYWHERE", price: 35130 },
    { id: 10, name: "SMALL LUCK", price: 8100 },
    { id: 11, name: "HYPER BOAT", price: 110898 },

    // CRATE
    { id: 12, name: "LUXURY CRATE", price: 12098 },
    { id: 13, name: "MEMESONA CRATE", price: 12098 },
    { id: 14, name: "LAUTAN CRATE", price: 10078 },
    { id: 15, name: "ELDERWEID CRATE", price: 12098 },
    { id: 16, name: "CHRISTMAS CRATE", price: 28098 },
];

// =======================
// RENDER PRODUK UTAMA
// =======================
const grid = document.getElementById("product-grid");
grid.innerHTML = PRODUCTS.slice(0, 11).map(p => `
    <div class="card">
        <div class="prod-title">
            <span>${p.name}</span>
            <span class="prod-price">Rp ${p.price.toLocaleString("id-ID")}</span>
        </div>
        <button class="btn-add" data-id="${p.id}">Tambah</button>
    </div>
`).join("");

// =======================
// RENDER CRATE
// =======================
document.querySelectorAll(".crate-card").forEach((c, i) => {
    const crate = PRODUCTS[11 + i];
    if (!crate) return;

    c.innerHTML = `
        <strong>${crate.name}</strong>
        <span>Rp ${crate.price.toLocaleString("id-ID")}</span>
        <button class="btn-add crate-btn" data-id="${crate.id}">Tambah</button>
    `;
});

// =======================
// CART SYSTEM
// =======================
let cart = {};

const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");

function updateCartUI() {
    let total = 0;

    cartItems.innerHTML = Object.values(cart).map(item => {
        total += item.price * item.qty;
        return `
            <div class="cart-item">
                <span>
                    ${item.name}<br>
                    <small>${item.qty} × Rp ${item.price.toLocaleString("id-ID")}</small>
                </span>
                <div class="qty-controls">
                    <button data-op="dec" data-id="${item.id}">-</button>
                    <button data-op="inc" data-id="${item.id}">+</button>
                </div>
            </div>
        `;
    }).join("");

    cartTotalEl.textContent = "Rp " + total.toLocaleString("id-ID");
}

// =======================
// EVENT LISTENER
// =======================
document.body.addEventListener("click", e => {

    // TAMBAH KE CART
    if (e.target.classList.contains("btn-add")) {
        const id = Number(e.target.dataset.id);
        const p = PRODUCTS.find(x => x.id === id);
        if (!cart[id]) cart[id] = { ...p, qty: 0 };
        cart[id].qty++;
        updateCartUI();
    }

    // BUKA / TUTUP CART
    if (e.target.id === "open-cart") {
        cartModal.setAttribute("aria-hidden", "false");
    }
    if (e.target.id === "close-cart") {
        cartModal.setAttribute("aria-hidden", "true");
    }

    // QTY CONTROL
    const op = e.target.dataset.op;
    if (op) {
        const id = Number(e.target.dataset.id);
        if (op === "inc") cart[id].qty++;
        if (op === "dec") {
            cart[id].qty--;
            if (cart[id].qty <= 0) delete cart[id];
        }
        updateCartUI();
    }

    // CHECKOUT WA
    if (e.target.id === "checkout") {
        if (Object.keys(cart).length === 0) {
            alert("Keranjang kosong!");
            return;
        }

        let msg = "PESANAN BARU%0A-----------------%0A";
        Object.values(cart).forEach(i => {
            msg += `${i.name} x${i.qty} = Rp ${(i.qty * i.price).toLocaleString("id-ID")}%0A`;
        });
        msg += "-----------------%0A";
        msg += `TOTAL: ${cartTotalEl.textContent}%0A`;
        msg += "Order via WA: 085921621756";

        window.open(`https://wa.me/6285921621756?text=${msg}`, "_blank");
    }
});
