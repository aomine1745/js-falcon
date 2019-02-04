var parrafo = document.getElementById("texto1");
var amigos = ["Carlos", "Cesar", "Alex"];
var enemigos = ["alv", "prro"];
//parrafo.innerHTML = "Tienes " + amigos.length + " amigos";
amigos.push("Luis", "Fernando", "nelVales");
amigos.pop();
parrafo.innerHTML += amigos[0] + "<br>";
parrafo.innerHTML += amigos[1] + "<br>";
parrafo.innerHTML += amigos[2] + "<br>";
parrafo.innerHTML += amigos[3] + "<br>";
parrafo.innerHTML += amigos[4] + "<p>";

parrafo.innerHTML += enemigos[0] + "<br>";
parrafo.innerHTML += enemigos[1] + "<p>";

for (var b of amigos) {
	parrafo.innerHTML += b + "<br>";
}
for (var x in amigos) {
	if (x < 1) {
		parrafo.innerHTML += "<br>" + amigos[x] + "<br>";
	}else{
		parrafo.innerHTML += amigos[x] + "<br>";
	}
}

for ( var i = 0; i < amigos.length; i++) {
	if (i < 4) {
		parrafo.innerHTML += "<br>" + amigos[i];
	}else{
		parrafo.innerHTML += "<br>" + amigos[i] + "<br>";
	}
}

var personas = amigos.concat(enemigos);
for (var a of personas) {
	parrafo.innerHTML += "<br>" + a;
}

var amigos2 = amigos.join(", ");
parrafo.innerHTML += "<p>" + amigos2;

function suma (n1, n2) {
	var n1;
	var n2;

	return n1 + n2;
}

parrafo.innerHTML += "<p>La suma es: " + suma(4, 1);

function numeroMaximo(valor1, valor2) {
	if (valor1 > valor2) {
		return valor1;
	}else{
		return valor2;
	}
}
parrafo.innerHTML += "<p>El numero maximio es: " + numeroMaximo(4, 1);