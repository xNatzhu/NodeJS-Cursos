//EXPRESS

const express = require("express");

const app = express();

const port = process.env.PORT || 3000 

const hbs = require("hbs")
/*El process es un objeto que este objeto tiene varias cosas, una de ellas es ENV.

.env -> son las variables de entorno, que tiene la inf de ciertas variables que dependiendo del entorno van a tener un valor o otro.

port -> el valor del puerto.

Es decir que env va buscar alguna variable de entorno llamada PORT y si llega existir utilizara ese valor, de lo contrario en el caso que no se exista se asignara un nuevo valor.
*/





app.use(express.static(__dirname + "/public")); 

//.use -> va estar usando 

//(express.static) -> Esta diciendo que va estar usando elementos estaticos no se van procesar, solo se van a mostar

//__dirname -> Hace referencia al directorio donde se esta ejecutando el archivo es decir este. + "/PUBLIC" -> lo que estoy diciendo desde el directorio actual, yo quiero que estes utilizando la carpeta public como directorio de elementos estaticos.


/*

CONSEJO: Si tenemos qarchivos estaticos, no se deben llamar igual que las rutas ya que primeramente se va cargar el archivo estatico y luego las respectivas rutas. El archivo estatico siempre gana porque esta cargado desde el inicio.
*/


app.set("view engine","hbs")
/* 
"view engine" le indica a Express qué motor de plantillas se utilizará para renderizar las vistas en la aplicación web. En este caso, "hbs" se utiliza como motor de plantillas.

"Hbs" (Handlebars) es un motor de plantillas que permite la creación de vistas dinámicas en la aplicación web. Permite a los desarrolladores escribir plantillas que pueden ser reutilizadas y renderizadas con diferentes datos.


*/
/*
app.get("/index",(req, res)=>{

    let product = {
        id:1,
        title:"Remera"
    }
    res.send(product) 
    // le asignamos el valor de la ruta "/" en el get, y le colocamos que en el res le va estar mostrando el usuario lo que añadamos en el send

    // En express .end() que agregamos en el http de node aca no lo usamos. Ya que por defecto nos lo agrega.


})
*/


hbs.registerPartials(__dirname + "/views/partials")

//registerPartials -> registar parciales, serian partecitas del sitio / ejemplo: Yo tengo un menu, lo que hago es ponerlo en un archivo aparte asi si lo quiero actualizar solamente se actualizara en un solo lugar y no debo ir pagina por pagina. Y lo que hace handlebars es agarrar ese pedacito que esta aparte y incluirlo en todas las vistas.



app.get("/home",(req, res)=>{
    res.render("home",{
        nombre:"Agustin"
    }) //De esta manera esta renderizando el elemento. Los HBS se les puede pasar parametros que serviviran para hacer dinamico un sitio por medio de los mostachos que serian "{{}}".
    //se le agrega el archivo que va renderizar, y si se desea añadir parametro se hace una ",".
    //DATO para los archivos .hbs se debe hacer una carpeta llamada "views"

    /*
    Handlebars es un motor de plantillas (templating engine) para JavaScript que permite la creación de vistas dinámicas en aplicaciones web. Es un proyecto open-source que está disponible en GitHub y es mantenido por la comunidad.
    Handlebars utiliza sintaxis de plantillas para generar vistas HTML y otros formatos de texto a partir de datos proporcionados por la aplicación.

    */

})
app.post("/",(req, res)=>{

    res.send("Abriendo desde post.") 
    // le asignamos el valor de la ruta "/" en el get, y le colocamos que en el res le va estar mostrando el usuario lo que añadamos en el send

    // En express .end() que agregamos en el http de node aca no lo usamos. Ya que por defecto nos lo agrega.


})



app.listen(port,()=>{ //el listen viene siendo donde se va estar enviando la informacion es decir en que puerto.

    console.log("Se esta escuchando el porto http://localhost"+port);
})