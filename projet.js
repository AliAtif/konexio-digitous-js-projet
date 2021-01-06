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
    travelLog: []
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
turnLeft(rover);
turnRight(rover);
/*
function moveForward(rover) {

};
moveForward();

function pilotRover(l, r, f) {

};
pilotRover();
*/