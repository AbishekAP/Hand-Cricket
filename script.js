const $score=document.querySelectorAll(".score");
const $userHit=document.querySelector("#user-hit");
const $opppentHit=document.querySelector("#opponent-hit");
const $result=document.querySelector("#result-show-text");
const $userScore=document.querySelector(".user-score");
const $blur=document.querySelector(".blur");
const $gameResult=document.querySelector(".game-result-show");
const $quitBtn=document.querySelector("#btn-quit");
const $yesBtn=document.querySelector("#btn-yes");
const $audio=document.querySelector("#audio");
const $playBtn=document.querySelector("#audio-play-btn");
var totalUserScore=0;
var userScore=0;
let flag=0;
$playBtn.addEventListener("click",()=>{
    if(flag==1){
        $audio.play();
        flag=0;
    }
    else{
        $audio.pause();
        flag=1;
    }
})
$score.forEach((e)=>{
    e.addEventListener('click',()=>{
        $userHit.src=e.src;
        userScore=parseInt(e.id);
        totalUserScore=totalUserScore+userScore;
        $userScore.innerHTML=totalUserScore;
        console.log(userScore);
        opponentPlay(userScore); 
    });
});
function opponentPlay(user){
    var opponent=Math.floor((Math.random()*7));
    switch(opponent){
        case 0:
            $opppentHit.src="img/score-0.png";
        break;
        case 1:
            $opppentHit.src="img/score-1.png";
        break;
        case 2:
            $opppentHit.src="img/score-2.png";
        break;
        case 3:
            $opppentHit.src="img/score-3.png";
        break;
        case 4:
            $opppentHit.src="img/score-4.png";
        break;
        case 5:
            $opppentHit.src="img/score-5.png";
        break;
        case 6:
            $opppentHit.src="img/score-6.png";
        break;
        default:
            console.log("sorry!");
        break;
    }
    resultCheck(user,opponent);
}
function resultCheck(user,opponent){
    if(user == opponent){
        $result.innerHTML=`OUT!`;
        blur(1);
        setTimeout(()=>{
            $result.innerHTML=`VS`;
            gamePlayAgain()
        },5000);
    }
    else{
        $result.innerHTML=`VS`;
    }
}
function gamePlayAgain(){
    $gameResult.style.display="flex";
}
$quitBtn.addEventListener('click',()=>{
    console.log("thanks");
    location.assign("/index.html")

});
$yesBtn.addEventListener('click',()=>{
    location.replace("/index.html")
});

function blur(flag){
    if(flag==1){
        $blur.style.display="flex";
        flag=0;
    }
    else
    {
        $blur.style.display="none";
        flag=1;
    }
}