import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getAuth,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
  getFirestore,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtWhOvUDQXCJGitN8snLWF2_hr3dz_tMg",
  authDomain: "cyber-protect-ae23f.firebaseapp.com",
  projectId: "cyber-protect-ae23f",
  storageBucket: "cyber-protect-ae23f.firebasestorage.app",
  messagingSenderId: "938545712804",
  appId: "1:938545712804:web:7875caefd0f5e4aa16e031",
  measurementId: "G-QDNDK0P9GK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);