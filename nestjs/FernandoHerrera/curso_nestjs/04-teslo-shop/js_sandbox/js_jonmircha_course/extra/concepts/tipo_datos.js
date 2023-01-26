/*
  TIPO DE DATOS PRIMITIVOS en JS

  CARACTERISTICAS JS

    - TIPADO DINÁMICO: en JS el tipado es dinámico es decir las variables no tienen un tipo de dato particular asociado. Podemos asignarle
      y re-asignarle cualquier valor a cualquier variable

    - TIPADO DÉBIL: podemos realizar operaciones entre valores de distintos tipos

    - COERCIÓN DE TIPOS: conversión implícita de tipos que realiza el motor de JS para poder concretar una operación

    - TIPO DE UNA VARIABLE: se determina cuando se ejecute la línea de código que contiene a esa variable. Depende de la operación
      que se esté realizando con ella

    - En js Existen 2 grandes grupos de tipos de datos PRIMITIVO Y OBJETO

  ¿QUÉ ES UN TIPO DE DATO PRIMITIVO? 
    - Valores básicos, inmutables y que no poseen métodos ni propiedades
    - para saber el tipo de datos utilizamos un operador llamado "type of"
    - existen 6 tipos de datos primitivos:
      1. strings: 
        - sirven para representar texto dentro de los programas
        - para representarlos JS utiliza una codificación que se llama UTF-16

      2. number
        - solo existe un tipo de dato para los números en JS
        - js no es muy preciso con los decimales ya que js utiliza un formato para representar a los númertos llamado IEE 754
        - cada número ocupa 64bits en la memoria (8 Bytes) 
        - para poder evitar esto podemos usar el metodo tofixed
        - el rango de números va entre -9007199254740991 a 9007199254740991
        - Number.MIN_SAFE_INTEGER y Number.MAX_SAFE_INTEGER marcan el rango de números donde es seguro realizar operaciones númericas
        - para probar si un numero es seguro utilizamos Number.isSafeInteger(numero)
        - NaN (not a number) es de tipo number y es el resultadode cómputos inválidos
        - infinity e -inifinity son tambien tipo number

      3. boolean
        - solo puede tener dos valores posibles: true o false
        - con "!" obtenemos el resultado opuesto de un boolean
        - VALORES FALOS: son valores que van a ser evaluados como false (ademas de false), '', 0, null, undefined y NaN. cualquier
          otro tipo va a ser verdadero

      - OBJECT WRAPPER: objeto que envuelve un valor primitivo cuando queremos acceder a una propiedad o llamar a un método del mismo

      4. null
        - es el tipo de dato para representar la ausencia de valor. sirve para decir que una variable no contiene nada, está vacía o 
          que todavia no conocemos su valor
        - es un tipo de dato aparte que solo tiene un valor posible: null
        - null es un tipo de dato primitivo

      5. undefined
        - significa tipo de dato desconocido
        - es el valor que se le asigna automaticamente a las variables cuando las declaramos y no las inicializamos
        - es valor que deberíamos de dejar para que el motor de JS asigne automáticamente
        - aun no se le dió ningun valor, no se recibió ese parámetro, una función se terminó de ejecutar hasta el final sin devolver
          ningun valor

      6. symbol (ES2015)
        - se usa para crear valores únicos, irrepetibles
        - REGISTRO GLOBAL DE SIMBOLOS: podemos acceder al mismo simbolo desde distintos lugares de nuestro programa a partir de su
          descripción, además es compartido entre nuestra página y los serviceWorkers o iframes que esta puede llegar incluir
        - son buenos reemplazos para valores constantes que podrían llegar a ser strings
        - se pueden utilizar como propiedades únicas de los objetos y evitar colisiones en los nombres de las propiedades de los objetos
        - nos permite agregar propiedades ocultas dentro de los objetos
        - SÍMBOLOS DESTACADOS (well-know symbols): son propiedades de la función symbol, pemriten modificar el comportamiento de algunas 
          funcionalidades del lenguaje.

    BIG INT (NUEVO TIPO DE DATO)
      - permitirá en próximas versiones del lenguaje utilizar números enteros sin límites

    - todo valor que no sea de alguno de estos tipos es un objeto
*/
