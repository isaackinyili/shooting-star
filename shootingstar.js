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
