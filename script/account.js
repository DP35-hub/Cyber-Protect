import { auth } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const logOutBtn = document.getElementById("logout-btn");
const signUpBtn = document.getElementById("signup-btn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    logOutBtn.innerHTML = `Welcome ${user.email} (Logout)`;

    signUpBtn.style.display = "none";
    logOutBtn.style.display = "block";
  } else {
    signUpBtn.style.display = "block";
    logOutBtn.style.display = "none";
  }
});

logOutBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to logout?"))
    signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
});
