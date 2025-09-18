import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

import { googleLogin } from "./googleLogin.js";

const signupForm = document.getElementById("signup-form");
const signUpBtn = document.getElementById("submit-btn-signup");

/* GET VALUES FROM INPUT FIELD */
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
/* END OF GET VALUES FROM INPUT FIELD */

/* SIGN UP FUNCTION VIA EMAIL AND PASSWORD */
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  signUpBtn.disabled = true;

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      signUpBtn.disabled = false;

      modal.classList.remove("show");
      setTimeout(() => (modal.style.display = "none"), 300);

      setDoc(doc(db, "users", userCredential.user.uid), {
        username: username.value,
        uid: userCredential.user.uid,
        role: "USER",
      });

      sendEmailVerification(userCredential.user);

      email.value = "";
      password.value = "";
      username.value = "";

      alert("Email send email verification link has send to your email");
    })
    .catch((error) => {
      console.log(error);

      const errorType = error.code.split("/")[1];
      alert(errorType);
      signUpBtn.disabled = false;
    });
});
/* END OF SIGN UP FUNCTION VIA EMAIL AND PASSWORD */

const modal = document.getElementById("signupModal");
const googleRegisterBtn = document.getElementById("signup-google-btn");

googleRegisterBtn.addEventListener("click", function (e) {
  console.log("register google btn...");

  googleLogin(modal);
});
