/* Operadores en JS */
 /* Utilizaremos los operadores en JS 
 * desarrollando los siguientes ejemplos:
 * Ejemplo de operaciones aritmeticas
 * Ejemplo de operadores de autoasignación
 * Ejemplo de operadores incrementales
 * Ejemplo de operadores relacionales
 * Ejemplo de operadores lógicos
*/

// 1- Declaración e inicialización de las variables..
let a = 15;
let b = 3;

// Ejemplos de operaciones aritmeticas
document.write("<h2>Operadores aritméticos</h2>");
document.write("<p>La suma entre a y b: " + (a+b)+ "</p>");
document.write("<p>La resta entre a y b: " + (a-b)+ "</p>");
document.write("La multiplicación entre a y b: " + (a*b)+ "<br>");
document.write("<p>La división entre a y b: " + (a/b)+ "</p>");

// Ejemplo de operadores de autoasignación
document.write("<h2>Operadores de autoasignación</h2>");
document.write("<p>a vale: "+a+"</p>");
document.write("<p>La autoSuma de a y 8: " + (a += 8) + ".</p>");
document.write("<p>Nuevo valor de a: " + a + ".</p>");
document.write("<p>La autoResta de a y 7: " + (a = a-7) + ".</p>");
document.write("<p>La autoMultiplicación de a y 8: "+(a*=8)+".</p>");
document.write("<p>La autoMultiplicación de a por a: "+(a*=a)+".</p>");
document.write("<p>La autoDivisión de a por 10000: "+(a/=10000)+".</p>");
document.write("<p>Nuevo valor de a: " + a + ".</p>");

// Ejemplo de operadores incrementales unitarios.
// a = a + 1; a++; ++a;
a=10; // Reasignamos el valor de a para trabajar con enteros.
document.write("<h2>Operadores incrementales unitarios</h2>");
document.write("<p>a incrementado ++a es: "+(++a)+"</p>");
document.write("<p>a incrementado a++ es: "+(a++)+"</p>");
document.write("<p>a vale: "+a+"</p>");

// Ejemplo de variables y operadores lógicos.
// Declaración de inicialización de variables lógicas.
let v = true;
let f = false;

// Operadores relacionales (de comparación)
console.log(3<10);
console.log(123==="123");       // === Exactamente igual. Cuenta valor y tipo.
console.log(123 == "123");      // ==  Solo igual en valor. No importa el tipo.
console.log(123 === 123.0);     // 
