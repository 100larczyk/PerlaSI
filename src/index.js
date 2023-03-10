import loadHome from "./home-page";
import "./style.css";

function createHeader() {
  const header = document.createElement("header");
  header.className = "header";

  const h1 = document.createElement("H1");
  h1.textContent = "PerlaSi";

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
  });

  const contactButon = document.createElement("button");
  contactButon.classList.add("button-nav");
  contactButon.textContent = "CONTACT";
  contactButon.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButon);
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
  footer.classList = "footer";
  footer.textContent = "Michał Stolarczyk | Dominika Włóka";

  return footer;
}

//
//
//
//
//
function createWebsite() {
  const content = document.querySelector(".content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
}
createWebsite();
