const btn = document.querySelector("#btn");
const sidebar = document.querySelector(".sidebar");
const search = document.querySelector(".bx-search");

btn.onclick = function () {
  sidebar.classList.toggle("active");
}

search.onclick = function () {
  sidebar.classList.toggle("active");
}