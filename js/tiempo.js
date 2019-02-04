var contador = 0;
function saludo() {
	contador++;
	alert(contador);
	intervalo = setTimeout(saludo, 1000);
	if (contador == 5) {
		clearInterval(intervalo);
	}
}
saludo();
//setTimeout(saludo, 1000);
//var intervalo = setInterval(saludo, 1000);