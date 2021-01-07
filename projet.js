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
    for(var i = 0; i < 10; i++ ){
        if(rover.x !== 10 ){
            console.log(`${rover.x} / ${rover.y}`);    
            rover.x++;		
        };
         
    }
    for(var i = 0; i < 10; i++ ) {
        if(rover.y !== 10){

            console.log(`${rover.x} / ${rover.y}`);
            rover.y++;		
         } 
    }
    
};


function pilotRover(l, r, f) {

};
pilotRover();


turnLeft(rover);
turnRight(rover);
moveForward(rover);