const textArea = document.querySelector(".tx_area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//Funcion para llamar al evento de encriptado.
function btn_encriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}
// funcion para encriptar palabras.

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

//Funcion para llamar al evento de desencriptado.
function btn_desencriptar() {
  const textoEncriptado = desEncriptar(tx_area.value);
  mensaje.value = textoEncriptado;
  tx_area.value = "";
}

// funcion para desencriptar palabras.

function desEncriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function copiar() {
  var textField = document.getElementById("mensaje");
  textField.select();
  document.execCommand("Copy");
}
