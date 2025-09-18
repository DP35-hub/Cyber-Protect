import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { auth, db } from "./firebase.js";

import {
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const provider = new GoogleAuthProvider();

/* GOOGLE LOGIN FUNCTION */
export const googleLogin = (modal) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      GoogleAuthProvider.credentialFromResult(result);

      setDoc(doc(db, "users", result.user.uid), {
        username: result.user.displayName,
        uid: result.user.uid,
        role: "USER",
      });

      modal.classList.remove("show");
      setTimeout(() => (modal.style.display = "none"), 300);

      window.location.href = "../pages/homepage.html";
    })
    .catch((error) => {
      console.log(error);

      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
/* END OF GOOGLE LOGIN FUNCTION */
