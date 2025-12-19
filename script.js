const PRODUCTS = [
 {id:1,name:"FROZEN KRAMPUS",price:103568},
 {id:2,name:"JETSKI FROZEN",price:56568},
 {id:3,name:"VIP",price:48398},
 {id:4,name:"MUTATION",price:34090},
 {id:5,name:"ADV LUCK",price:58590},
 {id:6,name:"EXTRA LUCK",price:27990},
 {id:7,name:"2X XP",price:23890},
 {id:8,name:"PERAHU MELAYANG MINI",price:23950},
 {id:9,name:"SEEL ANYWHERE",price:35130},
 {id:10,name:"SMALL LUCK",price:8100},
 {id:11,name:"HYPER BOAT",price:110898},
 {id:12,name:"LUXURY CRATE",price:12098},
 {id:13,name:"MEMESONA CRATE",price:12098},
 {id:14,name:"LAUTAN CRATE",price:10078},
 {id:15,name:"ELDERWEID CRATE",price:12098},
 {id:16,name:"CHRISTMAS CRATE",price:28098},
];

const grid=document.getElementById("product-grid");
grid.innerHTML=PRODUCTS.slice(0,11).map(p=>`
<div class="card">
 <div class="prod-title">
   <span>${p.name}</span>
   <span class="prod-price">Rp ${p.price.toLocaleString("id-ID")}</span>
 </div>
 <button class="btn-add" data-id="${p.id}">Tambah</button>
</div>`).join("");

document.querySelectorAll(".crate-card").forEach((c,i)=>{
 const p=PRODUCTS[11+i];
 if(!p)return;
 c.innerHTML=`<strong>${p.name}</strong>
 <span>Rp ${p.price.toLocaleString("id-ID")}</span>
 <button class="btn-add" data-id="${p.id}">Tambah</button>`;
});

let cart={};
const cartModal=document.getElementById("cart-modal");
const cartItems=document.getElementById("cart-items");
const cartTotal=document.getElementById("cart-total");

function updateCart(){
 let total=0;
 cartItems.innerHTML=Object.values(cart).map(i=>{
   total+=i.qty*i.price;
   return `<div class="cart-item">
     <span>${i.name}<br><small>${i.qty} x Rp ${i.price.toLocaleString("id-ID")}</small></span>
     <div class="qty-controls">
       <button data-op="dec" data-id="${i.id}">-</button>
       <button data-op="inc" data-id="${i.id}">+</button>
     </div>
   </div>`;
 }).join("");
 cartTotal.textContent="Rp "+total.toLocaleString("id-ID");
}

document.body.onclick=e=>{
 if(e.target.classList.contains("btn-add")){
   const id=+e.target.dataset.id;
   const p=PRODUCTS.find(x=>x.id===id);
   if(!cart[id])cart[id]={...p,qty:0};
   cart[id].qty++;
   updateCart();
 }
 if(e.target.id==="open-cart"){
   cartModal.setAttribute("aria-hidden","false");
 }
 if(e.target.id==="close-cart"){
   cartModal.setAttribute("aria-hidden","true");
 }
 if(e.target.dataset.op){
   const id=+e.target.dataset.id;
   if(e.target.dataset.op==="inc")cart[id].qty++;
   if(e.target.dataset.op==="dec"){
     cart[id].qty--;
     if(cart[id].qty<=0)delete cart[id];
   }
   updateCart();
 }
 if(e.target.id==="checkout"){
   if(!Object.keys(cart).length)return alert("Keranjang kosong!");
   let msg="PESANAN BARU%0A";
   Object.values(cart).forEach(i=>{
     msg+=`${i.name} x${i.qty}%0A`;
   });
   msg+=`TOTAL: ${cartTotal.textContent}`;
   window.open(`https://wa.me/628
