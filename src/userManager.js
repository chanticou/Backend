//MODULO EXTERNO YA PRE PROGRAMADO
const fs = require('fs') 

//METODO MAS IMPORTANTE DE UNA BASE DE DATOS => ENCONTRAR A LOS USUARIOS

//Simulacro base de datos
// const users=[{
//     id:''                   (unique)  
//     name:'Alan Carrillo', (requiered)
//     speciality: 'Biologia', (requiered)
//     available:true,
//     telephone:1567245679
// },
// {
//     id:''                   (unique)  
//     name:'Mariana Vela', (requiered)
//     speciality: 'Pediatra', (requiered)
//     available:false,
//     telephone:1574925498
// },
// {
//     id:''                   (unique)  
//     name:'Rodrigo Arana', (requiered)
//     speciality: 'Odontologia', (requiered)
//     available:true,
//     telephone:1575892546
// }]
const pathUsers='./files/users.json'


//EL USERMANAGER VA A TENER TODOS LOS METODOS PARA GETIONAR USUARIOS  Y YO LOS VOY A LLAMAR DESDE EL IDNEX
class UserManager{
    createUser = async (user) =>{
        //PRIMERO VOY A VALIDAR
        if(!user.name || !user.speciality) return {status:'error', error:'missing data'}

        try{
            if(fs.existsSync(pathUsers)){
                //le pregunto a mi fs si existen usuarios en la ruta que le estoy pasando
                //En caso de que el archivo si existe, obtengo la informacion
                let data = await fs.promises.readFile(pathUsers, 'utf-8', null, 3)
                let users= JSON.parse(data)
                //la sintaxis a continuacion, te trae el ultio elemento agregado del arreglo
                let id= users[users.length-1].id +1
                user.id=id
                users.push(user)
                await fs.promises.writeFile(pathUsers, JSON.stringify(users, null, 3))
                return{status:'success', message:'New user created'}
                   
            }else{
                //Si no existen le voy a asignar el id N1 al primero usuario
                user.id=1
                await fs.promises.writeFile(pathUsers, JSON.stringify([user], null, 3))
                return {status:'success' , message:'User created'}
            }

        }catch(error){
            return {status:'error', message:'error'}
        }
    }

    findAllUsers= async ()=>{
        if(fs.existsSync(pathUsers)){
            let data= await fs.promises.readFile(pathUsers, 'utf-8', null, 3)
            let users= JSON.parse(data)

            return{
                message:'Succes',
                finfUsers:users
            }
        }
    }


    findUser= async (id)=> {
        if(fs.existsSync(pathUsers)){
            let data= await fs.promises.readFile(pathUsers, 'utf-8', null, 3)
            let users= JSON.parse(data)
            let find=users.find(user=>user.id===id)
            return {
                message:'User find',
                user:find
            }
        }else{
            return{
                error:'error',
                message:'User not found'
            }
        }
    }


    updateUsers= async(id,updateNewUser)=>{
        if(fs.existsSync(pathUsers)){
            let data= await fs.promises.readFile(pathUsers,'utf-8',null,3)
            let users= JSON.parse(data)

            let newUser =users.map((user)=>{
                if(user.id === id){
                    return updateNewUser
                }else{
                    return user
                }
            })

            await fs.promises.writeFile(pathUsers, JSON.stringify(newUser,null,3))
            return{ status:'succes',
                    message:'Update user'}

        }
    }

    deleteUser = async (id)=>{
        if(fs.existsSync(pathUsers)){
            let data= await fs.promises.readFile(pathUsers, 'utf-8', null, 3)
            let users= JSON.parse(data)

            let deleteUserFilter= users.filter((user => user.id!==id))

            await fs.promises.writeFile(pathUsers, JSON.stringify(deleteUserFilter,null,3))
            return {
                status:'succes',
                message:'Delete User'
            }
    
            
        }

    }
}

module.exports = UserManager;