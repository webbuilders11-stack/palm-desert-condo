const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
if (menu && nav) menu.addEventListener("click", () => nav.classList.toggle("open"));
if (nav) nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
const form = document.querySelector("#enquiry");
if (form) form.addEventListener("submit", e => {
  e.preventDefault();
  document.querySelector("#form-message").textContent = "This is a demo form. Connect it to the owner's email or booking system before launch; nothing has been sent.";
});