const insertImage = document.querySelector(".render-image");

fetch("https://xkcd.now.sh/?comic=latest")
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
    console.log(jsonResponse);
    insertImage.src = jsonResponse.img;
  })
  .catch((error) => {
    console.log(error);
  });
