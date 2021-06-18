'use strict';
const computerScore= document.getElementById('computer-score');
const userScore= document.getElementById('user-score');
let cScore = 0;
let pScore= 0;
function check(a){
    let userInput = a ;
    var choices = ['rock' , 'paper' , 'scissor'];
    var num = Math.trunc(Math.random()*3)
    let computerinput = choices[num];
    document.getElementById("igi").classList.remove("hidden");
    /*document.getElementById("user choice").innerText = "You chose:" + userInput ;
    document.getElementById("computer-choice").innerText = "Computer chose:" + computerinput ;
    */gameLogic(userInput,computerinput)
    
    }
 function gameLogic(userInput,computerinput){
     if(userInput===computerinput){
         console.log("its a draw");
         return;
     }
     if(userInput=='rock'){
         if(computerinput=='paper'){
             console.log('You lose');
             return;
         }
         else{
             console.log('You win');
             return;
         }
     }
     if(userInput=='paper'){
        if(computerinput=='scissor'){
            console.log('You lose');
            return;
        }
        else{
            console.log('You win');
            return;
        }
    }
    if(userInput=='scissor'){
        if(computerinput=='rock'){
            console.log('You lose');
            return;
        }
        else{
            console.log('You win');
            return;
        }
    }
 }
    
 function gamestart(){
    
    computerScore.innerText=cScore;
    userScore.innerText=pScore;
    console.log("Game Started!");
    document.getElementById("igi3").classList.remove("hidden"); 
    document.getElementById("igi2").classList.add("hidden");
    
};




