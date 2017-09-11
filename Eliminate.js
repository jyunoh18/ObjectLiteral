<p class="stem">Donald Trump</p>
<p class="stem">Hitler</p>
<p class="stem">Kim Jong Un</p>
<p class="stem">Vladimir Putin</p>

<button onclick="deathNote()">Random death</button>
-------------------------------------------------

function deathNote() {
	var death = Math.floor(Math.random()*4);
  document.getElementsByClassName('stem')[death].innerHTML = "xxxxxxxxxx"
	
}

--------------------------------------------------------
	function deathNote() {
	var death = Math.floor(Math.random()*4);
  document.getElementsByClassName('stem')[death].innerHTML = 
	  "<img src='https://www.singularityweblog.com/wp-content/uploads/2016/02/Death.jpg' width='10%'>";
}
