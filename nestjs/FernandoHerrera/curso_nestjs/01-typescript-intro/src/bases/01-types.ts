export let name: string = "Carolina";
export const age: number = 2001;
export const isValid: boolean = true;

name = "Alan";
// name = 123;
// name = true;

export const templateString = `Esto es un string multinea
que puede tener 
" dobles
' simple
inyectar valores: ${name}
expresiones: ${1 + 1}
números: ${age}
booleanos: ${isValid}
`;

console.log(templateString);
