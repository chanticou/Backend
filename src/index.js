
//importo mi clase
// DESDE ACA LLAMO A LOS METODOS QUE CREA MI CLASE USERMANAGER
const UserManager = require('./userManager.js')

//ahora instancio mi clase
const newUser = new UserManager()


let user={
    id:'',
    name:'luki', 
    speciality: 'Partera', 
    available:true,
    telephone:16492789
}

 newUser.createUser(user).then(result=>console.log(result))

// newUser.findAllUsers().then(result=>console.log(result))

// newUser.findUser(3).then(result=>console.log(result))

// newUser.updateUsers(3,user).then(result=>console.log(result))

// newUser.deleteUser(5).then(result=>console.log(result)) 



