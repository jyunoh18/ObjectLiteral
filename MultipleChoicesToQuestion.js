<p>Click the button to create a P element with some text.</p>
<button onclick="myFunction()">Try it</button>
------------------------------------------------

function myFunction() {
	var para = document.createElement("p");
  var t = document.createTextNode("This is a paragraph.")
  para.appendChild(t);
  document.body.appendChild(para);


}
