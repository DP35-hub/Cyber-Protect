import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";



document.addEventListener("DOMContentLoaded", () => {

  const main = document.getElementById("homepage");

  onAuthStateChanged(auth, (user) => {
    /* CHECK IF VERIFIED */

    if (user == null) {
      alert("You are not logged in");
      window.location.href = "../index.html";
    }

    if (user.emailVerified === false) {
      alert("You are not verified, please check your email");
      window.location.href = "../index.html";
    }

    main.style.display = 'block';
  });
});
