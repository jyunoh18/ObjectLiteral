var playerOne = prompt("Enter a number between 1-6");
if ((playerOne < 1) || (playerOne > 6) || isNaN(playerOne)) {
		window.alert("You cannot follow directions");
}
else { 
	var playerTwo = (Math.floor(Math.random()*6)+1);
  if (playerOne == playerTwo) {
  window.alert("You win!");
  }
  else {
  window.alert("PlayerOne answer was " + playerOne);
  window.alert("You chose " + playerTwo);
  }
	}

