//1-Variables y operadores
//a) Crear dos variables de tipo string y concatenarlas guardando el resultado en una tercera variable
var texto = "";
var palabra1 = "hola";
var palabra2 = "estas";

texto += palabra1;
texto += palabra2;

var textoConcat = palabra1.concat(" como ", palabra2);

alert(textoConcat);


//b)Crear dos variables de tipo string y sumar el largo de cada variable guardando el resultado en una 3ra variable

var texto = "";
var palabra1 = "hola";
var palabra2 = "estas";

texto += palabra1;
texto += palabra2;

var textoConcat = palabra1.concat(" como ", palabra2);

console.log(textoConcat.length)

