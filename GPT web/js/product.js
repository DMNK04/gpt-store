const id = new URLSearchParams(location.search).get("id");
const p = products.find(x=>x.id==id);
const products = JSON.parse(localStorage.getItem("products") || "[]");



document.getElementById("product").innerHTML = `
<div class="row">
  <div class="col-md-6">
    <img src="${p.img}" class="img-fluid rounded">
  </div>
  <div class="col-md-6">
    <h2>${p.name}</h2>
    <p>${p.desc}</p>
    <h4>${p.price} Ft</h4>

    <label>Mennyiség</label>
    <input id="qty" type="number" value="1" min="1" class="form-control w-25 mb-3">

    <button class="btn btn-success" onclick="addToCart(${p.id}, parseInt(document.getElementById('qty').value))">
      Kosárba
    </button>
  </div>
</div>
`;
