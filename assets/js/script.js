const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncritar() {
	const TextoEcriptado = encriptar(textArea.value);
	mensaje.value = TextoEcriptado;
	textArea.value = "";
	mensaje.style.backgroundImage = "none";
	document.getElementById("noMensaje").style.display = "none";
	document.querySelector(".btn-copiar").style.display = "block";
}
function btnDesencritar() {
	const TextoDesencriptado = Desencriptar(textArea.value);
	mensaje.value = TextoDesencriptado;
	textArea.value = "";
	mensaje.style.backgroundImage = "none";
	document.getElementById("noMensaje").style.display = "none";
	document.querySelector(".btn-copiar").style.display = "block";
}
function btnLimpiar() {
	textArea.value = "";
	mensaje.value = "";
	mensaje.style.backgroundImage = "url('/img/muneco.png')";
	document.getElementById("noMensaje").style.display = "block";
	document.querySelector(".btn-copiar").style.display = "none";
}
function btnCopiar() {
	mensaje.select();
	document.execCommand("copy");
}

function encriptar(textoEcriptar) {
	textoEcriptar = textoEcriptar.toLowerCase();
	let matrizCodigo = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (textoEcriptar.includes(matrizCodigo[i][0])) {
			textoEcriptar = textoEcriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}
	return textoEcriptar;
}
function Desencriptar(textoDesencriptar) {
	textoDesencriptar = textoDesencriptar.toLowerCase();
	let matrizCodigo = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (textoDesencriptar.includes(matrizCodigo[i][1])) {
			textoDesencriptar = textoDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		}
	}
	return textoDesencriptar;
}

function reglasInput(e) {
	var key = e.keyCode || e.which;
	var tecla = String.fromCharCode(key);
	var letrasPermitidas = "abcdefghijklmnñopqrstuvwxyz1234567890 ";
	var especialesPermitidas = [8, 37, 39, 46];
	var tecla_especial = false;

	for (var i in especialesPermitidas) {
		if (key == especialesPermitidas[i]) {
			tecla_especial = true;
			break;
		}
	}

	if (letrasPermitidas.indexOf(tecla) == -1 && !tecla_especial) {
		return false;
	}
}
