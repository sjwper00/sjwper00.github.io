'use strict';

const bookmarkCallup = document.querySelector("#bookmarkContain");
const bookmarkShow = document.querySelector("#bookmarkList")

function bookmarkDisplay(){
    bookmarkShow.classList.remove("hidden");
}

function bookmarkVanish(){
    bookmarkShow.classList.add("hidden");
}


/*function bookmarkFunction(){
    //const bookmarkList = document.createElement("a");
    //.href = bookmarkObj.name;
    //bookmarkList.innerText = bookmarkObj.address;
    
    //bookmarkList.appendChild("")
    bookmarkCallup.classList.remove("hidden");
}


                        <a href = "https://nomadcoders.co" target="_blank">Nomadcoders Homepage</a> <!--_blank 링크된 문서를 새로운 윈도우나 탭(tab)에서 오픈함-->
                        
                    
                        <a href = "https://developer.mozilla.org/ko" target="_blank">Mozillia</a>
                       
                        <a href = "https://www.google.com" target="_blank">Google</a>
                     
                        <a href = "https://nomadcoders.co/javascript-for-beginners/lobby" target="_blank">To-do Video</a>


function bookmarkHidden(){
  //  bookmarkCallup.classList.add("hidden")
}
*/
//if(document.querySelector(".hidden") === 1){
    bookmarkCallup.addEventListener("click", bookmarkDisplay);
//} else {
//    bookmarkCallup.addEventListener("click", bookmarkVanish);
//}