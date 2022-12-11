// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes'); 
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// we make a variable called name and set it to Dane as a string.
// then we check if the name is equal (checking the type and value) to Mary.
// if it is than it will console.log 'Hi, Mary!' however in this situation the name is not Mary but Dane;
//therefore, it will console.log 'How do you do?' instead.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we make a variable called secret which we did not assign a value to
// we make a variable called code which we assigned the value of 123 as a number
// then we check if code is equal (checking type and value) to 123 number
//if yes, then we assigned secret variable to super (string) and assigned the variable code to code * 2 (123 * 2)
// then we check if the variable code is greater than 250(number) ; if yes then assigned secret variable to duper (string)
//in this case the the math for code (123 * 2) = 246 number; which is less than 250 (what we are comparing to)
//therefore, the second statement will not run; and when console.log(secret) it will print 'super'


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we make a variable isStudent and assigned it to true (boolean); we make another variable called age and assigned it to 34 (number); lastly we make a variable called zip and assigned to 55407 (number)
// then we check if variable isStudent is (checking type and value) true and if the zip 55407 is greater than 80000; then console.log(`You're a student on the West Coast!`);
// else if isStudent is equal to false OR age is less than 30 then   console.log('What are your hobbies?')
// else if isStudent is equal to true than  console.log('Welcome to Prime!');
//else  by default it will console.log('How about the weather?'
//the condition statement criteria will return  console.log('Welcome to Prime!' instead

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;


// FIX - is to set colorTwo to purple too


if (mix === true) {
  colorOne = 'purple';
// Should be colorTwo = 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
// let temp = 40;
const time = 4;


//FIXED: is to change the || to && operator 
//should be:  if (temp > 39 && time >= 4) {  
if (temp > 39 || time >= 4) {  
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

//FIXED: change the console.log message

// /*
// let age = 21;
// const minAge = 21;

// if(minAge <= age) {
// should be: console.log('enter');
//   console.log('no entry');
// } else {
//   should be: console.log('no entry');
//   console.log('enter');
// }
// */
