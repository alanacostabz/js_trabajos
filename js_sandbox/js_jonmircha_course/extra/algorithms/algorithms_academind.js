function sumUp(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

function sumUp2(n) {
  return (n / 2) * (1 + n);
}

let start = 0;
let end = 0;

// linear time
start = performance.now();
let sum = sumUp(1000);
end = performance.now();
// console.log(sum);
// console.log(end - start);

// constant time
start = performance.now();
let sum2 = sumUp2(1000);
end = performance.now();
console.log(sum2);
console.log(end - start);
