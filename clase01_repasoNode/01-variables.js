/* 
let str = ""
str = "Bienvenidos a Programacion III"
console.log(str)
console.log(typeof str)
console.log(str + " es de tipo " + typeof str)
console.log(`${str} es de tipo ${typeof str}`)

let num = 0
num = 5
console.log(num)
console.log(typeof num)
console.log(num + " es de tipo " + typeof num)
console.log(`${num} es de tipo ${typeof num}`)

let llueve = false;

console.log("Empezo a llover")
llueve = true 
*/

/* console.log("Colecciones de datos Arrays")

const arr = [];
console.log(typeof arr)

arr.push('Enero') // --> 0
arr.push('Febrero') // --> 1
arr.push('Marzo') // --> 2
arr.push('Abril') // --> 3
arr.push('Mayo') // --> 4
arr.push('Junio') // --> 5




//arr = ["Enero"]
console.log(arr) 
console.log(arr[0])



console.log(arr.length)
console.log(arr[arr.length - 1])

arr.pop()
console.log(arr)

 */

const obj = {};
console.log(typeof obj)

//obj = {id: 5}

 obj.id = 1;
obj.nombre = 'Teclado Gamer'
obj.precio = 50000,
obj.unidad = 'u$s'

/*


console.log(obj)

console.log(obj.unidad)
console.log(obj["precio"]) 
*/

const persona = {
    nombre: "Adrian",
    hijos: ["lucas", "agustin", "kiara", "daiana"]
}

console.log("Array de objetos")

const productos = [
    {id: 2, nombre: "fideos"},
    {nombre: "pan"},
    {},
    obj
]

for(let item of productos){
    console.log(item.nombre)
}
