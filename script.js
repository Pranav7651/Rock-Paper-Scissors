const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let resultIs;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice=e.target.id;
    if(userChoice=='rock'){
        userChoiceDisplay.innerHTML=`rock <span class="rock">🪨</span>`;
    }
    
    else if(userChoice=='paper'){
        userChoiceDisplay.innerHTML=`paper <span class="paper">📰</span>`;
    }
    
    else if(userChoice=='scissors'){
        userChoiceDisplay.innerHTML=`scissors <span class="scissor">✂️</span>`;
    }
    generateComputerChoice();
    generateResult();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3) ;

    if(randomNumber==0){
        computerChoice="rock";
        computerChoiceDisplay.innerHTML=`rock <span class="rock">🪨</span>`;
    }
    else if(randomNumber==1){
        computerChoice="paper";
        computerChoiceDisplay.innerHTML=`paper <span class="paper">📰</span>`;;
    }
    else if(randomNumber==2){
        computerChoice="scissors";
        computerChoiceDisplay.innerHTML=`scissors <span class="scissor">✂️</span>`;
    }
}

function generateResult(){

    if(computerChoice==userChoice){
        resultIs=`Its a Draw! <i class="fa fa-refresh" aria-hidden="true"></i>`;
        resultDisplay.innerHTML=resultIs;
    }
    
    else if(computerChoice=="rock"){
        if(userChoice=='paper') {
            resultIs=`You Won! <span class="won">👍</span>`;
            resultDisplay.innerHTML=resultIs;
        }
        else if(userChoice=='scissors') {
            resultIs=`You Lost! <span class="lost">👎</span>`;
            resultDisplay.innerHTML=resultIs;
        }
    }
    
    else if(computerChoice=="paper"){
        if(userChoice=='rock') {
            resultIs=`You Lost! <span class="lost">👎</span>`;
            resultDisplay.innerHTML=resultIs;
        }
        else if(userChoice=='scissors') {
            resultIs=`You Won! <span class="won">👍</span>`;
            resultDisplay.innerHTML=resultIs;
        }
    }
    
    else if(computerChoice=="scissors"){
        if(userChoice=='rock') {
            resultIs=`You Won! <span class="won">👍</span>`;
            resultDisplay.innerHTML=resultIs;
        }
        else if(userChoice=='paper') {
            resultIs=`You Lost! <span class="lost">👎</span>`;
            resultDisplay.innerHTML=resultIs;
        }
    }
}