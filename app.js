function validarTexto (texto) {
    
    let letras = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
      
    if(texto.match(mayusculas)||texto.match(letras)){
        alert('No se aceptan letras especiales ni mayusculas');
        return true; 
    }else if(texto==vacio){
       alert("Ingresar texto");
        return true;
   }else {
        return false;
    }
}


let btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click",function ()  {
    let textInput = document.querySelector("#input-texto").value;
    let textoIngresado = textInput;
   
    if (validarTexto (textoIngresado) == false) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#msg");
        resultado.value = Encriptado;
    } else {        
        textInput = "";     
     
    }
               
})


const parametros = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

function encriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in parametros) {
        Encriptado = textoIngresado.replaceAll(obj,parametros[obj]);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}


let btnCopiar = document.querySelector("#btn-copy");

btnCopiar.addEventListener("click",function(){        
    let Copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#input-texto").value="";

});

let btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function(){
    let textoIngresado = document.querySelector("#input-texto").value;
    let Desencriptado = desencriptar(textoIngresado);

    let resultado = document.querySelector("#msg");
    resultado.value = Desencriptado;
})



function desencriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in parametros) {
        Encriptado = textoIngresado.replaceAll(parametros[obj],obj);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}
