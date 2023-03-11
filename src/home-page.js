export default loadHome;

function createHomePage() {
  const contentDiv = document.createElement("div");
  contentDiv.className = "HomePageMainContent";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Best Pizza for every day of a week";
  paragraph.classList.add("paragraph");
  contentDiv.appendChild(paragraph);

  const restaurantImage = document.createElement("img");
  restaurantImage.className = "mainPhoto";
  restaurantImage.src =
    "https://images.pexels.com/photos/784631/pexels-photo-784631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  contentDiv.appendChild(restaurantImage);

  // const paragraphDate = document.createElement("p");
  // paragraph.textContent = "Since year 2000 with love";
  // paragraph.classList.add("paragraph");
  // contentDiv.appendChild(paragraphDate);

  return contentDiv;
}

function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createHomePage());
  return main;
}
