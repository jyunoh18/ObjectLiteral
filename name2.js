//Javascript Part//

function showName () {
	var userName = document.getElementById('userName').value;
  document.getElementById('one').innerHTML="Hello" +" "+ userName;
}

------------------------------------------------------------------

//HTML Part

<input type="text" id="userName"></input>
<button onclick="showName()">Show my name</button>
<p id="one"></p>//


-------------------------------------------------------


