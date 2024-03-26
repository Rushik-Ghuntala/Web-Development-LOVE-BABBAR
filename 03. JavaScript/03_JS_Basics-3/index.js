console.log('Hello Jee');


//MATH OBJECT

//STRING PRIMITIVE

console.log("\n STRING \n")

let lastName = 'Babbar' ;
console.log(lastName)
console.log(typeof lastName)

console.log(lastName.length)
console.log(lastName[0])
console.log(lastName.toUpperCase())
console.log(lastName.toLowerCase())

let firstName = new String('Love');
console.log(firstName)
console.log(typeof firstName)

console.log(firstName.length)
console.log(firstName[0])

let message = "this is my first meassage ;)"
console.log(message);

let words = message.split(' ')
console.log(words)

let replace = message.replace('first', 'last')
console.log(replace)



// TEMPLATE LITERAL

console.log("\n TEMPLATE LITERAL \n")

let msg = `this is 
breaking message`;

console.log(msg)

let message2 = 
`Hello ${lastName},

Thanks for the Opportunity

Regards,
Babbar`;

console.log(message2);

let words2 = message2.split(' ');

console.log(words2);



// DATE AND TIME OBJECT

console.log("\n DATE AND TIME OBJECT \n")

let date = new Date();
console.log("Today's date and time : ",date);


let date2 = new Date('June 20 1998 07:15');
console.log("Given date and time : ",date2);

let date3 = new Date(1998, 11, 20, 7);
console.log("Date with month as number : ",date3);


let date4 = new Date();

console.log(date4.setFullYear(1947));


// ARRAY OBJECT

console.log("\n ARRAY \n")

let numbers = [1,4,5,7];

console.log(numbers);


//ENTER THE VALUE
//end -> push
numbers.push(10)
console.log(numbers);

//beginning -> unshift
numbers.unshift(15)
console.log(numbers)

//middle -> splice
numbers.splice(2,0,'a','b','c')

//DELETE THE VALUE
//end -> pop
numbers.pop()
console.log(numbers)

//beggining -> shift
numbers.shift()
console.log(numbers)

//middle -> slice
let result = numbers.splice(1,3);
console.log(result);


//Searching
let index = numbers.indexOf('b');
console.log(`The value "b" is in the ${index+1} position`);
if (numbers.includes(8)) {
    console.log("The number 8 is in the array");
} else{
    console.log("The number 8 isn't in the array");
};


//we want to check if a number exist in an array
if(numbers.indexOf(4) != -1) 
    console.log("present");

console.log(numbers.includes(7));

console.log(numbers.indexOf(4, 2) );


let courses = [
    {no:1, naam:'Love'},
    {no:2, naam:'Rahul'}
];

console.log(courses);

console.log( courses.includes( {no:1, naam:'Love'} ) );

let course =  courses.find(course => course.naam === 'Love');
console.log(course);

const course2 = function(course) {
    return course.naam === 'Love';
}

console.log(course2(course));


console.log("helo")

let num = [1,2,3,4,5];
let numbers2 = num;

num = [];
numbers.length = 0;
numbers.splice(0,numbers.length);

console.log(num);
console.log(numbers2);

let first = [1,2,3];
let second = [4,5,6];

let combined = first.concat(second);
console.log(combined);

let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice();
// let sliced = marks.slice(2);
let sliced = marks.slice(2,6);
console.log(sliced);



// let first = [1,2,3];
// let second = [4,5,6];

let combined2 = [...first,'a', false, ...second ,'b', true];
console.log(combined2);

//copy kaise create karu
let another = [...combined];

let arr = [10,20,30,40,50];

for(let value of arr) {
    console.log(value);
}

arr.forEach(number=> console.log(number));



let numbers3 = [10,20,30,40,50];
const joined = numbers3.join(',');

console.log(joined);

let msg2 = 'This is my first message';
let parts = msg2.split(' ');

console.log(parts);

let joined2 = parts.join('_');
console.log(joined2);


let numbers4 = [5,10,4,40];

numbers4.sort();

console.log(numbers4);

numbers4.reverse();
console.log(numbers4);


let numbers5 = [1,2,-1,-4];

let filtered =  numbers5.filter(value => value >= 0);

console.log(filtered);


let numbers6 = [7,8,9,10];
console.log(numbers6);

let items = numbers6.map(value => 'student_no' + value);

console.log(items);

let numbers7 = [1,2,-6,-9];

let items2 = numbers7
            .filter(value => value >= 0)
            .map(num => {value: num});

console.log(items2);





