var grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

var rover = { 
    
	direction: "N",
	x:0,
	y:0,
    travelLog: [],
};


function  turnRight(rover){
    if(rover.direction === "N") {
        rover.direction = "E";
    }else if(rover.direction === "E"){
        rover.direction = "S";
    }
     else if(rover.direction === "S") {
        rover.direction = "W";
    }
   else if(rover.direction === "W") {
        rover.direction = "N";
    }
    console.log(rover.direction);
};


function turnLeft(rover){
    if(rover.direction === "N") {
        rover.direction = "W";
    }
    else if(rover.direction === "W") {
        rover.direction = "S";
    }
    else if(rover.direction === "S") {
        rover.direction = "E";
    }
    else if(rover.direction === "E") {
        rover.direction = "N";
    }
    console.log(rover.direction);
}; 


function moveForward(rover) {
    
    if(rover.direction ==="N"){
        rover.y --;
        console.log(`${rover.x} / ${rover.y}`);
    }else if (rover.direction === "E") {
        rover.x ++;
        console.log(`${rover.x} / ${rover.y}`);
    }else if(rover.direction ==="S"){
        rover.y ++;
        console.log(`${rover.x} / ${rover.y}`);
    }else if (rover.direction === "W") {
        rover.x --;
        console.log(`${rover.x} / ${rover.y}`);
    }

    
    
};


function pilotRover(l, r, f) {
    var r = turnRight;
    var f = moveForward;
    var l = turnLeft;
};
pilotRover("rffrfl");


turnLeft(rover);
turnRight(rover);


moveForward(rover);
moveForward(rover);
moveForward(rover);
