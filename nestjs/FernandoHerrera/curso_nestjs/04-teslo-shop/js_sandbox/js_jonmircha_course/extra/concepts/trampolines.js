// TRAMPOLINES: cuando intetamos hacer muchos llamados recursos en javascript lo mas probable es que nosotros hayamos visto un error el cual se llama MAXIMUM CALL STACK SIZE EXEEDED esto quiere decir que nosotros hemos llamado a la función más veces de lo permitido por lo que nosotros estaríamos limitados a hacer llamados recursivos pero de funciones que no se van a llamar asi mismo muchas veces.

// Sin embargo existe una técnica llamada TRAMPOLINES que nos permitirá hacer llamados recurisvos de una misma función cuantas veces nosotros queramos o cuanta memoria tenga la maquina y nos permita hacer este llamado eliminado la barrera TAIL CALL OPTIMIZATION

const trampoline =
  (fn) =>
  (...args) => {
    let result = fn(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  };

const suma = (number, sum = 0) =>
  number === 0 ? sum : () => suma(number - 1, sum + number);

const tsuma = trampoline(suma);
const r = tsuma(100000000);
// const r = suma(10000);
console.log(r);
