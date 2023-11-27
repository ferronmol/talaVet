const userInput = document.getElementById("loginuser");
const passInput = document.getElementById("loginpass");
const emailInput = document.getElementById("reg_email");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
// selecciono el elemento que tiene la clase error-message
const loginErrorMessageElement = document.querySelector(".error-login-message");
const signupErrorMessageElement = document.querySelector(".error-signup-message");

let user = "";
let pass = "";
let email = "";
// Función para mostrar mensajes de error
function errorMessage(message) {
  loginErrorMessageElement.textContent = message;
  signupErrorMessageElement.textContent = message;
}

// Función para limpiar mensajes de error
function clearErrorMessage() {
 loginErrorMessageElement.textContent = "";
 signupErrorMessageElement.textContent = "";
}

//esta funcion es cuando hace click de registrar
document.getElementById("signup-toggle").addEventListener("click", function () {
  document.getElementById("login-form").classList.remove("active");
  document.getElementById("signup-form").classList.add("active");
  clearErrorMessage();
});
//esta funcion es para cundo hace clik en ya tiene cuenta
document.getElementById("login-toggle").addEventListener("click", function () {
  document.getElementById("signup-form").classList.remove("active");
  document.getElementById("login-form").classList.add("active");
  clearErrorMessage();
});

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //si escribes algo en el input de email y password entra en el index.html

  user = userInput.value;
  pass = passInput.value;
  if (user !== "" && pass !== "") {

    window.location.href = "../index.html";
  } else {
    errorMessage("Pon algo en los campos y entras");
  }
});
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const regUser = document.getElementById("reg_user").value;
  const regEmail = document.getElementById("reg_email").value;
  const regPass = document.getElementById("reg_pass").value;
  //si escribes algo en el input de  usuer email y password entra en el index.html
  if (regUser !== "" && regPass !== "" && regEmail !== "") {
    window.location.href = "../index.html";
  } else {
    console.log("no entras");
    errorMessage("Escribe en los campos y entras");
  }
});
