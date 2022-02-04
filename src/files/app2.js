const express= require('express')
const booksManager = require('./booksManager')

const newObject =new booksManager()


let book = {
    id:'',
    name: 'El abanico de seda',
    author:'Lisa Lee',
    publicationDate: '25/2/2002',
    editorial: 'Estrada',
    resume:'lorem jahdlkNKDBA DJAHDJAHD jjdkhs jagdjsf jadhkanfa  hdagdjabjfbj'
}


const app = express()

const connectedServer = app.listen(8080,()=>{
    console.log('Listening on port 8080')
}) 


//GET POST

app.get('/books',(request,response)=>{
    newObject.createBook(book).then(result=>response.send(result))
})