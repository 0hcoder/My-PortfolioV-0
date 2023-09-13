
let toggle = document.querySelector("#tooglee");
toggle.addEventListener("click", () => {
  document.querySelector(".nav-list").style.display = "flex"
});
let removee = document.querySelector("#remove");
removee.addEventListener("click", () => {
  document.querySelector(".nav-list").style.display = "none"
});
