const ninjaImage = document.getElementById("ninja");
const toughImage = document.getElementById("tough");
const devilImage = document.getElementById("devil");

const ninja = document.getElementById("ninjaButton");
const tough = document.getElementById("toughButton");
const devil = document.getElementById("devilButton");
const choose = document.getElementsByClassName("choose");
const next1 = document.getElementById("next1")

const img1 = document.getElementById("img1");
const dialogue1 = document.getElementById("dialogue1");

let characterSrc = "";
const dialogueText = "Welcome to Duel Madness! In this game, you will duel all sorts of creatures and humans while getting more powerful along the way! But first, let's start with a quick tutorial.";

function typeWriter(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

    $("body > *:not(#choose)").hide();


Array.from(choose).forEach(button => {
    button.addEventListener("click", function () {
        if (this.id === "ninjaButton") {
            characterSrc = ninjaImage.src;
        } else if (this.id === "toughButton") {
            characterSrc = toughImage.src;
        } else if (this.id === "devilButton") {
            characterSrc = devilImage.src;
        }

        document.querySelector("aside").style.display = 'none';
        $("body > *:not(#choose):not(#tutorialPart1)").show();

        const character = document.createElement("img");
        character.src = characterSrc;
        img1.append(character);
        character.id = "character1";

        $(character).css({
            "width": "700px",
            "height": "700px",
            "margin-left": "200px",
            "display": "inline-block",
        });

        typeWriter(dialogue1, dialogueText, 35);
    });
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

const colors = ["blue", "green", "magenta", "red"]
let colorIndex = 0
function nextBtnColorCycle() {
    next1.style.backgroundColor = colors[colorIndex]
    colorIndex = (colorIndex + 1) % colors.length
}
setInterval(nextBtnColorCycle, 1000)

function startTutorial() {
    $("#game").hide()
    $("#tutorialText1").show()
}
$("#next1").on("click", function () {
    startTutorial()
    
})

