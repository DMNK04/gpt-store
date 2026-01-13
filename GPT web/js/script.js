const products = [
  { id: 1, name: "Bluetooth Fejhallgató", price: 19990, img: "https://picsum.photos/300?1" },
  { id: 2, name: "RGB Gaming Egér", price: 8990, img: "https://picsum.photos/300?2" },
  { id: 3, name: "Smart LED Lámpa", price: 12990, img: "https://picsum.photos/300?3" },
  { id: 4, name: "Power Bank 20k mAh", price: 14990, img: "https://picsum.photos/300?4" }
];

let cart = [];

const productList = document.getElementById("product-list");

products.forEach(p => {
  productList.innerHTML += `
    <div class="col-md-3 mb-4">
      <div class="card h-100 p-3 text-center">
        <img src="${p.img}" class="img-fluid mb-3 rounded">
        <h5>${p.name}</h5>
        <p class="price">${p.price} Ft</p>
        <button class="btn btn-primary" onclick="addToCart(${p.id})">Kosárba</button>
      </div>
    </div>
  `;
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `<p>${item.name} - ${item.price} Ft</p>`;
  });

  document.getElementById("total").innerText = total;
}
