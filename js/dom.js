var elemento = document.createElement("h2");
var contenido = document.createTextNode("Este es nuestro Titular");
elemento.append(contenido);
elemento.setAttribute("align", "center");
document.getElementById("subtitulo").append(elemento);	

var primerElemento = document.getElementById("first");
primerElemento.textContent = "Nuevo Texto.";

var element = document.createElement("li"),
content = document.createTextNode("Remplazando.");
element.appendChild(content);
var padre = document.getElementsByTagName("li")[2].parentNode,
reference = document.getElementsByTagName("li")[2],
eliminar = document.getElementsByTagName("li")[3];
padre.replaceChild(element, reference);
padre.removeChild(eliminar);

var cuadrado = document.createElement("div");
var seccion = document.getElementById("contenedor");
var referencia = document.getElementsByTagName("div")[0];
cuadrado.setAttribute("class", "azul");
seccion.insertBefore(cuadrado, referencia);
