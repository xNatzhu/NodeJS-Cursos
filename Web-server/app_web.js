//SERVIDOR WEB - CREACION  - MUESTRA UN SITIO WEB 

const http = require("http");

http.createServer((request, response)=>{//Create server crea un servidor, y dentro del create vamos a tener dos parametros, y dentro de los parametros, se va ejecutar una funcion anonima
    //request -> toma datos.
    //response -> es para responder es decir, lo que le voy a mostrar el usuario cuando ingresa a mi sistema.


    response.write("Hola mundo") //este hola mundo va estar mostrandole en el sistema al usuario.

    

    response.end()// el .end lo que hace es que toda la informacion se finalice y se envie al usuario. Si no le ponemos el end, no nos estara mostrando nada.


}).listen(3000)//aca le vamos especificar a que puerto esta yendo, es decir en que servidor esta funcionando. Generalmente se utiliza puerto 3000.

console.log("Escuchando puerto 3000");