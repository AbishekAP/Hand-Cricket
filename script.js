const $score=document.querySelectorAll(".score");
const $userHit=document.querySelector("#user-hit");
const $opppentHit=document.querySelector("#opponent-hit");
const $result=document.querySelector("#result-show-text");
const $userScore=document.querySelector(".user-score");
const $opponentScore=document.querySelector(".opponent-score");
const $blur=document.querySelector(".blur");
const $gameResult=document.querySelector(".game-result-show");
const $quitBtn=document.querySelector("#btn-quit");
const $playAgainBtnBtn=document.querySelector("#btn-play-again");
const $audio=document.querySelector("#audio");
const $playBtn=document.querySelector("#audio-play-btn");
const $gamePlayChoose=document.querySelector(".game-play-choose");
const $batBtn=document.querySelector("#btn-bat");
const $bowlBtn=document.querySelector("#btn-bowl");
const $userPlay=document.querySelector("#user-play");
const $opponentPlay=document.querySelector("#opponent-play");
const $gameResultScore=document.querySelector("#game-result-score");
var totalUserScore=0;
var totalOpponentScore=0;
var userRun=0;
var opponentRun=0;
var userBat=0;
var playCount=0;
let flag=1;
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
           userRun=parseInt(e.id);
           opponentPlay();
           userScore(userRun)
       });
});

function userScore(score){
    if(userBat==1){
        totalUserScore=totalUserScore+score;
        $userScore.innerHTML=totalUserScore;
    }
}
function opppontScore(score){
    if(userBat==0){
        totalOpponentScore=totalOpponentScore+score;
        $opponentScore.innerHTML=totalOpponentScore;
        $userPlay.innerHTML=`Bowling`;
        $opponentPlay.innerHTML=`Batting`
    }
}
$batBtn.addEventListener('click',()=>{
    $gamePlayChoose.style.display="none";
    blur(0);
    $userPlay.innerHTML=`Batting`;
    $opponentPlay.innerHTML=`Bowling`;
    userBat=1;
});
$bowlBtn.addEventListener('click',()=>{
    $gamePlayChoose.style.display="none";
    blur(0);
    $userPlay.innerHTML=`Bowling`;
    $opponentPlay.innerHTML=`Batting`;
    userBat=0;
});
function opponentPlay(){
    opponentRun=Math.floor((Math.random()*7));
    opppontScore(opponentRun)
    switch(opponentRun){
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
    resultCheck(userRun,opponentRun);
}
//result check
function resultCheck(user,opponent){
    if(user == opponent){
        $result.innerHTML=`OUT!`;
        blur(1);
        setTimeout(()=>{
            gameReset();
            blur(0);
            $result.innerHTML=`VS`;
            playCount++;
        },5000);
        if(userBat==1){
            userBat=0;
            $userPlay.innerHTML=`Bowling`;
            $opponentPlay.innerHTML=`Batting`;
        }
        else{
            userBat=1;
            $userPlay.innerHTML=`Batting`;
            $opponentPlay.innerHTML=`Bowling`;
        }
    }
    if(playCount==2){
        if(totalUserScore>totalOpponentScore){
            $result.innerHTML=`Win!`;
            blur(1);
            setTimeout(()=>{
                gameResultScore('Win')
            },5000)
        }
        else if(totalUserScore<totalOpponentScore){
            $result.innerHTML=`Lose!`;
            blur(1);
            setTimeout(()=>{
                gameResultScore('Lose')
            },5000)
        }
        else{
            $result.innerHTML=`Tie!`;
            blur(1);
            setTimeout(()=>{
                gameResultScore('Tie')
            },5000)
        }
    }
    else if(playCount==1){
        if(userBat=1){
            if(totalUserScore>totalOpponentScore){
                $result.innerHTML=`Win!`;
                blur(1);
                setTimeout(()=>{
                    gameResultScore('Win')
                },5000)
            }
        }
        else{
            if(totalUserScore<totalOpponentScore){
                $result.innerHTML=`Lose!`;
                blur(1);
                setTimeout(()=>{
                    gameResultScore('Lose')
                },5000)
            } 
        }
    }
    else{
        console.log("work")
    }
}
function gameResultScore(status){
    $gameResult.style.display="flex";
    $gameResultScore.innerHTML=`<p>${status} The Match!</p>
    <span>Your score     :${totalUserScore}</span>
    <span>Opponent score :${totalOpponentScore}</span>`
}
$quitBtn.addEventListener('click',()=>{
    console.log("thanks");
    location.assign("/index.html")

});
$playAgainBtnBtn.addEventListener('click',()=>{
    location.replace("/index.html")
});
// Background Blur 
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
//Game Reset
function gameReset(){
    $userHit.src="img/score-0.png";
    $opppentHit.src="img/score-0.png";
}