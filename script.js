// Primer clase de JavaScript

/* 
Esto es un comentario 
de bloque
En general se lo utiliaz en comentario de cabecera 
*/

// Esto es un comentario de linea

// Variables en js.
// 1- Declaracion e inicializacion de las variables, 3 palabras reservadas: let, var, const

let num1;
let num2;
let txt;
// Se declaran siempre 1 sola vez, no está permitida la redeclaración. 

// 2- Inicializacion 
num1 = 10;
num2 = 5.5;
txt = "Fulana"; 
txt = 15; // Reasignación de la variable, en este caso es mala práctica porque cambiamos el tipo de la variable
text = "Fulano"; //

// 3- Instrucciones de salida
// Salida por consola consola.log(); solo para desarrolladores, no lo ve el usuario de la pagina
console.log("El valor de la variable num1 es: " + num1); // El + se puede cambiar por la coma , pero se usa aveces para otra cosa, ademas agrega un espacio en blanco entre los textos,  
console.log("El valor de la variable num2 es: " + num2);    // en lenguajes mas duros el concatenador de parametros es la coma , por eso no lo utilizamos aca
console.log("El resultado de la suma es: "+num1+num2); // Esto esta mal porque da como resultado la concatenacion 105.5
console.log("El resultado de la suma es: "+(num1+num2)); // Ahora si está bien

//Salida por alert();, herramientas que da el navegador, como alertas. Es mas orientado a que lo vea el usuario. Lo comento porque es molesto
//alert("El resultado de la suma es: "+(num1+num2));

//Salida por documento. document.write(); Se puede usar lineas de codigo html, se carga entre comillas dobles siempre.
document.write("<h1>Hola mundo desde JavaScript!</h1>");
document.write("<p>El resultado de la suma es: </p>"+(num1+num2)); 

// Variables del tipo var, tiene mucha flexibilidad (no esta tan bueno eso). Pero su ventaja es que son globales.
console.log(var1); // Principio de hoisting
console.log("Luego del hoisting");
var var1 = 50; // Por convención toda variable se escribe siempre con minuscula.


// Constantes del tipo const, no pueden variar. 
const PI = 3.14; // Por convención los nombres con mayuscula son CONSTANTES.
//PI = 7; // Esto da error porque no se puede reasignar 
