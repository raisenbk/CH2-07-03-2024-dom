// Generate random number for player 1
let randomNum1 = Math.floor(Math.random() * 6) + 1;

// Mengambil image based on hasil generate randomNum
var randomDiceImg1 = "dice" + randomNum1 + ".png";

// set random image source based on random number
const randomImgSource = `images/${randomDiceImg1}`;

let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource);

// Generate random number for player 2
let randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum2)

var randomDiceImg2 = "dice" + randomNum2 + ".png";

const randomImageSource2 = `images/${randomDiceImg2}`;

let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource2);

if (randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Win!!";
} else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 Win!!";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}