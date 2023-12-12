$(document).ready(function(){
    
    mostrar_notificacion();
    
});

function mostrar_notificacion(){
    $.notify({
        icon: 'glyphicon glyphicon-star',
        message: "Tiene una nueva respuesta de su ticket Nro : ##",
        url: "http://anderson-bastidas.com"
    });
}

setInterval(function(){
    mostrar_notificacion();
}, 5000);


