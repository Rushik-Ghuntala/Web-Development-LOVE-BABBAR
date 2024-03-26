
// function eventFunction() {
//     console.log('I have clicked on the docuemnt');
// }

// document.addEventListener('click', eventFunction);

// document.removeEventListener('click', eventFunction);

const content = document.querySelector('#wrapper');

content.addEventListener('click', function(event) {
    console.log(event);
})
content.addEventListener('click', function(babbar) {
    console.log(babbar);
})






let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('maza aaya, accha laga');
});







let myDiv = document.createElement('div');

function paraStatus(event) {
    console.log('Para ' + event.target.textContent);
}
myDiv.addEventListener('click', paraStatus);

for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    // newElement.addEventListener('click', paraStatus); --> optimize by link linking with div
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);







let element = document.querySelector('#wrapper2');

element.addEventListener('click', function(event) {
    // if(event.target.nodeName === 'SPAN') {
    //     console.log('span pr click kia hai --> ' + event.target.textContent);
    // }

    console.log('span pr click kia hai --> ' + event.target.textContent);

});






//it is print after the whole HTML load ;)
document.addEventListener('DOMContentLoaded',function(){
    console.log("The HTML whole content is LOAD, DOM Content Loaded")
})