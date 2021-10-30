'use strict';

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "savedToDo"

let savedToDo = [];



toDoForm.addEventListener("submit", handleToDoSubmit);

function handleToDoSubmit(event) //작성된 값들을 저장하고 화면에 표시될 수 있도록 만드는 함수
{   
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        text: newToDo, 
        ID: Date.now()
    };
    savedToDo.push(newToDoObj);
    paintToDo(newToDoObj);
    storageToDo();
};

function paintToDo(newToDo){    //저장된 값들이 화면에 표시되게 하는 기능을 표현한 함수
    //delete 버튼 생성
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    
    //입력된 값을 todo-list로 보여주기
    const createList = document.createElement("ul");
    createList.ID = newToDo.ID;
    const createSpan = document.createElement("span");
    createSpan.innerText = newToDo.text;



    createList.appendChild(createSpan);
    createList.appendChild(button);
    
    toDoList.appendChild(createList);
}

function deleteToDo(event){
    const deleteList = event.target.parentElement; //event가 발생하는 타겟은 어떤 것의 부모격인데 이 button의 부모(creaSpan)의 부모(creeaList)를 삭제해준다
    deleteList.remove();
    savedToDo = savedToDo.filter((toDo) => toDo.ID !== parseInt(deleteList.ID)); //filter = forEach 과 유사한 기능을 한다. 배열의 수만큼 filter함수는 작동한다. filter 함수에 적용하는 새로운 함수가 참이면 기존 array에 있는 item을 유지하고, 거짓이면 삭제한다.
    storageToDo();// storageToDo DB에서 선택한 item을 삭제한 이후에 DB를 다시 한 번 부르는 걸 잊지말자  
}

function storageToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(savedToDo)); //javascript의 어떤 object든 array든 string으로 바꿔준다.
}

const getSavedToDo = localStorage.getItem(TODOS_KEY);
//console.log(getSavedToDo);

if (getSavedToDo !== null){
    const parsedSavedToDo = JSON.parse(getSavedToDo);
  //  console.log(parsedSavedToDo);
    savedToDo = parsedSavedToDo;    //localstorage에서 기존 저장된 배열을 기억하고 refresh 이후에도 새로 저장된 값을 추가해서 저장하게 만든다 
    parsedSavedToDo.forEach(paintToDo); //refresh를 하더라도 기존에 저장된 값들이 화면에 그대로 보여지게 한다
}

//filter = forEach 과 유사한 기능을 한다. 배열의 수만큼 filter함수는 작동한다. filter 함수에 적용하는 새로운 함수가 참이면 기존 array에 있는 item을 유지하고, 거짓이면 삭제한다.*/