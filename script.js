// Get elements
const signupButton = document.querySelector(".signup-button");
const modal = document.getElementById("signupModal");

const closeModal = document.getElementById("closeModal");
const registerBtn = document.getElementById("register-btn");

/* LOGIN MODAL */
const loginModal = document.getElementById("loginModal");
const loginLink = document.getElementById("login-link");
const closeModalLogin = document.getElementById("closeModalLogin");

loginLink.addEventListener("click", (e) => {
  e.preventDefault();

  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"));

  loginModal.style.display = "flex";
  setTimeout(() => loginModal.classList.add("show"));
});

closeModalLogin.addEventListener("click", () => {
  loginModal.classList.remove("show");
  setTimeout(() => (loginModal.style.display = "none"), 300);
});

loginModal.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.classList.remove("show");
    setTimeout(() => (loginModal.style.display = "none"), 300);
  }
});

/* END OF LOGIN MODAL */

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();

  loginModal.classList.remove("show");
  setTimeout(() => (loginModal.style.display = "none"), 300);

  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
});

// Open modal on button click
signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
});

// Close modal when clicking the X
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 300);
});

// Close modal when clicking outside content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    setTimeout(() => (modal.style.display = "none"), 300);
  }
});
