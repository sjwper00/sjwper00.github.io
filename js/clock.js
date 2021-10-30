'use strict';

const clock = document.querySelector("h2#clock");

function getClick(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // String.prototype.padStart()에ㅓpadStart() 메서드는 현재 문자열의 시작을 다른 문자여롤 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다. 채워넣기는 대상 문자열의 좌측부터 적용.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // am pm 표시 및 판별 함수
    var ampm = hours >= 12? "p.m." : "a.m.";
    // am pm 표시로 인해 시간은 12 이하 숫자로 표현하기
    var showHours = String(hours >= 12? hours-12 : hours).padStart(2, "0"); 
    clock.innerText = `${showHours}:${minutes}:${seconds} ${ampm}`;
}
getClick();
setInterval(getClick, 1000); // 일정한 시간 간격으로 작업을 수행함. clearInterval()로 중지 가능, 세팅해놓은 시간간격보다 작업이 오래걸릴 경우 오류발생