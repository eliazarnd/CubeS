'use strict'

//Informacion del ususario a registrarse al torneo
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var telefono = document.getElementById("telefono");
var genero = document.getElementsByName("genero");
var fechaNa = document.getElementById("fechaNa");
var correo = document.getElementById("correo");
var ciudad = document.getElementById("ciudad");
var categoria = document.getElementById("cat");
var comentarios = document.getElementById("comentarios");

//obtencion del boton

var botonRegistro = document.getElementById("botonRe");

var informacionUsusario = [nombre, apellido, telefono, genero, fechaNa, correo, ciudad, categoria, comentarios];


function obtenerInfomacionUsuario(){
  
    var nombreObtenido = informacionUsusario[0].value;
    var apellidoObtenido = informacionUsusario[1].value;
    var telefonoObtenido = informacionUsusario[2].value;

    var generoObtenido;

    if(genero[0].checked)
        generoObtenido = document.getElementById("m").textContent;
    else if(genero[1].checked)
        generoObtenido = document.getElementById("f").textContent;
        
    var fechaNaObtenido = informacionUsusario[4].value;;
    
    var correoObtenido = informacionUsusario[5].value;

    var ciudadObtenido = informacionUsusario[6].value;

    var categoriaObtenida = informacionUsusario[7].value;

    var comentariosObtenidos = informacionUsusario[8].value;

    var informacionCompetidor = {

        nombre: nombreObtenido,
        apellido: apellidoObtenido,
        telefono: telefonoObtenido,
        genero: generoObtenido,
        fechaNa: fechaNaObtenido,
        correo: correoObtenido,
        ciudad: ciudadObtenido,
        categoria: categoriaObtenida,
        comentarios: comentariosObtenidos
    };
        //Guardando al competidor en el objeto JSON 
        localStorage.setItem(informacionCompetidor.nombre, JSON.stringify(informacionCompetidor));

}

function guardarInformacionLocal(){
    
    var infoC = obtenerInfomacionUsuario();
    localStorage.setItem("nombre", infoC[0]);
    localStorage.setItem("apellidos", infoC[1]);
    localStorage.setItem("telefono", infoC[2]);
    localStorage.setItem("genero", infoC[3]);
    localStorage.setItem("fechaNa", infoC[4]);
    localStorage.setItem("email", infoC[5]);
    localStorage.setItem("ciudad", infoC[6]);
    localStorage.setItem("categoria", infoC[7]);
    localStorage.setItem("comentario", infoC[8]);
}

function recuperarInformacionComLocal(competidor){

    var competidor = JSON.parse(localStorage.getItem(competidor));

    return competidor;

}

var llaves = "";

function guardarllave(clave){
    
    if(localStorage.getItem("llaves")){
        llaves = localStorage.getItem("llaves");
        llaves +=","+clave;

    }else{
        llaves+=clave;
        console.log("No hay local storage");
    }
    console.log(llaves);
    localStorage.setItem("llaves", llaves);
}

function obtenerClaves(){

}

botonRegistro.addEventListener("click", function(e){
    
    var validado = validarFormulario();

    if(validado == true){    
    obtenerInfomacionUsuario();
    guardarllave(nombre.value);
    alert("Registro exitoso espera hasta la fecha del concuros");
    }    
    else{
        alert("El regitro no se pudo efectuar correctamente");
    }
});

function validarFormulario(){


if(nombre.value == null || nombre.value == ""){
    alert("El nombre es obligatorio");
    return false;
}

if(apellido.value == null || apellido.value == ""){
    alert("El apellido es obligatorio");
    return false;
}

if(telefono.value == null || telefono.value == ""){
    alert("El telefonoes obligatorio solo campos numericos");
    return false;
}

if(correo.value == null || correo.value == ""){
    alert("El correo obligatorio");
    return false;
}

if(ciudad.value == null || ciudad.value == ""){
    alert("La ciudad es obligatoria");
    return false;
}
else{
    return true;
    
}
}






