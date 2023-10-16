const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const enteredLength = validationInput.value.length;
  const expectedLength = Number(validationInput.dataset.length);

  if (enteredLength === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
