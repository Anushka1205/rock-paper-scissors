let imageArr=[
    "./assets/paper-hand.png",
    "./assets/rock-hand.png",
    "./assets/scissors-hand.png"
]

// logic for score
let score1=0
let score2=0
let userScore = document.getElementById("userScore");
let compScore = document.getElementById("compScore");

// function to create computer hand image
let CompImg = document.getElementById("compImage")
function Compsign(){
    let compImg=document.createElement("img");
    let Index=getRandomInt(0,imageArr.length);
    let Compsrc=imageArr[Index];
    compImg.src=Compsrc;
    CompImg.innerHTML= `<img src="${Compsrc}">`;
 
    if((imgholder.innerHTML==`<img src="${imageArr[0]}">` &&  CompImg.innerHTML==`<img src="${imageArr[1]}">`)||
    (imgholder.innerHTML==`<img src="${imageArr[1]}">` &&  CompImg.innerHTML==`<img src="${imageArr[2]}">`) ||
    (imgholder.innerHTML==`<img src="${imageArr[2]}">` &&  CompImg.innerHTML==`<img src="${imageArr[0]}">`)
    ){
        console.log("you won"); 
        score1+=1;
        userScore.innerText =score1;
        if(score1==5){
            document.getElementById("scoresee").innerText="You Won The Game";
            showResult()

        }
    }
    else if(imgholder.innerHTML==CompImg.innerHTML){
        console.log("tie")

    }
    else{
        score2 += 1
        compScore.innerText = score2
        if(score2==5){
            document.getElementById("scoresee").innerText="Comp Won The Game";
            showResult()
        }
    }

}

// function to show result

function showResult(){
    let resultscrn=document.getElementById("result");
    resultscrn.style.display="flex"   
    document.getElementById("logos").style.display="none"
}

function playAgain(){
    window.location.href='./index.html'
}


// adding eventlisner and computer function to hand logo
let Rock = document.getElementById("rock");
let Paper = document.getElementById("paper");
let Scissors = document.getElementById("scissors");
let imgholder=document.getElementById("sign");



let score=0;
function calcScore(){
    Rock.addEventListener('click',function(){
        imgholder.innerHTML= '<img  src="./assets/rock-hand.png">';
        Compsign();
    })
    Paper.addEventListener('click',function(){
        imgholder.innerHTML= '<img  src="./assets/paper-hand.png">';
        Compsign();
    })
    Scissors.addEventListener('click',function(){
        imgholder.innerHTML= '<img  src="./assets/scissors-hand.png">';
        Compsign();
    })


}
calcScore()











// helper function to get random integer
function getRandomInt(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    let randomno= Math.floor(Math.random()*(max-min)+min);
    return randomno

}