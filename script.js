let circularProgress = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");

let progressStartValue = 0;
let progressEndValue = 90;
let speed = 100;

let progress = setInterval(() => {
    progressStartValue++

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#e01c1c ${progressStartValue * 3.6}deg, #ffffff 0deg)`
    if(progressStartValue == progressEndValue){
        clearInterval(progress); 
    }
},speed);