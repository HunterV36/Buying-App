const ninja = document.getElementById("ninjaButton");
const tough = document.getElementById("toughButton");
const devil = document.getElementById("devilButton");
const choose = document.getElementsByClassName("choose");
const game = document.getElementById("game")

$(document).ready(function () {
    $("body > *:not(aside").hide();
});



ninja.addEventListener("mouseenter", () => {
    ninja.innerText = "Stealth is key!";
});

tough.addEventListener("mouseenter", () => {
    tough.innerText = "Destroy Them All!";
});

devil.addEventListener("mouseenter", () => {
    devil.innerText = "Take Revenge!";
});

ninja.addEventListener("mouseleave", () => {
    ninja.innerText = "Choose";
});

tough.addEventListener("mouseleave", () => {
    tough.innerText = "Choose";
});

devil.addEventListener("mouseleave", () => {
    devil.innerText = "Choose";
});

Array.from(choose).forEach(button => {
    button.addEventListener("click", function () {
        document.querySelector("aside").style.display = 'none';
        $("body > *:not(aside)").show()
    });
});

