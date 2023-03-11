export default loadProducts;

function product(name, description, imgUrl) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("productDiv");

  const productName = document.createElement("h2");
  productName.classList.add("productName");
  productName.textContent = name;

  const productDescription = document.createElement("p");
  productDescription.classList.add("paragraph");
  productDescription.textContent = description;

  const productImage = document.createElement("img");
  productImage.classList.add("productImage");
  productImage.src = imgUrl;

  productDiv.appendChild(productImage);
  productDiv.appendChild(productName);
  productDiv.appendChild(productDescription);
  return productDiv;
}

function createProducts() {
  const products = document.createElement("div");
  products.classList.add("products");

  products.appendChild(
    product(
      "Margerita",
      "Tomatoe sauce, Mozarella, Salami",
      "https://cdn.pixabay.com/photo/2016/06/01/12/59/pizza-1428929_960_720.png"
    )
  );
  products.appendChild(
    product(
      "Hawai",
      "Tomatoe sauce, Mozarella, Ham, Pineapple",
      "https://cdn.pixabay.com/photo/2016/06/01/12/59/pizza-1428930_960_720.png"
    )
  );
  products.appendChild(
    product(
      "Mashroom'o",
      "Tomatoe sauce, Mozarella, Salami, Mushroom",
      "https://cdn.pixabay.com/photo/2016/06/01/12/59/pizza-1428928_960_720.png"
    )
  );
  products.appendChild(
    product(
      "Prosciutto",
      "Tomatoe sauce, Mozarella, Salami, Rucola",
      "https://cdn.pixabay.com/photo/2016/06/01/12/59/pizza-1428927_960_720.png"
    )
  );
  return products;
}

function loadProducts() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createProducts());
  return main;
}
