// Only during February 14th
let heart = document.getElementById("valentinesDay");
let topOffset = 10;
let leftOffset = 0;

document.addEventListener("mousemove", function(event) {
    let mouseX = event.clientX + leftOffset;
    let mouseY = event.clientY + topOffset;

    heart.style.left = mouseX + "px";
    heart.style.top = mouseY + "px";
});

