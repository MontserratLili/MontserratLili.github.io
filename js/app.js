$(document).ready(function () {
    setTimeout(function () {
        document.getElementById("bienvenido").style.display = "none";
        location.href = ("#home");
    }, 3000);
    $('.carousel.carousel-slider').carousel({fullWidth: true});
});
