// DATA PRODUK
const PRODUCTS = [
    { id: 1, name: "THE VANQUISHER", price: 92000 },
    { id: 2, name: "BAN HAMMER", price: 120098 },
    { id: 3, name: "BINARY EDGE", price: 88498 },
    { id: 4, name: "CORRUPTION EDGE", price: 88498 },
    { id: 5, name: "VIP", price: 48398 },
    { id: 6, name: "MUTATION", price: 34090 },
    { id: 7, name: "ADV LUCK", price: 58590 },
    { id: 8, name: "EXTRA LUCK", price: 27990 },
    { id: 9, name: "2X XP", price: 23890 },
    { id: 10, name: "PERAHU MELAYANG MINI", price: 23950 },
    { id: 11, name: "SELL ANYWHERE", price: 35130 },
    { id: 12, name: "SMALL LUCK", price: 8100 },
    { id: 13, name: "HYPER BOAT", price: 110898 }
];

const grid = document.getElementById("product-grid");

// RENDER PRODUK
grid.innerHTML = PRODUCTS.map(p => `
    <div class="card">
        <div class="prod-title">
            <span>${p.name}</span>
            <span class="prod-price">Rp ${p.price.toLocaleString("id-ID")}</span>
        </div>
        <button class="btn-add" data-id="${p.id}">Tambah</button>
    </div>
`).join("");

/* CART */
let cart = {};

const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");

// Update UI Keranjang
function updateCartUI(){
    let total = 0;
    cartItems.innerHTML = Object.values(cart).map(item => {
        total += item.price * item.qty;
        return `
            <div class="cart-item">
                <span>${item.name}<br><small>${item.qty} x Rp ${item.price.toLocaleString("id-ID")}</small></span>

                <div class="qty-controls">
                    <button data-op="dec" data-id="${item.id}">-</button>
                    <button data-op="inc" data-id="${item.id}">+</button>
                </div>
            </div>
        `;
    }).join("");

    cartTotalEl.textContent = "Rp " + total.toLocaleString("id-ID");
}

// EVENT
document.body.addEventListener("click", e => {

    // Tambah produk
    if(e.target.classList.contains("btn-add")){
        const id = Number(e.target.dataset.id);
        const p = PRODUCTS.find(x => x.id === id);

        if(!cart[id]) cart[id] = {...p, qty: 0};
        cart[id].qty += 1;

        updateCartUI();
    }

    // Buka keranjang
    if(e.target.id === "open-cart"){
        cartModal.setAttribute("aria-hidden", "false");
    }

    // Tutup keranjang
    if(e.target.id === "close-cart"){
        cartModal.setAttribute("aria-hidden", "true");
    }

    // Tambah/Kurang dalam keranjang
    const op = e.target.dataset.op;
    if(op){
        const id = Number(e.target.dataset.id);

        if(op === "inc") cart[id].qty++;
        if(op === "dec"){
            cart[id].qty--;
            if(cart[id].qty <= 0) delete cart[id];
        }
        updateCartUI();
    }

    // Checkout
    if(e.target.id === "checkout"){
        if(Object.keys(cart).length === 0){
            alert("Keranjang kosong!");
            return;
        }

        let msg = "PESANAN SAMBO STORE JAYA%0A-----------------%0A";
        Object.values(cart).forEach(i => {
            msg += `${i.name} x${i.qty} = Rp ${ (i.qty * i.price).toLocaleString("id-ID") }%0A`;
        });
        msg += "-----------------%0A";
        msg += `TOTAL: ${cartTotalEl.textContent}%0A`;
        msg += "Order WA: 085921621756";

        window.open(`https://wa.me/6285921621756?text=${msg}`, "_blank");
    }
});
