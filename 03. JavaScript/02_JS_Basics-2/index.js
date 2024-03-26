
console.log("Chaliye 2nd lecture suru karte hainnnnn")

console.log('Chaliye shuru karte hai ');


//OBJECT --------------

console.log("\n OBJECT \n")


//object create
const k = {}
console.log(k)

let rectangle = {
    length: 1,
    breadth: 2,


    //Object under function hain to use function nai method bolte hain
    draw: function() {
        console.log('drawing rectangle');
    }
};
console.log(rectangle)
console.log(rectangle.breadth)
console.log(rectangle['length'])
console.log(rectangle.draw)
console.log(rectangle.draw())



//FACTORY FUNCTION -----------

console.log("\n FACTORY FUNCTION \n")


function createRectangle(len, bre) {

    const rectangle = {
        length: len,
        breadth:bre ,

        draw() {
            console.log('drawing rectangle');
        }
    };
    return rectangle;
}

let rectangleObj1 = createRectangle(5, 4);
console.log(rectangleObj1)
console.log(rectangleObj1.length)
console.log(rectangleObj1.draw())

let rectangleObj2 = createRectangle(2,3);
console.log(rectangleObj2)

let rectangleObj3 = createRectangle(7,9);
console.log(rectangleObj3)

//  CONSTUCTOR FUNCTION

console.log("\n CONSTRUCTOR FUNCTION \n")

// Camelcase -> numberOfStudents

//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/methods -> intialise/Define

function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw= function() {
        console.log('drawing');
    }
}

console.log(Rectangle)

//object creation using constrcutor function
let rectangleObject = new Rectangle(4,6);

rectangleObject.color = 'yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);

let Rectangle1 = new Function(
    'length', 'breadth',
    `this.length = length;
    this.breadth = breadth;
    this.draw= function() {
    console.log('drawing');
}`);

//object creation using Rectangle1
let rect = new Rectangle1(2,3);

rect.length;

console.log(rect);



console.log("\n\n")



let x = 10;
let y = x;

x++;
console.log(x);
console.log(y);


// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a = 10;

// function inc(a) {
//     a++;
// }

// inc(a);

// console.log(a);

// let a = {value:10 };

// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);

let rectangle2 = {
    length:2,
    breadth:4
};

// for-in loop 
for(let key in rectangle2 ) {
    //keys are reflected through key variable 
    //values are reflected through rectangle[key]
    console.log(key,rectangle2[key]);
}

//for-of loop
for(let key of Object.entries(rectangle2)) {
    console.log(key);
}

if('length' in rectangle) {
    console.log('Present');
}
else {
    console.log('Absent');
}


//object - colone #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

//Object Cloning #2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);

//Object Cloning #3
// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let dest = {...src};

// console.log(dest);

// src.a++;

// console.log(dest);





