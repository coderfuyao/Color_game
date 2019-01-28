var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numsquares = 6;
colorDisplay.textContent = pickedColor;
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numsquares = 3
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numsquares = 6;
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
})
reset.addEventListener("click",function(){
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    this.textContent = 
    messageDisplay.textContent = "New Colors";
})

for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click",function(){
        var clickedcolor = this.style.background;
        //alert(pickedColor);
        if(clickedcolor === pickedColor){
            messageDisplay.textContent = "Correct!"
            changeColors(clickedcolor);
            h1.style.background = clickedcolor;
            reset.textContent = "Play Again?"
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }   
    })
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make a array
    var arr = []
    for(var i =0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    // pick a "red" for 0-255
    // pick a "green" from 0 -255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}