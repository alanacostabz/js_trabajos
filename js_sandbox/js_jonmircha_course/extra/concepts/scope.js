/*
  SCOPE
    - el contexto actual de ejecución
    - es lo que le da significado a las variables
    - determina el conjunto de variables que podemos acceder desde una línea de código
    - https://developer.mozilla.org/es/docs/Glossary/Scope

    - decimos que JS tiene un SCOPE LÉXICO (lexical scoping) que significa que el scope de cada variable se determina 
      leyendo el código del programa, sin ejecturarlo, tabien a este modelo se le conoce como SCOPE LÉXICO (lexical scoping)
      que significa que el scope de cada variable se determina leyendo el código del programa, sin ejecutrarlo

    - diferencias entre CONTEXTO y CONTEXTO DE EJECUCIÓN
      - CONTEXTO: el valor que tiene la variable this en algún momento de la ejecución. cual es el objeto que está ejecutando
        una función
      - CONTEXTO DE EJECUCIÓN: esto es cuando cuando hablamos de scope (de lo que le da significado a las variables)

    - TIPOS DE SCOPE EN JS:
      - SCOPE GLOBAL
        - pueden ser accedidas desde cualquier lugar de nuestro programa
        - variables declaradas fuera de toda función o bloque de código
        - sin importar si las declaramos con var, let o const
        - estan en memoria durante toda la ejecución del programa

      - SCOPE LOCAL
        - solo se pueden acceder desde una parte de nuestro programa
          - existen 2 tipos
            1. SCOPE DE FUNCIÓN
              - accesibles dentro de toda la función, pero no fuera de la misma
              - variables declaradas con var
            2. SCOPE DE BLOQUE
              - accesibles dentro de todo el bloque, pero no fuera del mismo
        - están en memoria durante la ejecución de la función o bloque

    - CONCEPTOS

      - BLOQUE DE CÓDIGO: toda porción de código que está encerrada entre llaves: {}
      
      - CADENA DE SCOPES (scope chain): es un mecanismo que utiliza JS que permite que las variables globales se puedan acceder
        desde cualquier lugar del programa

      - OCULTAMIENTOS DE VARIABLES (variable shadowing): se produce cuando una variable que está en un scope más reducido tiene
        el mismo nombre que otra que está en un scope superior siguiendo su cadena de scopes
    
    - NOTAS
      
      - Como buena práctica de programación debemos declarar nuestras variables dentro del scope más reducido posible 
*/
