# Algorithms-unit-test

- El objetivo de este repositorio es crear un programa, al cual podamos aplicarle pruebas unitarias para validar su funcionamiento.

- Se escribió un algoritmo el cual tiene el fin de, dado un array de entrada, devolver la máxima suma posible de números consecutivos que se puede obtener, o , en su defecto, el número máximo del array si este es mayor a cualquier suma obtenida.

- Se debe tomar en cuenta que, si en un punto de la ejecución, sumar el total acumulado con el siguiente da un valor menor al valor actual acumulado, entonces se debe reiniciar en cero el valor acumulado, puesto que el fin es obtener la suma más alta posible de números consecutivos y un número negativo afectaría esta suma máxima.

Algunos ejemplos de esto son: 

- [-10, -1, 5, 6, -2, 8, -4] => el cual esperamos un 11 como respuesta, ya que la máxima suma se obtiene sumando 5 y 6 (11).

[4, -6, -9, -1, 8] => el cual debe devolver 8 porque 8 es el número máximo del array y ninguna suma de 2 elementos consecutivos da un número más alto que 8.

- [4, 9, 1, -5, 1, 6, 7, 1 ,-6] => el cual debe devolver 15, ya que sumar los 4 positivos consecutivos (1,6,7,1) resulta en un 15, que sería la suma máxima posible.

- Este algoritmo fue hecho en TypeScript, usando vitest como entorno de pruebas unitarias.

## En cuanto a las pruebas unitarias:

- Se encuentran en el archivo llamado intex.test.ts

Hay cuatro casos de pruebas creados que cubren los siguientes escenarios:

- Cuando el array de entrada no tiene elementos
- Cuando el array de entrada tiene solamente un elemento
- Cuando el array de entrada tiene pocos elementos mezclados entre negativos y positivos (más de 1)
- Cuando el array de entrada contiene grandes cantidades de elementos y son todos positivos (miles y millones) 

Para poder ejecutar las pruebas, seguir los siguientes pasos:

- Clonar el repositorio con git clone
- Ejecutar npm install dentro del directorio del proyecto
- Ejecutar npm run test para poder correr las pruebas

Ahí se podrá ver los resultados