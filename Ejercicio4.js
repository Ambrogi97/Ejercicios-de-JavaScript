//4. If Else

//Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”. [utilizar alert() ]

//const num = Math.random(0, 1);
//if(num >= 0.5){
//    alert("Greater than 0,5")
//}else {
//    alert("Lower than 0,5")
//}
//Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
//“Menor” si la edad es menor a 18
//“Mayor” si la edad es mayor o igual a 18 Y menor que 65
//“Jubilado” si la edad es mayor o igual que 65.

const num2 = Math.random()*(100);
console.log(num2)

if(num2 < 18){
    alert("menor")
}if(num2 >=18 || num2 < 65){
    alert("mayor")
}if(num2>65){
    alert("jubilado")
}