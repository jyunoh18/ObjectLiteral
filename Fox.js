<span id="death">The quick brown <span id="fox">fox</span>
jumped over the lazy dog.</span>
<p id="place"></p>
<button onclick="showAnswer()">Who jumped?</button>
----------------------------------------------------

function showAnswer() {
var x = document.getElementById('fox').innerHTML;
document.getElementById('place').innerHTML = x;
}
