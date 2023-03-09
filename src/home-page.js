export function loadHomePage() {
  const contentDiv = document.createElement("div");

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "With PerlaSi candle, endless fire will come to your Home";
  contentDiv.appendChild(paragraph);

  const restaurantImage = document.createElement("img");
  restaurantImage.src =
    "C:/Users/mstol/Desktop/JS - learn/webpack-exercise/src/restaurant-photo.jpg";
  contentDiv.appendChild(restaurantImage);

  return contentDiv;
}
