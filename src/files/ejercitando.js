


let obj={}

for(number=0; number <= 20000; number++){

    let random = Math.floor(Math.random()*20)
    
    if(obj[random]){
        obj[random]++
    }else{
        obj[random]=1
    }
}
console.log(obj)

// Object.values() => te devuelve todos los valores de un objeto   numero:valor

let suma= Object.values(obj)
console.log(suma)
//1 necesito un acumulator, un numero a acumular y el segundo valor va a ser el valor actual
//current va a agarrar el primer valor y lo mete en el acumulador, el segundo valor y lo mete,
//los itera y los mete en el acumulador
let reduceSuma= suma.reduce((accumulator, current)=>accumulator+current,0)
console.log(reduceSuma)




const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

productos.forEach(product=>{
    let names=product.nombre.concat(' , ')
    console.log(names)
})

let total= productos.reduce((accumulator, object)=>accumulator+object.precio,0)
console.log(total)




