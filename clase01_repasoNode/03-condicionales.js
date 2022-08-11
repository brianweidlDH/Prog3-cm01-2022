
/* if(condicion){}

if(condicion){}else{}

if(condicion){}else if(condicion){}else{} */

// operadores ternarios
const autenticado = true;
const puedePagar = false;

let edad = 17;

//console.log( edad > 18 ? "Puede Ingresar" : "No puede Ingresar")
//console.log( autenticado ? "Esta autenticado" : "No esta autenticado")

let prueba = autenticado ? "Esta autenticado" : "No esta autenticado"
console.log(prueba)


console.log(autenticado && puedePagar ? "Si ambos" : "No puede")


console.log(autenticado ? puedePagar ? "Si puedo pagar" : "Si esta autenticado pero no puede pagar" : "No esta autenticado")

console.log( autenticado && "Si esta")
