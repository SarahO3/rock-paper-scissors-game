/*
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/


function camelizeString(str){
  return str
    .split("-")
    .map((word, index) => {
      return index === 0
        ? word
        : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(camelizeString("background-color"));


/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.
*/

function filterRange(arr, a, b) {
  return arr.filter(num => num >= a && num <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // [3, 1]
console.log(arr);      // [5, 3, 8, 1]

/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
*/

function filterRangeInPlace(arr, a, b) {
    
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]



// Sort in decreasing order
let ar = [5, 2, 1, -10, 8];
ar.sort((a, b) => b - a)
// ... your code to sort it in decreasing order

alert( ar ); // 8, 5, 2, 1, -10


/*
Copy and sort array
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.
*/


function copySorted(ari){
    return ari.splice().sort()
}
let ari = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(ari);

alert( sorted ); // CSS, HTML, JavaScript
alert( ari ); // HTML, JavaScript, CSS (no changes)



/*
Map to names
importance: 5
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = users.map((user) => user.name)
alert( names ); // John, Pete, Mary




/*
Map to objects
importance: 5
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
*/

let joh = { name: "John", surname: "Smith", id: 1 };
let pet = { name: "Pete", surname: "Hunt", id: 2 };
let mar = { name: "Mary", surname: "Key", id: 3 };

let usery = [ john, pete, mary ];

let usersMaped = usery.map(person => ({
     fullName: `${person.name} ${person.surename}`,
    id: person.id
}))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMaped[0].id ); // 1
alert( usersMaped[0].fullName ); // John Smith



function getAverageAge(users){
   if (users.length === 0) return 0;

   return  users.reduce((acc, cur) => 
    acc + cur.age,  0) / users.length

   
}

 /*
 let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) );
 */


// function unique(arr){
//     return [...new Set(arr)]
// }

// another way to get only unique items from an array



/*
Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.
*/
function unique(arr){
  let result = []

  // loop through each item in array
  for(let item of arr){
  // if there is no item with this name already in result array
  if(!result.includes(item)){
    result.push(item)
  }
}

return result
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O



/*
arr.reduce((obj, user) => {
  obj[user.id] = user;
  return obj;
}, {})
*/
arr.reduce((obj, user) => {
  obj[user.id] = user;
  return obj;
}, {})

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/




function sumOfTripledEvens(arr){
 return arr
 .filter(num => num % 2 === 0)
 .map(num => num * 3)
 .reduce((sum, num)=>
sum + num, 0)
}

let arr = [3, 5, 6, 8, 2, 4]

console.log(sumOfTripledEvens(arr))




// checking for prime number from number 2 to 10
// let num = 10

// outer:
// for(let i = 2; i <= num; i++){
//   for(let j = 2; j < i; j++){
//     if(i % j === 0){
//       continue outer
//     }
//   }
//   alert(i)
// }


// array

// let styles = ["jazz", "blues"]
// styles.push("roch-n-roll")

// styles[Math.floor(styles.length - 1) / 2] = "classics"


// alert(styles.shift())


// styles.unshift("rap", "raggae")

// console.log(styles)





// count down 10
/*
Add code to loop from 10 down to 0. We've provided you with an initializer — let i = 10;.
For each iteration, create a new paragraph and append it to the output <div>, which we've selected using const output = document.querySelector('.output');. We've provided you with three code lines inside comments that need to be used somewhere inside the loop:
const para = document.createElement('p'); — creates a new paragraph.
output.appendChild(para); — appends the paragraph to the output <div>.
para.textContent = — makes the text inside the paragraph equal to whatever you put on the right-hand side, after the equals sign.
For the different iteration numbers listed below, write code to insert the required text inside the paragraph (you'll need a conditional statement and multiple para.textContent = lines):
If the number is 10, print "Countdown 10" to the paragraph.
If the number is 0, print "Blast off!" to the paragraph.
For any other number, print just the number to the paragraph.
*/

const output = document.querySelector(".output");
output.textContent = "";

let i = 10;

while (i >= 0) {
  const para = document.createElement('p');

  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = "Blast off!";
  } else {
    para.textContent = i;
  }

  output.appendChild(para);
  i--;
}



// guest list to let in


const people = [
  "Chris", "Anne", "Colin", "Terri",
  "Phil", "Lola", "Sam", "Kay", "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");

let admittedList = [];
let refusedList = [];

for (const person of people) {
  if (person === "Phil" || person === "Lola") {
    refusedList.push(person);
  } else {
    admittedList.push(person);
  }
}

// take each item in admitted and refused array and join them with comma, then add fullstop to the last item
admitted.textContent = "Admit: " + admittedList.join(", ") + ".";
refused.textContent = "Refuse: " + refusedList.join(", ") + ".";

/*
Sum input numbers
importance: 4
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.

Run the demo
*/

function sumInput(){
  let arrs = []

  while (true) {
let userInput = prompt("Please enter a number", 0)


// should we cancel
if(userInput === "" || userInput === null || !isFinite(userInput)) break

  arrs.push(+userInput)
  }

let sum = 0
for (let arr of arrs){
  sum += arr
}
  
return sum
}

alert(sumInput())



// object practice to check for an empty object

function isEmpty(obj){
for(let key in obj){
  return false
}
true
}

alert(isEmpty(schedule))



// sum all salaries and store in variable

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

// method 1 

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

// method 2
const sum = Object.values(salaries).reduce((accu, cur) => {
return accu + cur
}, 0)

console.log(sum)

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

function multiplyNumeric(obj){
 for(let key in obj){
  if(typeof obj[key] == Number){
    obj[key] *= 2
  }
 }
}


// creating an object method with the this keyword

function Person(name){
  this.name = name;
  this.introduce = function(){
    console.log(`Hi, I'm ${this.name}.`)
  }
}
// call person as a constructor
const sarah = new Person("sarah")
sarah.introduce()


