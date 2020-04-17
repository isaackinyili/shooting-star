var c = document.getElementById("star");
var context = c.getContext("2d");

//Square at the top left corner
context.fillStyle= "yellow";
context.fillRect(10,10,25,25);

//square at the bottom right
context.fillStyle = "yellow";
context.fillRect(365,365,25,25);

//Drawing Triangle at the center
context.beginPath();
context.moveTo(180,180);
context.lineTo(160,220);
context.lineTo(200,220);
context.closePath();
/* 
Code to include a fill on the triangle outline
context.lineWidth = 10;
context.strokeStyle= "red";
context.stroke(); 
*/
context.fillStyle="yellow";
context.fill();

//Drawing the circle on the top right
context.fillstyle="yellow";
context.beginPath();
context.arc(370,25,15,0,2.0*Math.PI);
context.fill();

//Drawing the circle on the bottom left
context.fillstyle="yellow";
context.beginPath();
context.arc(25,370,15,0,2.0*Math.PI);
context.fill();

/* 
Code run on Khan Academy Platform for the shooting star project
var xPos = 0;
var yPos = 400;

var xPos1 = 400;
var yPos1 = 400;

var xPos2 = 200;
var yPos2 = 400;
var radius = 20;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 20, 20);
    
    fill(255, 242, 0);
    ellipse(xPos1, yPos1, 20, 20);
    
    fill(255, 242, 0);
    ellipse(xPos2, yPos2, radius, radius);
    
    xPos+=4;
    yPos-=4;
    
    xPos1-=4;
    yPos1-=4;
    
    yPos2-=10;
    radius+=3;
};
*/