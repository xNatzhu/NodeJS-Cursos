/*
EJECUTAR EL SCRIPT ES POR MEDIO DE LA CONSOLA.

node + nombre del archivo
*/


//console.log("Hola Mundo") //nuestro primer programa.

//En esta clase se vera basicamente en consola. Esto es cuando ejecutamos script por medio de una consola para que se ejecute cierta accion esto lo denominamos "cron"

//Actualizaciones de db, procesos, ect.



/*Si añadieramos "Alert" saltaria un error ya que es algo del navegador. Abra cierto tipos de codigos de js que se podra usar y otros no */






//REQUIRE.

const fs = require("fs") //requiere que se cargue algo, incluye en el script. Es lo mismo que cuando un js esta tomando una libreria, por ejemplo jquery y la añade. En este caso es similar toma una libreria a nivel sistema para poder utilizarlo en mi script.

//La diferencia entre require y import, es que si el import falla no falla el sitio en este caso si falla si falla el sitio.


/*
----------------------------------------------------------------------------------------------------------------------------------------------------
TEORIA MODULO FS:

En términos simples, el módulo "fs" en Node.js te permite trabajar con archivos y directorios en tu sistema de archivos. Puedes usarlo para leer y escribir archivos, crear y eliminar directorios, cambiar los permisos de los archivos y mucho más.

Tipos de metodos;
- 
1. fs.access(path[, mode], callback) - Comprueba si el usuario tiene permiso para acceder al archivo o directorio especificado en path. El parámetro mode especifica el tipo de acceso que se debe comprobar (lectura, escritura, etc.).

2. fs.readFile(file[, options], callback) - Lee el contenido del archivo especificado en file y devuelve los datos como un búfer o una cadena. Puedes especificar opciones como la codificación del archivo a través del objeto options.

3. fs.writeFile(file, data[, options], callback) - Escribe los datos especificados en data en el archivo especificado en file. Puedes especificar opciones como la codificación del archivo a través del objeto options.

4. fs.appendFile(file, data[, options], callback) - Agrega los datos especificados en data al final del archivo especificado en file. Puedes especificar opciones como la codificación del archivo a través del objeto options.

5. fs.rename(oldPath, newPath, callback) - Cambia el nombre del archivo o directorio especificado en oldPath al nombre especificado en newPath.

6. fs.unlink(path, callback) - Elimina el archivo o directorio especificado en path.

7. fs.mkdir(path[, options], callback) - Crea un nuevo directorio en la ruta especificada en path. Puedes especificar opciones como el modo de acceso a través del objeto options.

8. fs.rmdir(path, callback) - Elimina el directorio especificado en path. El directorio debe estar vacío antes de poder eliminarlo.

9. fs.readdir(path[, options], callback) - Lee los contenidos del directorio especificado en path y devuelve una lista de archivos y subdirectorios. Puedes especificar opciones como la codificación del archivo a través del objeto options.

10. fs.stat(path, callback) - Devuelve información sobre el archivo o directorio especificado en path, como el tamaño del archivo y la fecha de creación.

Estos son algunos de los metodos, para explorar mas ir a: https://nodejs.org/api/fs.html

*/

//Example:

fs.writeFile("archivo.txt","Hola mundo esto es un texto que se va generar en el archivo .txt",(error)=>{
    if(error){
        throw error
        //throw significa que deje de ejecutarse apenas vea el error.
    }
    console.log("De lo contrario se guarda el archivo.");
})

//El require significa que esta requiriendo de un modulo o un archivo de configuracion.



//--------------------------------------------------------------------------------------------------------------------------------------------


