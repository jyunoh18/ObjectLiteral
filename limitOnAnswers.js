var stem = {

classroom: "F103",
students: 18
};


var userInput = prompt("classroom or students?");
var lowercase = userInput.toLowerCase();

if ((lowercase == "classroom") || (lowercase == "students")) {

window.alert(stem[lowercase]);
}

else { 
for (i = 0; i<3; i++) {

var userInput = prompt("classroom or students?");
var lowercase = userInput.toLowerCase();

if ((lowercase == "classroom") || (lowercase == "students")) {
	i = 3;
window.alert(stem[lowercase]);
}
}
}
