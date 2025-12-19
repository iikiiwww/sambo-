const cartBtn = document.getElementById("open-cart");
const cart = document.getElementById("cart");
const buyButtons = document.querySelectorAll(".buy");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const countEl = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkout");

let cartData = [];
let total = 0;

cartBtn.onclick = () => {
  cart.classList.toggle("active");
};

buyButtons.forEach(btn=>{
  btn.onclick = () => {
    const card = btn.parentElement;
    const name = card.dataset.name;
    const price = parseInt(card.dataset.price);

    cartData.push({name,price});
    total += price;

    const li = document.createElement("li");
    li.textContent = `${name} - Rp ${price.toLocaleString()}`;
    cartItems.appendChild(li);

    totalEl.textContent = total.toLocaleString();
    countEl.textContent = cartData.length;
  };
});

checkoutBtn.onclick = () => {
  let text = "Halo SAMBO STORE JAYA%0AOrder:%0A";
  cartData.forEach(i=>{
    text += `- ${i.name} (Rp ${i.price})%0A`;
  });
  text += `%0ATotal: Rp ${total.toLocaleString()}`;

  window.open(`https://wa.me/6285921621756?text=${text}`);
};
