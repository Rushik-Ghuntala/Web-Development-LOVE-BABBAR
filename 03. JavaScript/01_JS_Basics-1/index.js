

console.log("Namste Duniyaa!! from External File")

// line below is used to print on the console window
console.log('Namaste Dunia version4');


//VAR KEYWORD --------

var b = 10;
var b = 'love'
b = false;
console.log(b)


//LET KEYWORD --------

let a = 5;
a = 'babbar';

a = true;
console.log(a);


let lastName = 3;
console.log(lastName);

lastName = true;
console.log(lastName);


//CONST KEYWORD --------

const num = 12;
// num = 13;  --> Given error, do not re delcare or assigned const
console.log(num)


//OBJECT ----------

console.log("\nOBJECT\n")

const person = {
    name : "rushik",
    age : 20
}

console.log(person.name)
console.log(person['age'])
console.log(person)


//ARRAY -----------

console.log("\nARRAY\n")

const fruits = ['apple','banana','cherry']

console.log(fruits[0])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits)



//OPERATORS -----------

//ARITHMETIC -----------
console.log("\nARITHMENC\n")

let num1 = 5;
let num2 = 4;

console.log("5 + 4 = ",num1+num2)
console.log("5 * 4 = ",num1*num2)
console.log("5 / 4 = ",num1/num2)
console.log("5 - 4 = ",num1-num2)
console.log("5 % 4 = ",num1%num2)
console.log("5 ** 4 = ",num1**num2)


//PRE POST INCREMENT DECREMENT

console.log("\nPRE POST INCREMENT DECREMENT\n")

let x = 10;
console.log(x)
console.log(++x)
console.log(x++)
console.log(x)

console.log(--x)
console.log(x--)
console.log(x)



//ASSIGNMENT ----------

//COMPARISON ----------

console.log("\nCOMPARISON\n")

console.log("5 > 3 = ", 5>3)
console.log("5 < 3 = ", 5<3)
console.log("5 == 3 = ", 5==3)
console.log("5 == 5 = ", 5==5)
console.log("5 != 3 = ", 5!=3)
console.log("5 === 3 = ", 5===3)
console.log("5 === 5(string) = ", 5==="5")
console.log("5 === 5 = ", 5===5)
console.log("5 == 5 = ", 5==5)


//TERNARY OPERATOR ----------

console.log("\nTERNARY OPERATOR\n")

let age = 27;
let status = (age >= 18) ? 'Yes Vote' : 'No Vote';

console.log(status);


//LOGICAL OPERATOR ----------

console.log("\nLOGICAL OPERATOR\n")

console.log("TRUE && TRUE", true&&true)
console.log("TRUE && FLASE", true&&false)
console.log("TRUE || TRUE",true || true)
console.log("TRUE || FLASE",true||false)
console.log("TRUE && TRUE && TRUE",true&&true&&true)
console.log("TRUE && FALSE && TRUE",true&&false&&true)
console.log("TRUE || TRUE || FALSE",true||true||false)


//IF-ELSE 

console.log("\nIF-ELSE\n")

let marks = 83;
console.log(marks)

if(marks >= 90) {
    console.log('A');
}
else if(marks >= 80) {
    console.log('B');
}
else if(marks >=70) {
    console.log('C');
}
else if(marks >= 60) {
    console.log('D');
}
else {
    console.log('E');
}


//SWITCH CASE ----------

console.log("\nSWITCH CASE\n")

let alpha = 2;
console.log(alpha)

switch(alpha) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default: console.log('D');
}


//FOR LOOP --------

console.log("\nFOR LOOP\n")


for(let i = 1; i<=5; i=i+1) {
    console.log("Babbar " + i);
}

//FOR in LOOP --------

console.log("\nFOR in LOOP\n")

let k = "rushik";

for(let index in k) {
    console.log(k[index]);
}

//FOR in LOOP --------

console.log("\nFOR of LOOP\n")

let j = "soni";

for(let val in j) {
    console.log(j[val]);
}


//WHILE LOOP --------

console.log("\nWHILE LOOP\n")


let z = 1;

while(z <= 5) {
    console.log(z);
    z++;
}

//DO WHILE LOOP --------

console.log("\nDO WHILE LOOP\n")

let y = 1;

do {
    console.log(y);
    y++;
} while(y < 10);



