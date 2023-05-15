//definir un array en lista

let myArray = [1, 2, 3, 4, 5, 6, 7, 8];

//metodo push para agregar un elemento al final

myArray.push(10);
console.log(myArray);

//no sepuede agregar un string en un array tipo number : myArray.push("10"):

let meses : ["Enero", "Febrero", "Mazo", "Abril", "Mayo", "Junio"];
// no se puede operar con datos tipo string: 
//meses.map(item => item * 2);

let multiplicacion = myArray.map(item => item * 2);
console.log(multiplicacion);

//definir array de vatios tipos de datos:

let mezclado: (number | string)[] = ["hola mundo", 12,3,4, "hello world"];

console.log(mezclado);

(() =>{
    let mezcla: (number | string | boolean | object | any | null)[] = [12,1,3,444, "string", "ejemplo", true, false,false]

    mezcla.push({});
    mezcla.push(null);
    mezcla.push([]);

    console.log(mezcla.push);
}
)();






