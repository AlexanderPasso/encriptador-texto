

//definicion de variables 

let textoEncriptar = " ";

//Llaves de encriptacion 

/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function verificarCadena(cadena) {
    // Verificar si la cadena contiene solo letras minúsculas
    const soloMinusculas = /^[a-z]+$/.test(cadena);

    // Verificar si la cadena no contiene acentos ni caracteres especiales
    const sinAcentosNiEspeciales = /^[a-z]+$/.test(cadena);

    // Retornar true si ambas condiciones se cumplen, de lo contrario false
    return soloMinusculas && sinAcentosNiEspeciales;
}

function encriptar(cadena) {
    // Reemplazar cada letra según las llaves de encriptación
    let encriptada = cadena
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    return encriptada;
}

function desencriptar(cadenaEncriptada) {
    // Revertir cada encriptación según las llaves originales
    let desencriptada = cadenaEncriptada
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    return desencriptada;
}

function botonEncriptar(){
    textoEncriptar = document.getElementById('textoEncriptar').value;

    if(verificarCadena(textoEncriptar)){
        console.log(textoEncriptar);
        console.log(encriptar(textoEncriptar));
        //window.location.href = 'index-2.html'
    }else{
        console.log("La cadena contiene caracteres especiales, mayusculas o vacio")
    }
}

function botonDesencriptar(){
    textoEncriptar = document.getElementById('textoEncriptar').value;
    if(verificarCadena(textoEncriptar)){
        console.log(textoEncriptar);
        console.log(desencriptar(textoEncriptar));
    }else{
        console.log("La cadena contiene caracteres especiales, mayusculas o vacio")
    }
}

