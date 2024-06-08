const itemsInCart = document.getElementById("itemsincart");
const btns = document.querySelectorAll("#ppcbtn, #mickebtn, #sonybtn, #keyboardbtn");
const asideElement = document.getElementsByTagName("aside")[0];
const cartContainer = document.getElementById("cartContainer");
const hide = document.getElementById("close");
const signIn = document.querySelector("#username, #profile")

let items = 0;

function updateCartText() {
    if (items === 0) {
        itemsInCart.innerText = "Your cart is empty";
    } else if (items === 1) {
        itemsInCart.innerText = `You have ${items} item in your cart`;
    } else {
        itemsInCart.innerText = `You have ${items} items in your cart`;
    }
}

hide.addEventListener("click", function () {
    cartContainer.style.display = "none"
})


function disableButton(button) {
    button.disabled = true;
}


function toggleCartContainer() {
    if (cartContainer.style.display !== "block") {
        cartContainer.style.display = "block";
    }
}



btns.forEach(btn => {
    btn.addEventListener("click", function (event) {
        items++;
        updateCartText();
        disableButton(btn);
        toggleCartContainer()
        console.log(event)
        const imageId = event.target.id;
        let imageFile;
        if (imageId === "sonybtn") {
            imageFile = "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/437/153669/fc0078efc5dd4e2b579dd153ea420bc4865818c9cfeab31652d4e20abdd9a3ee__47830.1707030105.png?c=2"
        } else if (imageId === "keyboardbtn") {
            imageFile = "https://www.pngkey.com/png/full/429-4290320_redragon-k579-mechanical-gaming-keyboard-wired-rgb-iball.png"
        } else {
            imageFile = `${imageId}.png`
        }
        const imageElement = document.createElement("img")
        imageElement.src = imageFile;
        asideElement.appendChild(imageElement)
        console.log(asideElement)
        console.log(imageElement)
        console.log("hi im doing this for testing purposes")
    });
});


