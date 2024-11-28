const itemsInCart = document.getElementById("itemsincart");
const btns = document.querySelectorAll("#ppcbtn, #mickebtn, #sonybtn, #keyboardbtn");
const asideElement = document.getElementsByTagName("aside")[0];
const cartContainer = document.getElementById("cartContainer");
const hide = document.getElementById("close");
const openClose = document.getElementById("openClose");
const detailsSony = document.getElementById("detailsSony");
const detailsMicke = document.getElementById("detailsMicke");
const detailsPc = document.getElementById("detailsPc");

let pc = 2400;
let desk = 450;
let headphones = 60;

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

function toggleCartContainer() {
    if (cartContainer.style.display === "block" || cartContainer.style.display === "") {
        cartContainer.style.display = "none";
        openClose.src = "https://www.svgrepo.com/show/135316/left-arrow.svg";
        document.getElementById("pwrpc").style.marginLeft = "115px"
        document.getElementById("sony1").style.marginLeft = "100px"
    } else {
        cartContainer.style.display = "block";
        openClose.src = "https://cdn-icons-png.freepik.com/512/156/156876.png";
        $(openClose).css({
            "height": "100vh",
            "width": "50px",
            "object-fit": "contain"
        })
        document.getElementById("pwrpc").style.marginLeft = "200px"
        document.getElementById("sony1").style.marginLeft = "200px"
    }
}

openClose.addEventListener("click", function () {
    toggleCartContainer();
});

hide.addEventListener("click", function () {
    cartContainer.style.display = "none";
    openClose.src = "https://www.svgrepo.com/show/135316/left-arrow.svg";
    document.getElementById("pwrpc").style.marginLeft = "115px"
    document.getElementById("sony1").style.marginLeft = "100px"
});

function disableButton(button) {
    button.disabled = true;
}

function allowButton(button) {
    button.disabled = false;
}

btns.forEach(btn => {
    btn.addEventListener("click", function (event) {
        document.getElementById("pwrpc").style.marginLeft = "200px"
        document.getElementById("sony1").style.marginLeft = "200px"
        items++;
        updateCartText();
        disableButton(btn);
        if (cartContainer.style.display !== "block") {
            cartContainer.style.display = "block";
            openClose.src = "https://cdn-icons-png.freepik.com/512/156/156876.png";
            $(openClose).css({
                "height": "100vh",
                "width": "50px",
                "object-fit": "contain"
            })
        }

        const imageId = event.target.id;
        let imageFile;
        let price;
        let itemP

        if (imageId === "sonybtn") {
            imageFile = "https://d1ncau8tqf99kp.cloudfront.net/converted/74739_original_local_1200x1050_v3_converted.webp";
            price = headphones;
            itemP = detailsSony.innerText
        } else if (imageId === "mickebtn") {
            imageFile = "mickebtn.png";
            price = desk;
            itemP = detailsMicke.innerText
        } else if (imageId === "ppcbtn") {
            imageFile = "ppcbtn.png";
            price = pc;
            itemP = detailsPc.innerText
        } else {
            imageFile = `${imageId}.png`;
        }

        const imageElement = document.createElement("img");
        imageElement.height = 350;
        imageElement.width = 350;
        $(imageElement).css({
            "border": "5px solid #104497",
            "margin-top": "30px",
            "padding-top": "10px",
            "padding-bottom": "10px",
            "border-radius": "15px",
            "border-bottom": "none"
        });
        imageElement.src = imageFile;
        asideElement.appendChild(imageElement);

        const detailsP = document.createElement("p")
        detailsP.innerText = itemP
        asideElement.appendChild(detailsP)
        $(detailsP).css({
            "border": "5px solid #2390cf",
            "border-radius": "15px",
            "width": "350px",

        })

        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.marginTop = "10px";

        const priceElement = document.createElement("p");
        priceElement.innerText = `$${price}`;
        $(priceElement).css({
            "border": "3px solid #104497",
            "text-align": "center",
            "color": "black",
            "font-size": "25px",
            "display": "inline-block",
            "padding-left": "55px",
            "padding-right": "55px",
            "font-weight": "bold",
            "background-color": "#32a0a8",
            "border-radius": "5px",
            "margin-right": "10px"
        });
        container.appendChild(priceElement);

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        $(removeBtn).css({
            "border": "3px solid black",
            "background-color": "#cf3f21",
            "text-align": "center",
            "color": "black",
            "font-size": "25px",
            "display": "inline-block",
            "padding-left": "39px",
            "padding-right": "39px",
            "font-weight": "bold",
            "border-radius": "5px",
            "margin-bottom": "15px"
        });
        container.appendChild(removeBtn);
        asideElement.appendChild(container);

        

        removeBtn.addEventListener("click", function () {
            imageElement.remove();
            container.remove();
            items--;
            updateCartText();
            allowButton(btn);
        });
    });
});