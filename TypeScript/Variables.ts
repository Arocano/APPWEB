let esnumero:boolean=true;
let escadena: boolean=true;
esnumero=false;

//Numero
let numero1:number=200;
let numero2:number;
numero2=20;
//Cadenas 

let nombre:String='Alejandro';
let apellido:String = 'Rocano';
let apodo:String;
apodo='Cheems';
let nombrecompleto=`"El nombre completo es:"${nombre}${apellido}${apodo}`;
console.log(nombrecompleto);

//Arreglos

let nombres:string[]=['Carlos','Paul','Jorge'];
nombres.push('Fernando');
console.log(nombres);
let nombres2:String[]=nombres.slice(2.3);
console.log(nombres2);
nombres2=nombres.splice(2);

//Tuplas

let tupla:[String,boolean]=['Software',true];

// Tipos de numerados
enum perfiles{Admin,User,Guest};
let user:perfiles=perfiles.Admin;
console.log(user);

//Void

function saludar():void{
alert('Hola Mundo');
}

//Null y Undefined
let Identificacion:undefined=undefined;
let Admin:null=null;
//tipos
let tipos:string|number|boolean;
//Funciones parametrizadas
function imprimirPersona(nombre:string,edad:number){
return{
    nombre:nombre,edad:edad
}
}
let persona1=imprimirPersona('Alejandro',20);
console.log(persona1);
function imprimirPersona2(nombre:string,edad?:number){
    return{
        nombre:nombre,edad:edad
    }
}
let persona2=imprimirPersona2('Alejandro');
console.log(persona2);

//Funciones flecha o lambda

const sumar = (valor1:number,valor2:number):number=>{
    return valor1+valor2;
}
console.log(sumar(2,5));

function mostrar(a:number,b:number,calcular:(valor:number)=>void):void{
    let resultado = a+b;
    calcular(resultado);
}
mostrar(2,5,(valor)=>{
    console.log(valor);
});
   


