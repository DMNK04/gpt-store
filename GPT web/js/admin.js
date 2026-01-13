const PASS="dominik0425";

function login(){
  if(pw.value===PASS){
    panel.style.display="block";
    load();
  } else alert("Hibás jelszó");
}

function getP(){ return JSON.parse(localStorage.getItem("products")||"[]"); }
function saveP(p){ localStorage.setItem("products", JSON.stringify(p)); }

function add(){
  const p = getP();
  p.push({id:Date.now(), name:name.value, price:Number(price.value)});
  saveP(p); load();
}

function del(id){
  let p=getP().filter(x=>x.id!==id);
  saveP(p); load();
}

function load(){
  plist.innerHTML="";
  getP().forEach(x=>{
    plist.innerHTML += `${x.name} – ${x.price} Ft <button onclick="del(${x.id})">Törlés</button><br>`;
  });
  const o = JSON.parse(localStorage.getItem("orders")||"[]");
  olist.innerHTML="";
  o.forEach(r=>{
    olist.innerHTML += `<b>${r.date}</b> – ${r.total} Ft<br>`;
    r.items.forEach(i=> olist.innerHTML += `${i.name} × ${i.qty}<br>`);
    olist.innerHTML += "<hr>";
  });
}
