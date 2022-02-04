//expres genera la configuracion para darle la infraestructura del servidor
//solo hay q ponerlo a escuchar
//Crea servidores y hay que ponerlo a escuchar
const express = require('express')

//importo mi clase
// DESDE ACA LLAMO A LOS METODOS QUE CREA MI CLASE USERMANAGER
const UserManager = require('../files/userManager')

//ahora instancio mi clase
const newUser = new UserManager()

const newUser1 = new UserManager()

let user={
    id:'',
    name:'Maria Riesgo', 
    speciality: 'Odontologa', 
    available:true,
    telephone:1172856274
}



//la const app va a aser igual a express pero ejecutado
const app= express()

//ahora le vamos a decir a nuestro serviro que se quede escuchando
//va a recibir dos argumentos para escuchar al servidor
//1 el puerto por convencion es 8080
const connectedServer= app.listen(8080,()=>{
    console.log('Listening on port 8080')
})


// request,response
// peticion cliente, repuesta servidorpe

app.get('/createUser',(req,res)=>{
  newUser.createUser(user).then(result=> res.send(result))})


// app.get('/products',(req,res)=>{
//     newUser1.findAllUsers().then(result=>res.send(result))
// })


app.get('/random',(req,res)=>{
    newUser1.randomUser().then(result=>res.send(result))
})


// const sentence= 'Hola mi nombre es chantal coutenceau'

// app.get('/phrase/:number',(req,res)=>{
//     let number= req.params.number
//     if(isNaN(number)) return res.status(404).send({error:'not a number'})
//     let param= parseInt(number)
//     res.send({response:sentence.charAt(param-1)})
// })

// app.get('/newPhrase/:phrase2', (req,res)=>{
//     let param= req.params.phrase2
//     if(isNaN(param)) return res.status(400).send({message:'error'})

//     let number= parseInt(param)
//     let array=sentence.split(' ')
//     res.send({word:array[number]})
// })