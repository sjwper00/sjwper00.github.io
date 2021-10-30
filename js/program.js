'use strict';

/*
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input"); //querySelector를 사용할 경우 #variable 은 ID를 찾는걸 의미한다
const loginButton = loginForm.querySelector("button");
*/
 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden"

/*
function clickLoginBtn() {
    //console.log(loginInput.value);
    const value = loginInput.value;
    if (username === ""){
        alert("Please write your name");
    } else if (username.length > 15){
        allert("Your name is too long");
    }
};
loginButton.addEventListener("click", clickLoginBtn);
*/
/*
function onLoginSubmit(event) {
    /*const username = loginInput.value;
    console.log(username);
    
    event.preventDefault(); // preventDefault 함수는 브라우저가 기본적으로 수행하는 default 동작을 멈추게 한다. -> form을 submit할 때 새로고침하는 동작을 멈추게 한다   
    //console.log(loginInput.value); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //console.log(username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    
}

loginForm.addEventListener("submit", onLoginSubmit); //onLoginSubmit() 으로 작성되지 않은건, submit을 인지하자마자 브라우저가 자동으로 onLoginSubmit 함수를 작동시키기 때문이다.
link.addEventListener("click", handleLinkClick);
*/

function loginEvent(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem("username", userName);
    paintingGreeting(userName);
}

function paintingGreeting(username){
    greeting.innerText = `Hello ${username}`; //<button></button>일 경우, innerText 이며/ <input type = button></input>일 경우 greeting.value 사용, 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginEvent);
    //window.location.reload();
} else { 
    paintingGreeting(savedUsername); 
}