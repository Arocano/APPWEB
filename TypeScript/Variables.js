"use strict";
let esnumero = true;
let escadena = true;
esnumero = false;
//Numero
let numero1 = 200;
let numero2;
numero2 = 20;
//Cadenas 
let nombre = 'Alejandro';
let apellido = 'Rocano';
let apodo;
apodo = 'Cheems';
let nombrecompleto = `"El nombre completo es:"${nombre}${apellido}${apodo}`;
console.log(nombrecompleto);
//Arreglos
let nombres = ['Carlos', 'Paul', 'Jorge'];
nombres.push('Fernando');
console.log(nombres);
let nombres2 = nombres.slice(2.3);
console.log(nombres2);
nombres2 = nombres.splice(2);
//Tuplas
let tupla = ['Software', true];
// Tipos de numerados
var perfiles;
(function (perfiles) {
    perfiles[perfiles["Admin"] = 0] = "Admin";
    perfiles[perfiles["User"] = 1] = "User";
    perfiles[perfiles["Guest"] = 2] = "Guest";
})(perfiles || (perfiles = {}));
;
let user = perfiles.Admin;
console.log(user);
//Void
function saludar() {
    alert('Hola Mundo');
}
//Null y Undefined
let Identificacion = undefined;
let Admin = null;
//tipos
let tipos;
//Funciones parametrizadas
function imprimirPersona(nombre, edad) {
    return {
        nombre: nombre, edad: edad
    };
}
let persona1 = imprimirPersona('Alejandro', 20);
console.log(persona1);
function imprimirPersona2(nombre, edad) {
    return {
        nombre: nombre, edad: edad
    };
}
let persona2 = imprimirPersona2('Alejandro');
console.log(persona2);
//Funciones flecha o lambda
const sumar = (valor1, valor2) => {
    return valor1 + valor2;
};
console.log(sumar(2, 5));
function mostrar(a, b, calcular) {
    let resultado = a + b;
    calcular(resultado);
}
mostrar(2, 5, (valor) => {
    console.log(valor);
});
