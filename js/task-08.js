const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const formDataObject = {};

  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  if (!formDataObject.email || !formDataObject.password) {
    alert("Please fill in all fields");
  } else {
    console.log(formDataObject);
    loginForm.reset();
  }
});
