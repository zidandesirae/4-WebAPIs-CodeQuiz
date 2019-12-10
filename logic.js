document.getElementById("startTimer").addEventListener("click", startTimer);

function startTimer() {
    let timeleft = 5;
    let setTimer = setInterval(function(){
    document.getElementById("timer").innerHTML = timeleft;
    timeleft--;
        if(timeleft <= 0){
        clearInterval(setTimer);
        document.getElementById("timer").innerHTML = "0"
        };
    }, 1000);
};