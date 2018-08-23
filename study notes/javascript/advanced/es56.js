// let and consant
// es5 and es6

const player = 'jon';//will always be this can't reasign
let exp = 100;//let only works within its own {};
let lvl = false;

if (exp>90){
	let lvl = true;
}

// template strings

const name = "jjj";
const age = 34;
const greeting = ` hello ${name} you look ${age-5} `;

function greet (name='', age=30) {
	const greeting = ` hello ${name} you look ${age-5} `;
}//default if there is no input for greet when function is called

//symbol ecma 6

let sym1 = symbol();
let sym2 = symbol('hi');


// arrow functions

// conventional way
// function add(a,b){
// 	return a+b;
// }
const add = (a,b) => a+b;// returns a+b