'use strict';
/*
const calculator = {
    add: function(a, b){
        console.log(a + b)},
    minus: function(a, b){
        console.log(a - b)},
    multiple: function(a, b){
        console.log(a * b)},
    squareOf: function(a, b){
        console.log(a ** b)}
    }

calculator.add(1.2345, 453);
calculator.minus(245, 2345);
calculator.multiple(23, 234);
calculator.squareOf(2, 4);
*/

const ageCheck = parseInt(prompt("Hey, how old are you?")); // promt에 적힌 내용은 기본적으로 string으로 인지하지만, 그 중 숫자 string은 parseInt를 통해 number로 전환 
if(isNaN(ageCheck) || ageCheck<0){                               // isNaN 은 숫자인 경우 false를, 숫자가 아닌 경우 true
    alert("Pls write a number!!");
} 
else if (ageCheck < 19) {
    alert("You can't allow to enter, get fucking away!!");
}
else {
    alert("Hellow Welcome aboard!!");
}

const titleName = document.querySelector(".hello h1");
console.dir(titleName);
titleName.innerText = "gotta go gotta go";
titleName.style.borderBlockColor = "black"

function handleTitleClick(){
    console.log("title was clicked!");
    titleName.classList.toggle("active");
}
function handleMouseEnter(){
    console.log("mouse is here");
}
function handleWindowCopy(){
    alert("copier!!");
}
function handleWindowOffline() {
    alert("sos no wifi");
}
function handleWindowOnline() {
    alert("goodgood");
}
titleName.addEventListener("click", handleTitleClick);
//=title.onclick = handleTitleClick;
titleName.addEventListener("mouseenter", handleMouseEnter);

window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);