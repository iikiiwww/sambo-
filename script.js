:root{
    --bg:#0b1020;
    --card:#0f1724;
    --accent:#00d1ff;
    --muted:#94a3b8;
    --glass: rgba(255,255,255,0.04);
}

*{box-sizing:border-box}

body{
    margin:0;
    font-family:Inter,Arial;
    background:#060d1a;
    color:#e6eef8;
}

.container{
    max-width:1100px;
    margin:auto;
    padding:20px;
}

/* HEADER */
.header{
    background:#0c1326;
    border-bottom:1px solid var(--glass);
}
.header-inner{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.brand{
    display:flex;
    gap:12px;
    align-items:center;
}
.logo{
    width:48px;
    height:48px;
    border-radius:12px;
    background:linear-gradient(90deg,var(--accent),#6b6bff);
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:24px;
}
.sub{
    margin:0;
    font-size:13px;
    color:var(--muted);
}
.wa-link{
    color:var(--accent);
    text-decoration:none;
    font-weight:600;
}

/* BUTTON */
.btn{
    background:var(--accent);
    border:none;
    padding:10px 14px;
    border-radius:10px;
    font-weight:600;
    cursor:pointer;
}
.btn.small{
    padding:6px 10px;
    font-size:13px;
}

/* HERO */
.hero{
    background:linear-gradient(90deg,rgba(0,209,255,0.08),transparent);
    padding:28px;
    border-radius:14px;
    margin-bottom:20px;
}

/* PRODUCTS */
.section-title{
    margin:18px 0 10px;
    font-size:20px;
}
.grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:16px;
}
.card{
    background:var(--card);
    padding:16px;
    border-radius:12px;
    border:1px solid var(--glass);
    display:flex;
    flex-direction:column;
    gap:8px;
}
.prod-title{
    display:flex;
    justify-content:space-between;
    font-weight:600;
}
.prod-price{
    color:var(--accent);
}
.btn-add{
    background:var(--accent);
    border:none;
    padding:8px;
    border-radius:10px;
    font-weight:600;
    cursor:pointer;
}

/* CRATE */
.crate-grid{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
}
.crate-card{
    background:rgba(255,255,255,0.03);
    padding:12px;
    border-radius:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    min-width:210px;
}

/* CART */
.cart-modal{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.6);
    display:none;
    justify-content:flex-end;
}
.cart-modal[aria-hidden="false"]{
    display:flex;
}
.cart-panel{
    width:360px;
    background:#071021;
    height:100%;
    padding:18px;
    display:flex;
    flex-direction:column;
}
.cart-item{
    background:rgba(255,255,255,0.05);
    padding:12px;
    border-radius:8px;
    margin-bottom:10px;
    display:flex;
    justify-content:space-between;
}
.qty-controls button{
    background:#0d1a33;
    color:white;
    border:none;
    padding:4px 8px;
    border-radius:6px;
    cursor:pointer;
}

.site-footer{
    text-align:center;
    color:var(--muted);
    padding:20px 0;
}

/* MOBILE */
@media(max-width:700px){
    .cart-panel{width:100%}
}
