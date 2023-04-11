const fs = require("fs");

let listPost = [];

const create = (title)=>{
    let post = {
        id:1+listPost.length,
        title,
    }

    listPost.push(post);
    save()
    return post
}

const save = ()=>{
    let json = JSON.stringify(listPost) //trasforma en un json que va hacer un array de post.
    fs.writeFile("post/db.json",json,(error)=>{
        if(error){
            throw new Error("No se pudo guardar el archivo")
        }
    })
}

const load = ()=>{
    listPost = require("./db.json"); //Yo puedo requerir un archivo que sea json, como sea json se asignan un array al objeto.
}

const read = (id)=>{
    try { //en el caso que eliminemos el archivo db.json, necesitamos generarlo de nuevo para eso mismo lo haremos en save. Si el archivo existe dara try, en la cual se ejecutara la funcion de load que ira almacenando los datos sin sobreescribir los otros.
        load()
    } catch (error) {
    }
    let post = listPost.find(post => post.id == id)
    return post
}

const update = (title, id)=>{
    try { //en el caso que eliminemos el archivo db.json, necesitamos generarlo de nuevo para eso mismo lo haremos en save. Si el archivo existe dara try, en la cual se ejecutara la funcion de load que ira almacenando los datos sin sobreescribir los otros.
        load()
    } catch (error) {
    }
    let index = listPost.findIndex(post=>post.id== id) //find index busca la posicion de un elemento dentro del array. En el caso que no se encuentre, agregara -1.

    if(index !== -1){
        listPost[index].title = title;
        save()
        return listPost[index]
    }

}

const destroy = (title, id)=>{
    try { //en el caso que eliminemos el archivo db.json, necesitamos generarlo de nuevo para eso mismo lo haremos en save. Si el archivo existe dara try, en la cual se ejecutara la funcion de load que ira almacenando los datos sin sobreescribir los otros.
        load()
    } catch (error) {
    }
    let index = listPost.findIndex(post=>post.id== id) //find index busca la posicion de un elemento dentro del array. En el caso que no se encuentre, agregara -1.

    if(index !== -1){
        listPost.splice(index, 1)
        save()
        return true 
    }

}




module.exports = {
    create,
    read, 
    update,
    delete:destroy
}

