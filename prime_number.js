// 1st method (basic approach)
console.time("execution start");
let num = 5;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
  }
}

if (isPrime) {
  console.log("Number is prime");
} else {
  console.log("Number is not prime");
}
console.timeEnd("execution start"); // Fixed label name

console.log(`-------------------------`);

// 2nd method (optimized approach)
console.log(`Advanced approach`);
console.time("execution time");

let isPrime2 = true;
for (let j = 2; j <= Math.sqrt(num); j++) {
  // Fixed loop condition
  if (num % j === 0) {
    isPrime2 = false;
  }
}

if (isPrime2) {
  console.log("Number is prime");
} else {
  console.log("Number is not prime");
}
console.timeEnd("execution time"); // Fixed label name

console.log(`-------------------------`);
//even number
console.log(`even  number`);
const a = 10;
for (
  let k = 0;
  k <= a;
  k += 2 //it will we increase by 2 steps 2-4
) {
  console.log(k);
}
