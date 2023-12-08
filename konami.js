const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

let konamiCodeIndex = 0;

function checkKonamiCode(event) {
    if (event.key === konamiCode[konamiCodeIndex]) {
        konamiCodeIndex++;

        if (konamiCodeIndex === konamiCode.length) {
            // Konami Code réussi, ajoutez votre action ici
            window.location = "./clicker/index.html"
            konamiCodeIndex = 0; // Réinitialise l'index pour la prochaine fois
        }
    } else {
        konamiCodeIndex = 0; // Réinitialise l'index si une touche incorrecte est pressée
    }
}

document.addEventListener('keydown', checkKonamiCode);
