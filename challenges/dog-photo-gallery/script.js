const renderDog = document.querySelector(".render-picture");
const insertDog = document.createElement("img");
insertDog.src =
  "https://images.dog.ceo/breeds/hound-basset/n02088238_10473.jpg";
renderDog.appendChild(insertDog);
const generatePictureButton = document.querySelector(".button1");

generatePictureButton.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })

    .then((jsonResponse) => {
      insertDog.src = jsonResponse.message;
    })
    .catch((error) => {
      console.log(error);
    });
});
