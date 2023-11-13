let gameSeq=[];
let userSeq=[];
let btns = ["yellow", "red", "green", "purple"];
let started=false;
let level=0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if (started==false){
        console.log("Game started")
        started= true;
        levelUp();
    }
} );

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250)
}



function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn); 
}

function btnPress(){
    let btn=this;
    btnFlash(btn);
    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns();
}

let allBtns= document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress );
}

function reset(){
    started=false;
    let gameSeq=[];
    let userSeq=[];
    level=0;
}
function checkAns(){
    
    let flag = true;
    console.log(userSeq);
    console.log(gameSeq);
    for (let i=0; i<userSeq.length; i++){
        if (userSeq[i]!=gameSeq[i]){
            flag=false;
        }
    }
    if(flag){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML= `Game Over! Your score was <b>${level}</b> <br> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        })
        reset();
    }
}