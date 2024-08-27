const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"

//Encriptar el mensaje

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
    btnCopy.style.display = "block"
}

function encriptar(matrizEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    matrizEncriptada = matrizEncriptada.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++){
            if(matrizEncriptada.includes(matrizCodigo[i][0])){
                matrizEncriptada = matrizEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }
        }
        return matrizEncriptada;
}


//Desencripataar el mensaje


function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""  
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}

//botón para copiar

function copiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
}