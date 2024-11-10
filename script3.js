// Модальное окно
const modal = document.getElementById("aboutModal");
const btn = document.getElementById("aboutButton");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Звук при загрузке
window.addEventListener('load', function() {
    const audio = new Audio('jarvis.wav'); // Убедитесь, что файл находится в той же папке
    audio.play();
});
