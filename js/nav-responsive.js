var contador = 1;

function menu() {
	if (contador == 1) {
		document.getElementById("nav").style.left = "0";
		document.getElementById("nav").style.transition = "all 1s";
		contador = contador + 1;
	} else {
		document.getElementById("nav").style.left = "-100%";
		document.getElementById("nav").style.transition = "all 1s";
		contador = 1;
	}
}