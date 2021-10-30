'use strict';

const img = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImg = img[Math.floor(Math.random()* img.length)];

const bgImage = document.createElement("img"); //html element를 javascript에서 생성하는 property

/*css에서 background 로 사용된 image들을 꾸미기 위해 class이름을 지정해줌
bgImage.className = 'image'
*/

//생성한 html element를 실제 html body에 갖다 붙이는 작업
document.body.appendChild(bgImage); 
//img 뒷배경으로 설정하기
document.body.style.backgroundImage = `url('img/${chosenImg}')`;

//img중 사이즈가 작은건 반복되는 현상이 발생하는데 방지하는 방법
document.body.style.backgroundRepeat = "no-repeat";
//이미지 resizeing
//document.getElementById("img").style.backgroundSize = 200px;