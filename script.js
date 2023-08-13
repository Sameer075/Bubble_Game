var timer=60;
var score=0;
var hitRn;
// var gameOver=`<h1>Game Over!!<h1>`+`<h1>Your Score is ${score} </h1>`;
function increaseScore(){
    score +=10;
    document.querySelector("#score").textContent=score;
}

function makeHit(){
    hitRn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitRn;
}

function makeBubble(){
    var clutter="";
    for(var i=1;i<=198;i++){
        var rn=Math.floor(Math.random()*10);
        clutter +=` <div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter;
}


function runTimer(){
    var timerInt=setInterval(() => {
    if(timer>0){
        timer--;
        document.querySelector("#timer").textContent=timer; 
    }
    else{
        clearInterval(timerInt);
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over!!<h1><br>`+`<h1>Your Score is ${score} </h1>`;
        playsound();
    }
    }, 1000); 
    
}

function playsound(){
    var audio=new Audio("./gameover.wav");
    audio.play();
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    // console.log(details.target);
    var clicked=Number(details.target.textContent);
    // console.log(clicked);
    if(hitRn === clicked){
        increaseScore();
        makeHit();
        makeBubble();
    }
    else{
        playsound();
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over!!</h1><br>`+`<h1>Your Score is ${score} </h1>`;
        
    }
});

makeHit();
runTimer();
makeBubble();
