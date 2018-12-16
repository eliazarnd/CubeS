'use strict'

//Obterner el presio de los articulos

  
function obtenerDatos(idN, idP){
            
    var textoTipo = document.getElementById(idN);
    var textoPresio = document.getElementById(idP);

    textoTipo = textoTipo.textContent;
    textoPresio = textoPresio.textContent.substring(1);

    console.log(textoTipo);
    console.log(textoPresio);
}


window.addEventListener('load', () =>{
    function getPresio(pos){
    
        console.log("me has dado click");
        
        var presios = document.getElementsByClassName("presio");
        
        var numero = presios[pos].textContent.substring(1);
        
        return console.log(numero*2);
        
    }
    //Muestra el submenu
    
    function desplegar(){
        
        console.log("desplegar");
        var subMenu = document.getElementsByClassName("submenu")[0];
        var display = subMenu.style.display;
       
        if(display == "block"){
            subMenu.style.display = "none";
        }
        else{
            subMenu.style.display = "block";
        }
       
    }
    
    function seleccionarSeccion(id){
        
        var seccion = document.getElementById(id);
        
        return seccion;
    }
    
    
    var seccionCubos = document.getElementsByClassName("cubo3")[0];
    
    function desplegarCubo(){
        console.log("esconder");
        seccionCubos.style.display = "block";
        
    }
    
    seleccionarSeccion("cubos2").addEventListener("click", function(e){
        //desplegarCubo();
        cargarImg1(2);
    });
    
    seleccionarSeccion("cubos3").addEventListener("click", function(e){
        //desplegarCubo();
        cargarImg1(1);
    });
    
    seleccionarSeccion("cubos4").addEventListener("click", function(e){
        //desplegarCubo();
        cargarImg1(3);
    });
    
    seleccionarSeccion("cubosN").addEventListener("click", function(e){
        //desplegarCubo();
        cargarImg1(4);
    });
    
    seleccionarSeccion("formas").addEventListener("click", function(e){
        //desplegarCubo();
        cargarImg1(5);
    });
    
    
    
    
    //Evento para desplegar el menu
    var categoria = document.getElementById("categoria");
    
    categoria.addEventListener("click", function(e){
        
        desplegar();
    });
    //obtener divs
    var divCubo3 = document.getElementsByClassName("cubo")[0];
    var divCubo2 = document.getElementsByClassName("cubo5")[0];
    var divCubo4 = document.getElementsByClassName("cubo4")[0];
    var divMirror = document.getElementsByClassName("mirror")[0];
    var divContenedor = document.getElementsByClassName("contenedor")[0];
    var divCubosCon = document.getElementsByClassName("cubo3")[0];
    var divs = [divCubo3, divCubo2, divCubo4, divMirror];
    
    //Nombres de todos los cubos 3x3
    
    var nombre3 = ["Cubos Rubik YuXin 3x3 Blanco Unicorn", "Cubos Rubik YJ Moyu Guanlong Base Negra", "Cubos Rubik YJ Moyu Guanlong Pink", "Cubos Rubik Moyu MoFangJiaoShi MF3 3x3 Negro" ];
    
    //Nombre de todos los cubos 2x2
    
    var nombre2 = ["Cubos Rubik ShengShou 2x2 Base Blanca", "Cubos Rubik KungFu YueHun 2x2 Negro", "Cubos Rubik KungFu YueHun 2x2 Blanco", "Cubos Rubik Moyu Weipo 2x2 Base Negra"];
    
    //Nombre de todos los cubos 4x4
    
    var nombre4 = ["Cubo Rubik 4X4 GAN460 M Colored", "Cubos Rubik MoFangGe QiYi QiYuan 4x4 Negro", "Cubos Rubik Cyclone Boys 4x4 Speed G4 Colored", "Cubos Rubik KungFu CangFeng 4x4 Negro"];
    
    //Nombre de todos los cubos nxn
    
    var nombreN = ["Cubos Rubik Cyclone Boys 7x7 Colored", "Cubos Rubik Cyclone Boys 5x5 Colored", "Cubos Rubik Cyclone Boys 5x5 Base Negra", "Cubos Rubik MoFangGe WuShuang 5x5 Negro"];
    
    //Nombre de todos los cubos de formas espciales
    
    var nombreEs = ["Cubos Rubik Moyu Classroom Fisher Mirror Plata", "Cubos Rubik Moyu Classroom Axis Colored", "Cubos Rubik Moyu Classroom Wind Mirror Dorado", "Cubos Rubik Moyu Classroom Wind Mirror Plata"];
    
    
    function cargarImg1(tipo){
        
        divCubosCon.style.display = "flex";
    
        switch(tipo){
               
            case 1 : 
                divs[0].style.backgroundImage = "url(Recursos/Imagenes/YuXin3x3UnicornBlanco.png)";
                cambiarNombrePresio("name", "presio", nombre3[0], "$"+159);
                
                divs[1].style.backgroundImage = "url(Recursos/Imagenes/MoyuGuanLong3x3.png)";
                cambiarNombrePresio("name1", "presio1", nombre3[1], "$"+59);
                
                divs[2].style.backgroundImage = "url(Recursos/Imagenes/YJMoyuGuanlongPink.png)";
                cambiarNombrePresio("name2", "presio2", nombre3[2], "$"+69);
                
                divs[3].style.backgroundImage = "url(Recursos/Imagenes/CubosRubik.png)";
                cambiarNombrePresio("name3", "presio3", nombre3[3], "$"+55);
                break;
                
            case 2: 
        
                divs[0].style.backgroundImage = "url(Recursos/Imagenes/CubosRubikShengshou2x2.png)";
                cambiarNombrePresio("name", "presio", nombre2[0], "$"+140);
                divs[1].style.backgroundImage = "url(Recursos/Imagenes/CycloneBoys2x2.png)";
                cambiarNombrePresio("name1", "presio1", nombre2[1], "$"+150);
                divs[2].style.backgroundImage = "url(Recursos/Imagenes/KungFu2x2YueHunBlanco.png)";
                cambiarNombrePresio("name2", "presio2", nombre2[2], "$"+160);
                divs[3].style.backgroundImage = "url(Recursos/Imagenes/CubosRubikKungFu2x2.png)";
                cambiarNombrePresio("name3", "presio3", nombre2[3], "$"+145);
                break;
                
            case 3: 
        
                divs[0].style.backgroundImage = "url(Recursos/Imagenes/Cubos_Rubik_gan_460_4x4.png)";
                cambiarNombrePresio("name", "presio", nombre4[0], "$"+340);
                divs[1].style.backgroundImage = "url(Recursos/Imagenes/CubosRubikMoffanggeQiyuan4x4.png)";
                cambiarNombrePresio("name1", "presio1", nombre4[1], "$"+310);
                divs[2].style.backgroundImage = "url(Recursos/Imagenes/CycloneBoys4x4ColoredSpeedG4.png)";
                cambiarNombrePresio("name2", "presio2", nombre4[2], "$"+280);
                divs[3].style.backgroundImage = "url(Recursos/Imagenes/KungFu4x4CangFeng.png)";
                cambiarNombrePresio("name3", "presio3", nombre4[3], "$"+370);
                break; 
            
             case 4: 
        
                divs[0].style.backgroundImage = "url(Recursos/Imagenes/Cubos_Rubik_cyclone_7x7.png)";
                cambiarNombrePresio("name", "presio", nombreN[0], "$"+640);
                divs[1].style.backgroundImage = "url(Recursos/Imagenes/Cubos_Rubik_Cyclone_boys_5x5.png)";
                cambiarNombrePresio("name1", "presio1", nombreN[1], "$"+440);
                divs[2].style.backgroundImage = "url(Recursos/Imagenes/CubosRubikCycloneBoys5x5.png)";
                cambiarNombrePresio("name2", "presio2", nombreN[0], "$"+500);
                divs[3].style.backgroundImage = "url(Recursos/Imagenes/CubosRubikQiyiMFGXman6X6.png)";
                cambiarNombrePresio("name3", "presio3", nombreN[0], "$"+580);
                break;  
                
        default: 
            
                 divs[0].style.backgroundImage = "url(Recursos/Imagenes/CubosRubikMoyuWindMirror.png)";
                 cambiarNombrePresio("name", "presio", nombreEs[0], "$"+100);
                divs[1].style.backgroundImage = "url(Recursos/Imagenes/CubosRubikMoYuRed.png)";
                cambiarNombrePresio("name1", "presio1", nombreEs[1], "$"+250);
                divs[2].style.backgroundImage = "url(Recursos/Imagenes/Moyu_Mirror_Fisher_Dorado3-270x270.png)";
                cambiarNombrePresio("name2", "presio2", nombreEs[2], "$"+200);
                divs[3].style.backgroundImage = "url(Recursos/Imagenes/Moyu_Mirror_Fisher_Plata2-270x270.png)";
                cambiarNombrePresio("name3", "presio3", nombreEs[3], "$"+220);
                break;  
                
                
               }
    
        
    }
     
        
       function cambiarNombrePresio(idN, idP, nombre, presio){
           
           var texto1 = document.getElementById(idN);
           var texto2 = document.getElementById(idP);
           
           texto1.innerHTML = nombre;
           texto2.innerHTML = presio;
           
       }
  

       var nombreCubo = document.getElementById("name");
       var presioC = document.getElementById("presio");

       var tipo = document.getElementById("info1");
       var presioI = document.getElementById("info2");

       presioC.addEventListener('click', function(){
           
            var texto1 = this.textContent;
            var texto2 = nombreCubo.textContent;

            console.log(tipo.textContent + texto2);
            console.log(texto1.substring(1)*10);
            console.log(texto2);
            
       })

      


      
       
    
    
})

