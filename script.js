console.log("welcome to the Game of Rock,Paper,Scissors for 5 Rounds!!!");
let playerScore=0;
let computerScore=0;
function getComputerChoice()
{
    let rock="Rock";
    let scissors="Scissors";
    let paper="Paper";
    let ranNumber=Math.random();
    if(ranNumber<=0.33)
    return rock;
    else if(ranNumber<=0.66)
    return scissors;
    else 
    return paper;
}

function playRound(capPlayerSelection, computerSelection) 
{
    // console.log(capPlayerSelection,computerSelection)
    if((capPlayerSelection==="Rock")&&(computerSelection==="Rock"))
    {
    return "Its a tie";
    }
    else if((capPlayerSelection==="Paper")&&(computerSelection==="Paper"))
    {
    return "Its a tie";
    }
    else if((capPlayerSelection==="Scissors")&&(computerSelection==="Scissors"))
    {
    return "Its a tie";
    }
    else if((capPlayerSelection==="Rock")&&(computerSelection==="Scissors"))
    {
        playerScore++;
        return "You Win.Rock beats Scissors!";
    }
    else if((capPlayerSelection==="Rock")&&(computerSelection==="Paper"))
    {
        computerScore++;
        return "You loose.Paper beats Rock!";
    }
    else if((capPlayerSelection==="Paper")&&(computerSelection==="Scissors"))
    {
        computerScore++;
        return "You loose.Scissors beat Paper!"
    }
    else if((capPlayerSelection==="Paper")&&(computerSelection==="Rock"))
    {
        playerScore++;
        return "You win.Paper beats Rock!"
    }
    else if((capPlayerSelection==="Scissors")&&(computerSelection==="Rock"))
    {
        computerScore++;
        return "You loose.Rock beats Scissors!";
    }
    else if((capPlayerSelection==="Scissors")&&(computerSelection==="Paper"))
    {
        playerScore++;
        return "You win.Scissors beat Paper!"
    }
}
  
    for(let i=0;i<5;i++)
    {
        const playerSelection =prompt("What is your choice?",'');

        if(playerSelection==null)
        {
        console.log("Entered a wrong choice!!!!!");
        throw new Error("Program terminated");
      
        }
        if(playerSelection===("")) 
        {
          console.log("Your choice is Empty",playerSelection)
          console.log("Entered a wrong choice!!!!!");
          throw new Error("Program terminated");
        }
        let capPlayerSelection=capitalizePlayerSelection(playerSelection);
        
        if(playerSelection.toLowerCase() === ("rock")) 
        {
          console.log("Your choice is",capPlayerSelection)
        }
        else if(playerSelection.toLowerCase() === ("paper")) 
        {
          console.log("Your choice is",capPlayerSelection);
        }
        else if(playerSelection.toLowerCase() === ("scissors")) 
        {
          console.log("Your choice is",capPlayerSelection);
        }
        let computerSelection = getComputerChoice();
        console.log(`Computer chose ${computerSelection}`)
        console.log(playRound(capPlayerSelection, computerSelection));
       }

    function capitalizePlayerSelection(playerSelection)
    { 
        let cap=playerSelection.charAt(0);
        let str1=playerSelection.slice(1)
        let cap2=cap.toUpperCase();
        let str2=cap2+str1;
        return str2;
    }
 
  
  if(playerScore>computerScore)
  {
    console.log("Player Wins");
    console.log(playerScore)
  }
  else
  {
    console.log("Comp Wins");
    console.log(computerScore)
  }
  if(playerScore==computerScore)
    console.log("Its a tie!!!!")
