var timer = 6;
var score = 0;
var hitrn = 0;
// Event Bubbling => jispe click kroge vo element pr event raise hoga, aur event listener naa milne par event element ke parent pr listner dhundhega, waha bhi naa milne par event parent ke parent ke parent pt listner dhundhega
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble() {
    var clutter = "";

    for (i = 1; i <= 102; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    var pbtm = document.querySelector("#pbtm");
    pbtm.innerHTML = clutter;
}
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
           var gameover =  document.querySelector("#pbtm");gameover.innerHTML = `<h1>Game Over! Your score is ${score}</h1>`;
           gameover.style.justifyContent = "center";
        }
    }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clickednum = Number(details.target.textContent);// (target) is used to give the specific element which is clicked, and (textcontent) is used to provide the only text from the parent container.
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();
