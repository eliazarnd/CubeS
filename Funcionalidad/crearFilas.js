'use strict'

//Obtener objetos


    var columnas = document.getElementsByClassName("info");
    var columnas2 = document.getElementsByClassName("info2");

    //var boton = this.document.querySelector("#crear");
    var comp = document.getElementsByTagName("body");
    
    if(localStorage.getItem("llaves")){
    var Claves = localStorage.getItem("llaves").split(",");
    }

function obtenerObjetosJSON2(clave){

        for(var i = 0 ; i < localStorage.length ; i++){
            console.log(i);
        var participanteJSON;
        
        }
        return participanteJSON;
    }

function obtenerObjetosJSON(clave){

    var participanteJSON = JSON.parse(localStorage.getItem(clave));
    return participanteJSON;
}

var participantes = [];

function crearColumna(){

    for(var i = 0; i < localStorage.length-1; i++){
       participantes[i] = pasarJSONaArray(obtenerObjetosJSON(Claves[i]));
    }
    for(var i = 0; i < participantes.length; i++){
        var columnas = crearColumna2(9);
        for(var j = 0; j < columnas.length; j++){
            columnas[j].innerHTML = participantes[i][j];

        }

    }

}

 function pasarJSONaArray(objeto){

    var nombre = objeto.nombre;
    var apellido = objeto.apellido;
    var telefono = objeto.telefono;
    var genero = objeto.genero;
    var fechaNa = objeto.fechaNa;
    var correo = objeto.correo;
    var ciudad = objeto.ciudad;
    var categoria = objeto.categoria;
    var comentarios = objeto.comentarios;

    var participanteArray = [nombre, apellido, telefono, genero, fechaNa, correo,ciudad, categoria, comentarios];
    
    return participanteArray;

 }

 function crearColumna2(numColuma){
    var td = [];
    var table = document.getElementsByTagName("table")[0];
    var tr = document.createElement("tr");

    table.appendChild(tr);
    for(var i = 0; i < numColuma; i++){        
    td[i] = document.createElement("td");

    tr.appendChild(td[i]);
    }
    return td;
 }




