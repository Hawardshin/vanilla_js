const images = [
	"1.png",
	"2.jpg",
]
const greetg = document.querySelector("#bg");
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);
// document.body.appendChild(bgImage);
greetg.appendChild(bgImage)
