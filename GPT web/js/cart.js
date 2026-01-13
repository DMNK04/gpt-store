function getCart(){ return JSON.parse(localStorage.getItem("cart") || "{}"); }
function saveCart(c){ localStorage.setItem("cart", JSON.stringify(c)); updateCount(); }

function addToCart(id, qty=1){
  const c = getCart();
  c[id] = (c[id] || 0) + qty;
  saveCart(c);
}

function changeQty(id, d){
  const c = getCart();
  c[id] += d;
  if(c[id] <= 0) delete c[id];
  saveCart(c); renderCart();
}

function removeFromCart(id){
  const c = getCart();
  delete c[id];
  saveCart(c); renderCart();
}

function updateCount(){
  const c = getCart();
  let t = 0; Object.values(c).forEach(q=>t+=q);
  document.querySelectorAll("#cartCount").forEach(e=>e.innerText=t);
}

function renderCart(){
  const div = document.getElementById("cartItems");
  const tot = document.getElementById("total");
  if(!div) return;
  div.innerHTML = ""; let sum=0;
  const c = getCart();
  Object.keys(c).forEach(id=>{
    const p = products.find(x=>String(x.id)===String(id));
    if(!p) return;
    const s = p.price * c[id]; sum+=s;
    div.innerHTML += `
      <div>
        ${p.name} × ${c[id]} = ${s} Ft
        <button onclick="changeQty(${id},-1)">-</button>
        <button onclick="changeQty(${id},1)">+</button>
        <button onclick="removeFromCart(${id})">X</button>
      </div>`;
  });
  tot.innerText = sum;
}
updateCount();
