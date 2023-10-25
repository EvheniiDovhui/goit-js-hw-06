const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", function () {
  const fontSize = this.value;

  text.style.fontSize = `${fontSize}px`;
});
