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
    }
    if(rover.direction === "E") {
        rover.direction = "S";
    }
    if(rover.direction === "S") {
        rover.direction = "W";
    }
    if(rover.direction === "W") {
        rover.direction = "N";
    }
    console.log(rover.direction);
};


function turnLeft(rover){
    if(rover.direction === "N") {
        rover.direction = "W";
    }
    if(rover.direction === "W") {
        rover.direction = "S";
    }
    if(rover.direction === "S") {
        rover.direction = "E";
    }
    if(rover.direction === "E") {
        rover.direction = "N";
    }
    console.log(rover.direction);
}; 


function moveForward(rover) {
	if(rover.x === 0 && rover.y===0){
		rover.x=1;
		rover.y=0;	
	}
	console.log(`${rover.x} / ${rover.y}`);

};


function pilotRover(l, r, f) {

};
pilotRover();


turnLeft(rover);
turnRight(rover);
moveForward(rover);