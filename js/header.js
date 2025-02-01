navHide = document.getElementById("navHide");
nav = document.getElementById("headerNav");

console.log(navHide);
console.log(nav);

navHide.addEventListener("click", (e) => {
    nav.classList.toggle("hidden");
    navHide.src = nav.classList.contains("hidden") ? "./img/down.svg" : "./img/up.svg";

})