var boton = document.getElementById("botoncito");
boton.addEventListener("click", suma);
parrafo = document.getElementById("parrafo");
function suma() {
	var numero1 = parseFloat(document.getElementById("numero1").value);
	var numero2 = parseFloat(document.getElementById("numero2").value);
	var resultado = numero1 + numero2;
	parrafo.innerHTML = resultado;
}