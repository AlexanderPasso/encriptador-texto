

//definicion de variables 
let mostrar_texto = '';
let textoEncriptar = '';
let section_texto = '';
let section_imag = '';
let texto_desencriptar = '';
let texto_encriptado = '';

//Llaves de encriptacion 

/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

// Se obtiene el objeto de las secciones y etiqueta <p> del html
section_texto = document.getElementById('section__mostrar__encriptado');
section_imag = document.getElementById('section__mostrar__imagen');
mostrar_texto = document.getElementById('mostrarTextoEncriptado');

//funcion que verifica la cadena que se quiere encriptar y desencriptar
function verificarCadena(cadena) {
    // Verificar si la cadena contiene solo letras minúsculas y espacios
    const soloMinusculasYEspacios = /^[a-z\s]+$/.test(cadena);

    // Retornar true si la condición se cumple, de lo contrario false
    return soloMinusculasYEspacios;
}

//Funcion para encriptar la cadena
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

//Funcion para desencriptar la cadena 
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

// funcion que llama el boton encriptar para que se encripte el texto
// y lo muestre en la seccion derecha 
function botonEncriptar(){
    textoEncriptar = document.getElementById('textoEncriptar').value;

    if(verificarCadena(textoEncriptar)){
        console.log(textoEncriptar);
        texto_encriptado = encriptar(textoEncriptar);
        console.log(texto_encriptado);
        section_imag.style.display = 'none';
        section_texto.style.display = 'block';

        mostrar_texto.innerHTML = encriptar(textoEncriptar);
    
    }else{
        console.log("La cadena contiene caracteres especiales, mayusculas o vacio")
    }
}

//Funcion que permite desencriptar el texto y lo muestra en la seccion
// derecha 
function botonDesencriptar(){

    texto_encriptado = document.getElementById('textoEncriptar').value;

    if(verificarCadena(texto_encriptado)){
        console.log(texto_encriptado);
        console.log(desencriptar(texto_encriptado));
        section_imag.style.display = 'none';
        section_texto.style.display = 'block';

        mostrar_texto.innerHTML = desencriptar(texto_encriptado);

    }else{
        console.log("La cadena contiene caracteres especiales, mayusculas o vacio")
    }
}


//Funcion que llama el boton copiar para obtener el texto encriptado
function botonCopiar() {
    // Obtiene el texto dentro de la etiqueta <p> con id 'mostrarTextoEncriptado'
    let textoEncriptado = document.getElementById('mostrarTextoEncriptado').innerText;

    // Copia el texto al portapapeles usando la API del portapapeles
    navigator.clipboard.writeText(textoEncriptado).then(function() {
        console.log('Texto copiado al portapapeles: ' + textoEncriptado);
        // Aquí puedes agregar un mensaje o alguna acción que se ejecute al copiar
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
}

