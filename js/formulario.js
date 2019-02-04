var formulario = document.getElementsByName("formulario")[0],
elementos = formulario.elements,
boton = document.getElementById("btn");

formulario.addEventListener("submit", validar);

function validarNombre(e) {
	if (formulario.nombre.value == 0) {
		alert("completa el campo nombre");
		e.preventDefault();
	}
}

function validarRadio(e) {
	if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) {
	}else{
		alert("completa el campo sexo");
		e.preventDefault;
	}
}

function validarCheckbox(e) {
	if (formulario.terminos.checked == false) {
		alert("acepta los terminos y condiciones");
		e.preventDefault;
	}
}

function validar(e) {
	validarNombre(e);
	validarRadio(e);
	validarCheckbox(e);
}