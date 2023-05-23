// especificacion de NULL para no ser reconocido como ANY

let null1 = null;
let und1 = undefined;

console.log(typeof(null1), typeof (und1));


let null2 = null;
let und2: undefined = undefined;

console.log(typeof(null2), typeof (und2));


//inicializar variables con datos vacios

let MyNull: number|null;

MyNull = 100;

let Myund : string|undefined;

Myund = "ejemplo de datos reemplazado";

console.log(Myund);