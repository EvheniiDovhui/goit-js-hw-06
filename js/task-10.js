const input = document.querySelector("#amount-input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const defaultSize = 30;
  const step = 10;
  let boxesHTML = "";

  for (let i = 0; i < amount; i++) {
    const size = defaultSize + i * step;
    const color = getRandomHexColor();

    boxesHTML += `<div style="width:${size}px; height:${size}px; background-color:${color}"></div>`;
  }

  boxesContainer.innerHTML = boxesHTML;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
