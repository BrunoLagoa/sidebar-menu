alert("Welcome to Official SimpL Esports");


(function () {
    
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
const btn = document.querySelector("#btn");
const sidebar = document.querySelector(".sidebar");
const search = document.querySelector(".bx-search");

btn.onclick = function () {
  sidebar.classList.toggle("active");
}

search.onclick = function () {
  sidebar.classList.toggle("active");
}