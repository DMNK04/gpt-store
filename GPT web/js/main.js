const list = document.getElementById("product-list");
const search = document.getElementById("search");
const category = document.getElementById("category");

function renderProducts() {
  list.innerHTML = "";

  const text = search.value.toLowerCase();
  const cat = category.value;

  products
    .filter(p =>
      p.name.toLowerCase().includes(text) &&
      (cat === "all" || p.category === cat)
    )
    .forEach(p => {
      list.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card p-3 text-center h-100">
          <img src="${p.img}" class="img-fluid rounded mb-3">
          <h5>${p.name}</h5>
          <p class="price">${p.price} Ft</p>
          <a href="product.html?id=${p.id}" class="btn btn-primary">Megnézem</a>
        </div>
      </div>`;
    });
}

search.addEventListener("input", renderProducts);
category.addEventListener("change", renderProducts);

renderProducts();
