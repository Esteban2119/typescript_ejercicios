"use strict";
// funciones en TS
function crearPRoductoJson(title, createAt, size, stock) {
    return {
        title,
        createAt,
        size,
        stock
    };
}
const product1 = crearPRoductoJson("mochila de cuero", new Date('16/05/2023'), 'XL', 30);
const product2 = crearPRoductoJson("celular Xiaomi", new Date('01/01/2020'), 'L');
console.log(product1);
console.log(product2);
// RETORNO EN FUNCIONES
//FUNCIONES SIN RETORNO
function imprimirNombre(yourName) {
    console.log(`hola ${yourName}, bienvenidos a TS`);
}
let tuNombre = imprimirNombre("Esteban");
//FUNCIOINES CON RETORNO
function funcionConRetorno(a, b) {
    if (a > b) {
        return a; //retorno numero
    }
    else {
        if (b > a) {
            return b; //retorna nuemro
        }
        else {
            return `los numero ${a} y ${b} son iguales`;
        }
    }
}
const ejemploRetorno = funcionConRetorno(55, 55);
console.log(ejemploRetorno);
const ejemploRetorno1 = funcionConRetorno(55, 55);
console.log(ejemploRetorno1);
//OBJETOS EN FUNCIONES
function imprimirDatos(data) {
    console.log(`Tu nombre es ${data.username} y su email es ${data.email}`);
}
imprimirDatos({
    username: 'Esteban',
    email: 'estebandido2121444@gmail.com'
});
let userList = [];
userList.push({
    username: "Esteban",
    email: "estebandido@gmail.com"
});
userList.push({
    username: "Esteban",
    email: "estebandido@gmial.com"
});
