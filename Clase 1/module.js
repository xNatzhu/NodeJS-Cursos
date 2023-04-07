/*
Para encapsular por medios de modulos se debe realizar de la siguiente manera:

Basicamente en los modulos. El proyecto viene integrado dentro una seccion llamada "module". En lo cual basicamente donde dice "exports" voy poder estar vinculando todo los modulos que quiero ir exportando para luego re utilizarlo.

Para definir la exportacion, se realiza mediante:

se inicializa con module + exports

const hola = "Hola mundo".

module.exports = { -> se realiza un objeto para integrar todo lo que vamos a exportar

    hola, -> al ser propiedad y valor el mismo, ya que se exporta la const agregamos solamente el nombre.
}


Y para importarlo en el lugar se realiza mediante

const {hola} = require("./ruta-o-archivo.js")
 
*/

