//CREACION DE SERVIDOR REST -> SIRVEN PARA CONECTAR UN SERVICIO DONDE YO PUEDO ENVIAR Y RECIBIR INFORMACION.

//Generalmente este tipo de servidor rest siempre se envia la informacion o recibe en formato JSON.

const http = require("http");

http.createServer((request, response)=>{

    let product = {
        id:1,
        title:"Remera"
    }
    response.writeHead(200,{"Content-Type": "application/json"})//se va enviar un status que va ser 200 significa que todo esta correcto
    
    /* 
    Teoria de WRITE HEAD:
    
        writeHead es un método del objeto http.ServerResponse que se utiliza para establecer los encabezados de respuesta HTTP que se enviarán al cliente que realizó la solicitud. El método acepta dos parámetros:

        statusCode: un código de estado HTTP que indica si la solicitud se procesó correctamente o si se produjo algún error. Por ejemplo, el código 200 indica que la solicitud se procesó correctamente, mientras que el código 404 indica que la página solicitada no se encontró.

        headers: un objeto que contiene pares clave-valor que representan los encabezados de respuesta que se enviarán al cliente. Por ejemplo, el encabezado Content-Type se utiliza para indicar el tipo de contenido que se está enviando al cliente.

        En el ejemplo que compartiste, el método writeHead se utiliza para establecer el código de estado 200 y el encabezado Content-Type de la respuesta que se enviará al cliente. En particular, el encabezado Content-Type se establece en "application/json", lo que indica que la respuesta contiene datos en formato JSON.

        Una vez que se han establecido los encabezados de respuesta, se pueden enviar los datos de la respuesta utilizando los métodos response.write() y response.end(). El método write se utiliza para escribir los datos en el cuerpo de la respuesta, mientras que el método end se utiliza para finalizar la respuesta y enviarla al cliente.

        En resumen, writeHead es un método importante en Node.js que se utiliza para establecer los encabezados de respuesta HTTP que se enviarán al cliente.
    */


    response.write(JSON.stringify(product));
    response.end()
}).listen(3000)//puerto de servidor.
console.log("Escuchando puerto 3000 de app-rest");