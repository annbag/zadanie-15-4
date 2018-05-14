//task 1

const a= 'Hello';
const b = 'World!';

console.log (`${a} ${b}`);

//or 
const c = (d='Hello', e='World!') => console.log (`${d} ${e}`);
c();

//task 2

const multiply = (a, b=1) => a * b;

console.log(multiply(3,4));
console.log(multiply(3));

//task 3

const average = (...args) => {
	let sum = 0;
	args.forEach(arg =>{
		sum+= arg;
	});
	console.log(`Average: ${sum/args.length}`);
};

average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4
average(13, 4, 5, 8, 10)

//task 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
average(...grades);
 
//task 5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = data;
console.log(`First name: ${firstName}`);
console.log(`Last name: ${lastName}`);
