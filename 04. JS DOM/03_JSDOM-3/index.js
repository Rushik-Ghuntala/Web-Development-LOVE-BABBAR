//addung 100para
const t1 = performance.now();
for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para ' + i;

    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("this took " + (t2-t1) + " ms");

//optimising a bit
const t3 = performance.now();
let myDiv = document.createElement('div');

for(let i=1; i<=100; i++) {
    let element = document.createElement('p');
    element.textContent = 'This is Para ' + i;

    myDiv.appendChild(element);
}

document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("this took " + (t4-t3) + " ms");




//Document Fragment

const t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para ' + i;

    fragment.appendChild(newElement);
}
document.body.appendChild(fragment); // 1 Reflow, 1 Repaint
const t6 = performance.now();

console.log("Document Fragment : this took " + (t6-t5) + " ms");



function addPara(){
    let para = document.createElement('p');
    para.textContent = 'This is added Paragraph';
    document.body.appendChild(para)
}

function addNewMessage(){
    let para = document.createElement('p');
    para =  `Just Now a New Message has been received!`;
    document.body.appendChild(para);
}


addPara();
addNewMessage();


// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = 'Js is Single';
//     document.body.appendChild(para);
// }

// function appendNewMessage() {
//     let para = document.createElement('p');
//     para.textContent = 'Kya haal Chaal';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();

// document.addEventListener('click', function() {
//     console.log('hello DiDi');
// });






