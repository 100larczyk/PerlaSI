import { loadHomePage } from "./home-page";

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

  const productsButton = document.createElement("button");

  const contactButon = document.createElement("button");
}

//
//
//
//
//
function createWebsite() {
  const div = document.querySelector(".content");
  div.appendChild(createHeader());
  div.appendChild(loadHomePage());
  return div;
}
createWebsite();
