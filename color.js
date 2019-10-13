var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	messageDisplay.textContent = "";
	resetButton.textContent = "New Color"
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){	
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.background = "none";
		}
	}
	h1.style.background = "#2F4F4F";
})

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	messageDisplay.textContent = "";
	resetButton.textContent = "New Color"
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {	
		squares[i].style.background = colors[i];
		squares[i].style.background = "block";
	}
	h1.style.background = "#2F4F4F";
})

resetButton.addEventListener("click", function() {
	// Generate all new colors
	colors = generateRandomColors(numberOfSquares);
	// Pick a new random color from array
	pickedColor = pickColor();
	// Change color diplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	// Change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	};
	h1.style.background = "#2F4F4F";
	this.textContent = "New Color"
})

var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#778899";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeColors(color) {
	// Loop through all squares
	for(var i=0;i<numberOfSquares;i++) {
		// Change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// Make an array
	var arr = [];
	// Repeat num times
	for(var i=0;i<num;i++) {
		// Get random colors and push into array
		arr.push(randomColor());

	}
	// Return that array
	return arr;
}

function randomColor() {
	// Pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	// Pick a "green" from 0-255
	var g =Math.floor(Math.random()*256);
	// Pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

