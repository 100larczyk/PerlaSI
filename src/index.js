import { loadHomePage } from "./home-page";
import "./style.css";

function createHeader() {
  const header = document.createElement("header");
  header.className = "header";

  const h1 = document.createElement("H1");
  h1.textContent = "PerlaSi";
  header.appendChild(h1);

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  const homeButton = document.createElement("button");
  homeButton.className = "button.nav";
  homeButton.textContent = "HOME";

  const productsButton = document.createElement("button");
  productsButton.className = "button.nav";
  productsButton.textContent = "PRODUCTS";

  const contactButon = document.createElement("button");
  contactButon.className = "button.nav";
  contactButon.textContent = "CONTACT";

  nav.appendChild(homeButton);
  nav.appendChild(productsButton);
  nav.appendChild(contactButon);

  return nav;
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
  content.appendChild(createNav());
  content.appendChild(loadHomePage());
  content.appendChild(createFooter());
  return content;
}
createWebsite();
