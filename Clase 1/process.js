
//Process

//ARGV
/*
A los procesos se le pasan parametros que te permite actualizar los datos.

lE PODEMOS AGREGAR --PROPIEDAD=VALOR lo que va permitir es que en el array del process.argv lo que haga sera almacenar esa propiedad, o modificar ese valor dentro del array que se va encontrar en el process argv 

EJEMPLO: --nombre="Juan".


 */
console.log(process.argv)

let parametro = process.argv[2]; //busca el atributo del tercer elemento dentro del array de argv.

let cadenas = parametro.split("="); //separa en una array nueva en dos. Igual va ser el separador

let nombre = cadenas[1]; //en la lista nueva queremos el segundo elemento que en nuestro caso seria el valor.

console.log(nombre)
/*
El objeto process es un objeto global en Node.js que proporciona información y control sobre el proceso en ejecución. El objeto process tiene una gran cantidad de propiedades y métodos que permiten interactuar con el proceso de Node.js, incluyendo:

process.argv: un arreglo que contiene los argumentos de la línea de comando que se pasaron al script de Node.js actual.

process.env: un objeto que contiene las variables de entorno del sistema.

process.exit(): un método para terminar el proceso de Node.js con un código de salida específico.

process.cwd(): un método que devuelve el directorio de trabajo actual del proceso.

process.pid: una propiedad que devuelve el ID del proceso actual.

process.platform: una propiedad que devuelve la plataforma en la que se está ejecutando Node.js.

process.stdin, process.stdout, process.stderr: flujos de entrada y salida estándar para el proceso.

process.nextTick(): un método para programar una función para que se ejecute en la próxima iteración del bucle de eventos de Node.js.

El objeto process también proporciona eventos que permiten a los desarrolladores responder a ciertas acciones del sistema, como exit (cuando el proceso se está cerrando), uncaughtException (cuando se lanza una excepción no capturada) y SIGINT (cuando se recibe una señal Ctrl-C).

En resumen, el objeto process es una parte fundamental de Node.js que proporciona información y control sobre el proceso en ejecución, lo que permite a los desarrolladores interactuar con el sistema operativo y construir aplicaciones escalables y robustas.


*/