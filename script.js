'use strict';
const computerScore= document.getElementById('computer-score');
const userScore= document.getElementById('user-score');
let cScore = 0;
let pScore= 0;

function gameLogic(userInput,computerinput){
    if(userInput===computerinput){
        document.getElementById("result").innerText="Draw";
        console.log("its a draw");
        return;
    }
    if(userInput==='rock'){
        if(computerinput==='paper'){
            document.getElementById("result").innerText="You Lose";
            console.log('You lose');
            cScore++;
            return;
        }
        else{
            document.getElementById("result").innerText="You Win";
            console.log('You win');
            pScore++;   
            return;
        }
    }
    if(userInput==='paper'){
       if(computerinput==='scissor'){
        document.getElementById("result").innerText="You lose";
           console.log('You lose');
           cScore++;
           return;
       }
       else{
        document.getElementById("result").innerText="You Win";
           console.log('You win');
           pScore++;
           return;
       }
   }
   if(userInput==='scissor'){
       if(computerinput==='rock'){
           console.log('You lose');
           cScore++;
           return;
       }
       else{
           console.log('You win');
           pScore++;
           return;
       }
   }
}
function check(a){
    let userInput = a ;
    var choices = ['rock' , 'paper' , 'scissor'];
    var num = Math.trunc(Math.random()*3);
    let computerinput = choices[num];
    document.getElementById("igi").classList.remove("hidden");
    /*document.getElementById("user choice").innerText = "You chose:" + userInput ;
    document.getElementById("computer-choice").innerText = "Computer chose:" + computerinput ;*/
    
    
    document.getElementById("user choice").innerText= "You choose:" + userInput;
    document.getElementById("computer-choice").innerText="Computer choose:" + computerinput ;
    gameLogic(userInput,computerinput);
    computerScore.innerText=cScore;
    userScore.innerText=pScore;
    if(cScore==10 || pScore==10){
        if(cScore==10){
            alert("The machine won!");
            
            return;
        }
        if(pScore==10){
            alert("You won!");
            return;
        }
    }
    /*else{
        alert("Game Over! You Won!");
    }*/
    
    }
 
    
 function gamestart(){
    
    computerScore.innerText=cScore;
    userScore.innerText=pScore;
    console.log("Game Started!");
    document.getElementById("igi3").classList.remove("hidden"); 
    document.getElementById("igi2").classList.add("hidden");
    
};




