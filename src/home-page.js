export default loadHome;

function createHomePage() {
  const contentDiv = document.createElement("div");
  contentDiv.className = "HomePageMainContent";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "With PerlaSi candle, endless fire will come to your Home";
  contentDiv.appendChild(paragraph);

  const restaurantImage = document.createElement("img");
  restaurantImage.className = "mainPhoto";
  restaurantImage.src =
    "C:/Users/mstol/Desktop/JS - learn/webpack-exercise/src/candle.jpg";
  contentDiv.appendChild(restaurantImage);

  return contentDiv;
}

function loadHome() {
  const main = document.querySelector(".main");
  // main.textContent = "";
  main.appendChild(createHomePage());
  return main;
}
