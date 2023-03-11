export default loadContact;

function createContactPage() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const number = document.createElement("p");
  number.classList.add("paragraph");
  number.textContent = "123 456 789";

  const address = document.createElement("h2");
  address.classList.add("address");
  address.textContent = "Bradforg Rd 45, Neverland, UK";

  const adddressImg = document.createElement("img");
  adddressImg.classList.add("adddressImg");
  adddressImg.src = "../src/img/map.png";

  contact.appendChild(number);
  contact.appendChild(address);
  contact.appendChild(adddressImg);
  return contact;
}

function loadContact() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createContactPage());
  return main;
}
