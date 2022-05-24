//2. Strings
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
const nombre = "juan cruz ambrogi";

const NombreNuevo = nombre;

console.log(NombreNuevo.slice(0,5));

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
const nombre2 = "sebastian";

const NombreMayuscula = nombre2;

console.log(NombreMayuscula.charAt(0).toUpperCase() + NombreMayuscula.slice(1));

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

const espacio = "lucas esteban";

console.log(espacio.indexOf(" "));