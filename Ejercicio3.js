//3. Arrays
//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[4]);
console.log(meses[10]);

//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log(meses.sort());

//Agregar un elemento al principio y al final del array (utilizar unshift y push)

console.log(meses.unshift("PrimerMes"));
console.log(meses);
console.log(meses.push("UltimoMes"));
console.log(meses);

//Quitar un elemento del principio y del final del array (utilizar shift y pop).

meses.shift();
console.log(meses);
meses.pop();
console.log(meses);


//Invertir el orden del array (utilizar reverse).

const meses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses2.reverse();
console.log(meses2)

//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log(meses2.join("-"))


//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

const meses3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses3.slice(4, 11))