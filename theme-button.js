const button = document.getElementById("colorButton");
const bg = document.getElementById("bg");

function getRandomColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

button.addEventListener("click", function() {
    bg.style.backgroundColor = getRandomColor();
});