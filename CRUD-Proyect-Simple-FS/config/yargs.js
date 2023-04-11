const argv = require("yargs")
.command("create","Crea un post",{
    title:{
        demand:true, // es decir que el titulo va ser obligatorio.
        alias:"t", //el alias es la forma mas corta de llamar al comando es decir en este caso -t.
        description:"Titulo del post." // esto nos permite que con la ayuda nos diga que parametros esta recibiendo.
    }
})
.command("read", "Lee un post",{
    id:{
       demand:true,
       description:"Id del post", 
    }
})
.command("update", "Actualiza un post",{ //Los comandos ya se hacen automatico, pero lo que hacemos aca es añadir de forma explicita como se llama ese comando, que parametros va recibir, que opciones va tener. 

    //La función "command" es necesaria para crear herramientas de línea de comandos en Node.js y definir la funcionalidad que se ejecutará en función de los argumentos proporcionados por el usuario en la línea de comandos.

    title:{
        demand:true, // es decir que el titulo va ser obligatorio.
        alias:"t", //el alias es la forma mas corta de llamar al comando es decir en este caso -t.
        description:"Titulo del post." // esto nos permite que con la ayuda nos diga que parametros esta recibiendo.
    },
    id:{
        demand:true,
        description:"Id del post", 
     }
})

.command("delete", "Elimina un post",{ 

    title:{
        demand:true, // es decir que el titulo va ser obligatorio.
        alias:"t", //el alias es la forma mas corta de llamar al comando es decir en este caso -t.
        description:"Titulo del post." // esto nos permite que con la ayuda nos diga que parametros esta recibiendo.
    },
    id:{
        demand:true,
        description:"Id del post", 
     }
})

.argv;
console.log(argv);

module.exports = {
    argv,
}