navHide = document.getElementById("navHide");
nav = document.getElementById("headerNav");

navHide.addEventListener("click", (e) => {
    nav.classList.toggle("hidden");
    navHide.src = nav.classList.contains("hidden") ? "./img/down.svg" : "./img/up.svg";

})