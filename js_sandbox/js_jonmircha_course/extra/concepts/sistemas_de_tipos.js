/**
  SITEMAS DE TIPOS
    - Las reglas que impone un lenguage para clasificar qué tipos de valores existe, cómo podemos manipularlos y cuáles
      son las operaciones válidad para realizar con ellos.

    1. CHEQUEO DE TIPOS: 
      - es el proceso de verificar y hacer cumplir las restricciones de tipos que existen en un lenguaje
      - la diferencia entre chequeo de tipos estático y dinámico está en cuando se realiza, si antes de que se ejecute 
        el programa (estático) o durante (dinámico)
    
    2. EXIGENCIA DE TIPOS:
      -  qué tan exigente es un lenguaje para considerar que estamos cometiendo un error de tipos

    3. COERSIÓN DE TIPOS
      - Es la conversión implicita de tipos que realiza el motor de JS para poder concretar una operación
      - para evitar que sucedan errores, se tienen que hacer una CONVERSIÓN EXPLÍCITA DE TIPOS de las cuales hay 3:
        1. STRING
        2. NUMBER
        3. BOOLEAN

    4. EQUIVALENCIA Y COMPATIBILIDAD DE TIPOS
      - Cómo un lenguaje determina que un tipo es compatible con otro tipo o equivalente a otro tipo.
      - TIPADO NOMINAL: dos tipos son compatibles cuando tienen el mismo nombre o cuando uno es un subtipo del otro (por herencia)
      - TIPADO ESTRUCTURAL: para que dos tipos sean compatibles sólo basta con que compartan la estructura que nos interesa
      - DUCK TYPING: no nos importa de qué tipo es un objeto, siempre y cuando tengamos los atributos y métodos a los cuales
        queramos acceder

    - Los lenguajes dinámicos inceitivan a mantener una documentación actualizada y escribir muchos tests para asegurarnos de que el código
      funciona como debería antes de lanzar una nueva version de un programa

    - TYPESCRIPT
      - es un super set de JS creado y manetenido por MS, es decir parte de a misma sintaxis de JS, pero agrega un chequeo de tipos
        estructural antes de que se ejecute nuestro programa
 */
