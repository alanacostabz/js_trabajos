/**
  == vs === en JS

    - === (TRIPLE IGUAL): cuando comparamos valores primitivos, este nos dirá si son del mismo tipo y si tienen el mismo valor, tambien se 
      le conoce como OPERADOR DE IGUALDAD ESTRICTA (strict equality) o OPERADOR DE IDENTIDAD: cuando lo usamos para comparar objetos, este nos dice si estamos hablando del mismo espacio de memoria, 
      del mismo objeto en la memoria

    - == (DOBLE IGUAL): cuando usamos el doble igual JS realiza internamente un concepto llamado COERCIÓN DE TIPOS que es cuando realizamos
      ciertas operaciones entre valores de distintios tipos, JS internamente convierte uno de ellos o ambos para que sean del mismo tipo
      y pueda concretar la operación, al operador de doble igual se le conoce como OPERADOR DE IGUALDAD DÉBIL (loose equality)
 
 
  NOTAS:
    - aunque sean invisibles para nosotros, cuando comparamos objetos* (objetos, arrays o funciones (cualquier cosa que no sea un valor primitivo)) en verdad estamos comparado referencias
  
    - lo mismo aplica para las diferencias !== y !==
 */
