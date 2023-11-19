/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];

let [john, mary, joe] = ages;

console.log(john, mary, joe);

// Destructuring objects


let jobs = {
	mike: 'designer',
	jill: 'developer',
	alicia: 'accountant',
};


let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);
// Destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
	firstLanguage: 'english',
	secondLanguage: 'french',
	thirdLanguage: 'german',
	fourthLanguage: 'japanese',
};

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
	brain: 'pizza',
	anna: 'pasta',
	sarah: 'vegetarian',
	andrea: 'steak',
};

let {brain, anna, ...rest} = favoriteFoods;
console.log(brain);
console.log(anna);
console.log(rest);

//Challenge 1 

let students = [
	{
		name: 'Emily',
		subjects: ['science', 'english', 'art'],
		teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
		results: {science: 93, english: 80, art: 95},
	},
	{
		name: 'John',
		subjects: ['art', 'cad', 'english', 'maths', 'science'],
		teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
		results: {maths: 90, english: 75, cad: 87},
	},
	{
		name: 'Adam',
		subjects: ['science', 'maths', 'art'],
		teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
		results: {science: 93, maths: 77, art: 95},
	},
	{
		name: 'Fran',
		subjects: ['science', 'english', 'art'],
		teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
		results: {science: 93, english: 87, art: 95},
	}
];


// Declare the makeList function
const makeList = (arr, student) =>
	{
		// Initialize an empty array for the subjects
		let subjects = [];
		// Loop through each student in the array
		arr.forEach(studentN =>
		            {
			            // If the student's name matches the name passed to the function
			            if (studentN.name === student)
				            {
					            // Assign the student's subjects to the subjects array
					            subjects = studentN.subjects;
				            }
		            });
		// Return the subjects array
		return subjects;
	}

// Use destructuring to get the first, second, and the rest of the subjects
let [first, second, ...leftovers] = makeList(students, 'John');

// Log the values of first, second, and rest
console.log(first, second, leftovers);

