function encriptar() {
    let entrada = document.getElementById("texto_entrada").value;
    let salida = "";
    for (let i = 0; i < entrada.length; i++) {
        const caracter = entrada[i];
        if (esVocal(caracter)) {
            if (caracter == "a") {
                salida = salida.concat("ai");
            } else if (caracter == "e") {
                salida = salida.concat("enter");
            } else if (caracter == "i") {
                salida = salida.concat("imes");
            } else if (caracter == "o") {
                salida = salida.concat("ober");
            } else {
                salida = salida.concat("ufat");
            }
        } else {
            salida = salida.concat(caracter);
        }
    }
    actualizarSalida(salida);
}

function desencriptar() {
    let entrada = document.getElementById("texto_entrada").value;
    let salida = "";
    for (let i = 0; i < entrada.length; i++) {
        const caracter = entrada[i];
        if (esVocal(caracter)) {
            if (caracter == "a") {
                salida = salida.concat("a");
                i++;
            } else if (caracter == "e") {
                salida = salida.concat("e");
                i += 4;
            } else if (caracter == "i") {
                salida = salida.concat("i");
                i += 3;
            } else if (caracter == "o") {
                salida = salida.concat("o");
                i += 3;
            } else {
                salida = salida.concat("u");
                i += 3;
            }
        } else {
            salida = salida.concat(caracter);
        }
    }
    actualizarSalida(salida);
}

function esVocal(char) {
    if (
        char == "a" ||
        char == "e" ||
        char == "i" ||
        char == "o" ||
        char == "u"
    ) {
        return true;
    }
    return false;
}

function actualizarSalida(output) {
    document.getElementById("encriptador-salida-default").style.display =
        "none";
    document.getElementById("encriptador-salida-activo").style.display = "flex";
    document.getElementById("encriptador-salida-parrafo").value = output;
}

function copyText() {
    document.getElementById("encriptador-salida-parrafo").disabled = false;
    let texto = document.querySelector("#encriptador-salida-parrafo");
    texto.select();
    document.execCommand("copy");
	document.getElementById("encriptador-salida-parrafo").disabled = true;
}
