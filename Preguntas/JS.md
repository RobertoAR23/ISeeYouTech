1. Explica que es una función callback y provee un ejemplo simple
   Una función callback es una función que se pasa como argumento a otra función y se ejecuta después de que se completa una operación. Se utilizan comúnmente en programación asincrónica.

function saludar(nombre, callback) {
const mensaje = `Hola, ${nombre}!`;
callback(mensaje);
}

function mostrarMensaje(mensaje) {
console.log(mensaje);
}

saludar('Roberto', mostrarMensaje);

2. Como revisarías si una variable es un arreglo o no:
   var arrayList = [1, 2, 3];
   console.log(Array.isArray(arrayList));

3. Menciona algunos tipos de datos soportados por JS
   JavaScript soporta varios tipos de datos: primitivos como números, cadenas de texto, booleanos, indefinido, nulo. También incluye objetos, que abarcan objetos, arreglos y funciones.

4. ¿Cuáles son las maneras de declarar una variable en JS?
   var: declaración de variable con alcance de función.
   let: declaración de variable con alcance de bloque.
   const: declaración de variable de solo lectura.

5. ¿Cual es la diferencia entre local storage y session storage?
   Local Storage: Los datos persisten incluso después de cerrar el navegador. Se almacenan indefinidamente hasta que se eliminan.
   Session Storage: Los datos se mantienen solo durante la sesión del navegador. Se eliminan al cerrar la pestaña o el navegador.

6. ¿Cuál es la diferencia entre los operadores ‘==’ y ‘===’ ?
   ==: Compara los valores de dos variables, aquí por ejemplo
   ===: Compara tanto el valor como el tipo de las variables
   por ejemplo en el primer caso '' == 0 daría "true" ya que una cadena vacia en ese contexto la tomaria como un 0
