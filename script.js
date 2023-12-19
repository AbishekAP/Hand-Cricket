const $score=document.querySelectorAll(".score");
const $userHit=document.querySelector("#user-hit");
const $opppentHit=document.querySelector("#opponent-hit");
var score='';
$score.forEach((e)=>{
    e.addEventListener('click',()=>{
        $userHit.src=e.src;
        var user=e.value;
        console.log(user);
        oppenentPlay(user); 
    });
});
function oppenentPlay(user){
    var oppenent=Math.floor((Math.random()*7));
    switch(oppenent){
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
    resultCheck(user,oppenent);
}
function resultCheck(){

}