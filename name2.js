//Javascript Part//

function showName () {
	var userName = document.getElementById('userName').value;
	//I will take info from the user and save it as userName
  document.getElementById('one').innerHTML="Hello" +" "+ userName;
	//Output userName to HTML in the ID called "one"
}

------------------------------------------------------------------

//HTML Part

<input type="text" id="userName"></input>
<button onclick="showName()">Show my name</button>
<p id="one"></p>//


-------------------------------------------------------


