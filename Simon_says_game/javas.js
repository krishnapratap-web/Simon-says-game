let usersq=[];
let gamesq=[];
let started=false;
let level=0;
let h3=document.querySelector("h3");
let btns=["red","purple","green","yellow"];
let hscore=0

document.addEventListener("keypress",function () {
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
    
});

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function (){
        btn.classList.remove("userFlash");
    },250);
}

function levelup(){
    usersq=[];
    level++;
    h3.innerText=(`level ${level}`);
    let Idx =Math.floor(Math.random()*3);
    let randColor=btns[Idx];
    gamesq.push(randColor);
    let randBtn=document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
}

function checkAns(idx){

    if(usersq[idx]===gamesq[idx]){
        if(usersq.length==gamesq.length){
            setTimeout(levelup,500);
        }
    }
    else{
        
        if(level>hscore){
            hscore=level;
            h3.innerHTML=`Gameover! your score was <b>${level} YOU ARE THE HIGHEST</b> <br>press any key to start`;
        }
        else{
             h3.innerHTML=`Gameover! your score was <b>${level}</b> <br>press any key to start`;
        }
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);

        reset();
    }
}

function btnpress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    usersq.push(userColor);
    checkAns(usersq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);

}

function reset(){
    started=false;
    gamesq=[];
    usersq=[];
    level=0;
}