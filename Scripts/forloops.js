console.log("Task 1")

for(let i = 0; i < 11; i++) {
    console.log(i * i);
};

console.log("Task 2")

for(let i = 5; i > 0; i--) {
    console.log(i)
}
console.log("Blastoff!")

console.log("Task 3")

for(let i = 0; i < 51; i += 2 ) {
    console.log(i)
}

console.log("Task 4")
let sum = 1;
for( let i = 2; i < 101; i++) {
    sum += i;
}
console.log(sum)

console.log("Task 5");

let fact = 1;
for(let i = 1; i < 11; i++) {
    fact *= i;
    console.log(fact);
}

console.log("Task 6");
 let arr = [3, 1, 4, 1, 5]
 
 for(let i = 0; i < arr.length; i++) { 
    console.log(arr[i])
 }
console.log("Task 7");

for(let i = 0; i < arr.length; i++) { 
    console.log(arr.at(-i-1))
 }
console.log("Task 8");
let cubes = [];
for(let i = 1; i < 11; i++ ) {
    cubes.push(i**3)
}
console.log(cubes);

console.log("Task 9");

let fibarr = [];
let prev = 0;
let curr = 1;

for(let i = 0; i < 10; i++) {
    fibarr.push(prev)
    let temp = curr;
    curr = curr + prev;
    prev = temp;
}

console.log(fibarr);

console.log("Task 10");
