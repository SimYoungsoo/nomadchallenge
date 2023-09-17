const img = document.createElement("img");
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenimg = images[Math.floor(Math.random()*images.length)];

img.src = `images/${chosenimg}`;
img.width = 1200;
img.height = 600;
document.body.appendChild(img);