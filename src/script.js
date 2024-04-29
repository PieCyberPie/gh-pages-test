console.log(123);

image = document.querySelector(".image");
text = document.querySelector(".text");

console.log(image);
image.addEventListener('click', () => {
    text.style.background = "grey";
    text.style.margin = "100px";
})