$(document).ready(function cargarPagina() {
    escribir();
    
    function escribir() {

        $('#minombre').typeIt({
            strings: [
                "¡Soy Montserrat Lili!",
                "¡Desarrolladora frontend!",
                "¡Administradora!"],
            speed: 70,
            breakLines: false,
            loop: true
        });

    }
    var target = null;
    $('.img_thumb').hover(function(e){
    target = $(this);
    $(target[0].firstElementChild).fadeIn(200);
    }, function(){
    $(target[0].firstElementChild).fadeOut(200);
    });
});

