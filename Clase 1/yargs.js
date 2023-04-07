
/*npm install yargs -> nos sirve para construir parametros desde la consola. Es un paquete que sirve para produccion.

yargs nos sirve para construir esos parametros, por ejemplo supongamos que agregamos en la consola --nombre:"juan"
En process.argv nos devuelve una lista. En este caso nos devuelve un objeto que tiene "el atributo con su valor agreado", "el nombre del archivo"

Supongamos que queremos buscar apellido, podemos hacerlo mediante


ejemplo: const argv = require("yargs").argv

 
Tambien con la libreria YARGS nos permite podes crear comandos.

 const argv = require("yargs")
 .command("saludar","guardar hola + nombre",{
    nombre:{
        demand:true,
        alias:"n" -> pueden tener un alias, es decir la forma mas corta de invocar al comando.
    }
 })
 .argv */