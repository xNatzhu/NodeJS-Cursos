
const post = require("./post/post");
const {argv}  = require("./config/yargs");


let comando = argv._[0] // _ se basa el elemento llave que se llama de esa manera.
let valuePost

switch(comando){
    case "create":
        valuePost = post.create(argv.title)
        console.log("Creando...", valuePost);
        break
    case "read":
        valuePost = post.read(argv.id)
        console.log("Leyendo...", valuePost);
        break

    case "update":
        valuePost = post.update(argv.title, argv.id)
        console.log("Actualizando...", valuePost);
        break

    case "delete":
        valuePost = post.update(argv.title, argv.id)
        console.log("Eliminado...", valuePost);
        break

    default:
        console.log("No se encontro ningun comando...");
}



/*
node app create -t ""
-> fw - la hoja donde se encuentra - comando de crear - el parametro - contenido que se va crear.

 */