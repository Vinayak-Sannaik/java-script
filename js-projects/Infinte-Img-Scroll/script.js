const buttonEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");

function newImages() {
  for (let index = 0; index < 10; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/230/260?random=${Math.floor(
      Math.random() * 2000
    )}`;
    containerEl.appendChild(newImgEl);
  }
}

buttonEl.addEventListener("click", () => {
  newImages();
});
