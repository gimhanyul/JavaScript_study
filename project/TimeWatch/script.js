// 변수 및 상수 생성
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const buttonStop = document.getElementById("button-stop"); // 올바른 ID로 수정
const buttonStart = document.getElementById("button-start");
const buttonReset = document.getElementById("button-reset"); // 올바른 ID로 수정

// 재할당이 필요한 변수들
let seconds = 0;
let tens = 0;
let interval; // 변수 이름의 대소문자 일관성 유지

// 타이머 시작을 위한 함수 생성
buttonStart.onclick = function() {
    clearInterval(interval); // 이미 진행 중인 타이머가 있을 경우 중지
    interval = setInterval(startTimer, 10);
}

// 타이머 중지 함수
buttonStop.onclick = function() {
    clearInterval(interval);
}

// 타이머 리셋 함수
buttonReset.onclick = function() {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
}

function startTimer() {
    tens++;
    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    } else if (tens > 99) {
        seconds++;
        tens = 0;
        appendTens.innerHTML = "00";
    } else {
        appendTens.innerHTML = tens;
    }
    appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}