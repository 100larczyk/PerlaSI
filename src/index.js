import loadHome from "./home-page";
import loadProducts from "./products";
import loadContact from "./contact";
import "./style.css";

const body = document.querySelector("body");

const bodyImg = document.createElement("img");
bodyImg.classList.add("bodyImg");
bodyImg.src =
  "https://cdn.pixabay.com/photo/2022/01/05/21/07/pizza-6918041_960_720.jpg";
body.style.backgroundImage = `url(${bodyImg.src})`;

function createHeader() {
  const header = document.createElement("header");
  header.className = "header";

  const h1 = document.createElement("H1");
  h1.textContent = "El Tiamo Pizza";

  header.appendChild(h1);
  header.appendChild(createNav());
  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "HOME";
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const productsButton = document.createElement("button");
  productsButton.classList.add("button-nav");
  productsButton.textContent = "PRODUCTS";
  productsButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(productsButton);
    loadProducts();
  });

  const contactButon = document.createElement("button");
  contactButon.classList.add("button-nav");
  contactButon.textContent = "CONTACT";
  contactButon.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButon);
    loadContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(productsButton);
  nav.appendChild(contactButon);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.textContent = "Michał Stolarczyk | 2023";

  return footer;
}

//
//
//
//
//
const createWebsite = (() => {
  const content = document.querySelector(".content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
})();
