var numsquares = 9;
var colors = [];
var pickedcolor ;
var clickedcolor;
var resetbutton = document.querySelector("#reset");
var pickedcolordisplay = document.getElementById("pickedcolordisplay");
var squares = document.querySelectorAll(".square");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modes = document.querySelectorAll(".mode");

init();

function init()
{
	modessetup();
	squaressetup();
	reset();
}

function modessetup()
{
	for(var i=0; i<modes.length ; i++)
	{
		modes[i].addEventListener("click", function(){
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");
			modes[2].classList.remove("selected");
			this.classList.add("selected");
			// this.textContent === "EASY" ? numsquares = 3 : this.textContent === "MEDIUM" ? numsquares = 6 : numsquares = 9;
			if(this.textContent === "EASY")
				numsquares = 3;
			else if(this.textContent === "MEDIUM")
				numsquares = 6;
			else
				numsquares = 9;
			reset();
		});
	}
}

function squaressetup()
{
	for(var i=0; i<squares.length; i++)
	{
		//assigning colors to squares
		squares[i].style.backgroundColor = colors[i];
		//Adding click event to the squares
		squares[i].addEventListener("click", function(){
			clickedcolor = this.style.backgroundColor;
			//comparing the clicked color with the goal
			if(clickedcolor === pickedcolor)
			{
				messagedisplay.textContent = "Correct!";
				resetbutton.textContent = "Play Again?";
				colorchange(clickedcolor);
				h1.style.backgroundColor = clickedcolor;
			}
			else
			{
				messagedisplay.textContent = "Try Again";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}

function reset()
{
	//create new colors array
	colors = generaterandomcolors(numsquares);
	//pick a new color
	pickedcolor = pickcolor();
	//change the display of pickedcolor
	pickedcolordisplay.textContent = pickedcolor;
	resetbutton.textContent = "New Colors";
	//display the changes
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
	h1.style.backgroundColor = "steelblue";
	messagedisplay.textContent = "";
}


resetbutton.addEventListener("click",function(){
	reset();
});

function colorchange(color)
{
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickcolor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolors(num)
{
	//create an array
	var arr = [];
	//add num random colors to array
	for(var i=0; i<num; i++)
	{
		//get random color and push it into the array
		arr.push(randomcolor());
	}
	//return the array
	return arr;
}

function randomcolor()
{
	// choose red b/w =-255
	var r = Math.floor(Math.random() * 256);
	// choose green b/w =-255
	var g = Math.floor(Math.random() * 256);
	// choose blue b/w =-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}