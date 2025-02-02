/*Fonction bulle dialogue*/
function showBubble(id) {
    let bubble = document.getElementById(id);
    if (id === 'bubble-left') {
        bubble.innerHTML = "<br><b>Suzumi, Getting Cool Air</b><br><br> Quel kimono magnifique. Je n’en<br> jamais vu avec de telles couleurs<br> flamboyantes.<br>";
    } else if (id === 'bubble-right') {
        bubble.innerHTML = "<br><b>La Geisha Kiyoka</b><br><br> Je vous remercie. C’est un nouveau mode<br> franco-japonais de Paul Jacoulet.<br>";
    }
    bubble.style.display = 'block';
}
function hideBubble(id) {
    document.getElementById(id).style.display = 'none';
}

/*transition*/
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Empêche la navigation immédiate
      document.body.classList.add("fade-out"); // Ajoute la classe pour l'effet
      setTimeout(() => {
        window.location = this.href; // Redirige après l'animation
      }, 500); // Temps en millisecondes (doit correspondre à la transition CSS)
    });
  });
});
