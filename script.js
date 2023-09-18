// Seleccionamos todos los elementos con la clase tarjeta
let tarjetas = document.querySelectorAll(".tarjeta");

// Recorremos cada tarjeta y le agregamos un evento de mouseover
tarjetas.forEach(function(tarjeta) {
    tarjeta.addEventListener("mouseover", function() {
        // Obtenemos el botón dentro de la tarjeta
        let boton = tarjeta.querySelector(".boton");
        // Le agregamos una clase para cambiar su color y tamaño
        boton.classList.add("boton-animado");
    });
});

// Recorremos cada tarjeta y le agregamos un evento de mouseout
tarjetas.forEach(function(tarjeta) {
    tarjeta.addEventListener("mouseout", function() {
        // Obtenemos el botón dentro de la tarjeta
        let boton = tarjeta.querySelector(".boton");
        // Le quitamos la clase para volver a su estado original
        boton.classList.remove("boton-animado");
    });
});
