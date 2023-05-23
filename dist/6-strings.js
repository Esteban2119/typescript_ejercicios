"use strict";
//comillas simples 
let myName = 'Esteban';
let myName1 = 'Esteban-dido "2121" siempre';
//comillas simples dentro de comillas siemples no funciona
//let myname2 = 'Esteban-dido 'hola' siempre';
//comillas dobles
let myName3 = "comillas dobles";
let myName4 = "hola mundo 'soy esteban' dentro de comillas";
//esto no se debe hacer
//let myname5 = "hola "mundo" edc";
//usando bacticks:
let myName6 = 'esteban';
let texto = `
[esto es un string de pares :3 ]
{string dentro de un bacticks}
`;
let titulo = "Programacion visual";
let concatenar = `estamos en la materia de: ${titulo}`;
console.log(concatenar);
//se muestra todo los codigo en el terminal
console.log(myName, myName1, myName3, myName4, myName6, texto);
