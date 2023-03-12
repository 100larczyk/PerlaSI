export default loadHome;

function createHomePage() {
  const contentDiv = document.createElement("div");
  contentDiv.className = "HomePageMainContent";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Best Pizza for every day of the week";
  paragraph.classList.add("paragraph");

  const restaurantImage = document.createElement("img");
  restaurantImage.className = "homePhoto";
  restaurantImage.src =
    "https://images.pexels.com/photos/784631/pexels-photo-784631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const paragraphDate = document.createElement("p");
  paragraphDate.textContent = "Since year 2000 with love";
  paragraph.classList.add("paragraph");

  contentDiv.appendChild(paragraph);
  contentDiv.appendChild(restaurantImage);
  contentDiv.appendChild(paragraphDate);
  return contentDiv;
}

function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createHomePage());
  return main;
}
