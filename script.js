const card = document.querySelector(".photo-card");

document.addEventListener("mousemove", function(event) {

    let x = event.clientX;
    let y = event.clientY;

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    let rotateY = (x - centerX) / 30;
    let rotateX = (centerY - y) / 30;

    card.style.transform =
        "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

});


document.addEventListener("mouseleave", function() {

    card.style.transform =
        "rotateX(0deg) rotateY(0deg)";

});