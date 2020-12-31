var input1 = document.getElementById('color1');
var input2 = document.getElementById('color2');
var h3 = document.querySelector('h3');
var body = document.getElementById('body')


function setColor() {

	 body.style.background =  "linear-gradient(to right ," +input1.value + ", "+ input2.value+")";

	 h3.textContent= body.style.background + ";" ;
}

setColor();
input1.addEventListener("input", setColor);
input2.addEventListener("input", setColor);