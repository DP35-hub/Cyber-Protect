import {
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { auth } from "./firebase.js";

import { googleLogin } from "./googleLogin.js";


/* FOR LOGIN USING EMAIL AND PASSWORD */
const emailLoginForm = document.getElementById("login-form");
const signInBtn = document.getElementById("submit-btn-login");

let loginEmailInput = document.getElementById("loginEmailInput");
let loginPasswordInput = document.getElementById("loginPasswordInput");
/* END OF FOR LOGIN USING EMAIL AND PASSWORD */


/* FOR GOOGLE LOG IN */
const googleLoginBtn = document.getElementById("login-google-btn");
const loginModal = document.getElementById("loginModal");

googleLoginBtn.addEventListener("click", function (e) {
  console.log('google log in..');
  googleLogin(loginModal);
});
/* END OF GOOGLE LOG IN */


/* EMAIL LOG IN */
emailLoginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  signInBtn.disabled = true;

  signInWithEmailAndPassword(
    auth,
    loginEmailInput.value,
    loginPasswordInput.value
  )
    .then((userCredential) => {
      signInBtn.disabled = false;

      loginEmailInput.value = "";
      loginPasswordInput.value = "";
      window.location.href = "../pages/homepage.html";

      loginModal.classList.remove("show");
      setTimeout(() => (loginModal.style.display = "none"), 300);
    })
    .catch((error) => {
      const errorType = error.code.split("/")[1];
      alert(errorType);
      signInBtn.disabled = false;
    });
});
