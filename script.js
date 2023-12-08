document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlay");

    window.addEventListener("scroll", function() {
        // Récupérez la position de défilement verticale
        var scrollPosition = window.scrollY;

        // Réglez la hauteur de l'overlay en fonction de la position de défilement
        overlay.style.height = Math.min(scrollPosition, 1000) + "px"; // Vous pouvez ajuster la valeur (100) selon vos besoins
    });
});
