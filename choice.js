var stem = {

classroom: "F103",
students: 18
};


var userInput = prompt("classroom or students?");
var lowercase = userInput.toLowerCase();

if ((lowercase === "classroom") || (lowercase === "students")) {

window.alert(stem[lowercase]);
}

else { 
	askAgain();
}

function askAgain() {

var userInput = prompt("classroom or students?");
var lowercase = userInput.toLowerCase();

if ((lowercase === "classroom") || (lowercase === "students")) {

window.alert(stem[lowercase]);
}

else { 
	askAgain();
}



}
