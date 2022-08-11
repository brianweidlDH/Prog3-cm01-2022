/* const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

console.log(meses) */


/* 
for(let i=0; i<meses.length; i+=1){
    console.log(meses[i])
} 
*/

/* 
for(let item of meses){
    console.log(item)
} 
*/

//const valores = [2,4,6,8,10]

/* const resultado = meses.map((mes)=> `<p>${mes}</p>`)
console.log(resultado) */


/* const resultado = valores.map(numero=> numero*2)
console.log(resultado)
 */
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

/* const masIva = carrito.map(producto => `
    <p>${producto.nombre}</p>
    <p>$ ${producto.precio*1.21}</p>
`) */

//console.log(masIva)


let filtrado = carrito.filter(producto => producto.precio > 400)
console.log(filtrado)

let filtrado1 = carrito.filter(producto => producto.nombre === 'Celular')
console.log(filtrado1)

let filtrado2 = carrito.filter(producto => producto.nombre !== 'Laptop')
console.log(filtrado2)
