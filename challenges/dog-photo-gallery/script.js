const renderDog = document.querySelector(".render-picture");
const insertDog = document.createElement("img");
insertDog.src =
  "https://images.dog.ceo/breeds/hound-basset/n02088238_10473.jpg";
renderDog.appendChild(insertDog);
const generatePictureButton = document.querySelector(".button1");

// https://images.dog.ceo/breeds/hound-basset/n02088238_10473.jpg

generatePictureButton.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((image) => {
      insertDog.src = image.message;
    })
    .catch((error) => console.log("Fetch Error:", error));
});
