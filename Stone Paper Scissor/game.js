let userpoint=0;
let comppoint=0;
function updateChoice(userchoice)
{   
    if(userchoice =="stone")                                                 //for user
    document.getElementById('userimg').src="rock-user.png";
    else if(userchoice =="paper")
    document.getElementById('userimg').src="paper-user.png";
    else
    document.getElementById('userimg').src="scissors-user.png";

    let randomNumber=Math.ceil(Math.random()*3);                             //for computer
    let computerChoice;
    if(randomNumber==1)
    computerChoice="stone";
    else if(randomNumber==2)
    computerChoice="paper"
    else
    computerChoice="scissor"
      
    if(computerChoice=="stone")
    document.getElementById('compimg').src="rock.png";   
    else if(computerChoice=="paper")
    document.getElementById('compimg').src="paper.png";
    else
    document.getElementById('compimg').src="scissors.png";

    checkwinner(userchoice,computerChoice);
}

function checkwinner(userchoice,computerChoice)
{
    if (userchoice === computerChoice)
    updateMessage("Its a tie match!!")
    else if (userchoice === "stone")
    {
      if (computerChoice === "paper")
      {
        updateMessage("Oops! You loose");
        updateCompScore()
      }
     else
     {
        updateMessage("Congrats,You Win");
        updateUserScore()
     }
    }
    else if (userchoice === "paper")
    {
      if (computerChoice === "scissor")
      {
        updateMessage("Oops! You loose");
        updateCompScore()
      }
     else
     { 
        updateMessage("Congrats,You Win");
        updateUserScore()
     }
    }
    else if (userchoice === "scissor")
    {
      if (computerChoice === "stone")
      {
        updateMessage("Oops! You loose");
        updateCompScore()
      }
      else
      {
        updateMessage("Congrats,You Win");
        updateUserScore()
      }
    }
}

function updateMessage(msg)
{
    document.getElementById("result").innerHTML=msg;
}

function updateUserScore()
{
   userpoint+=1;
   document.getElementById("userscore").innerHTML=userpoint;
}

function updateCompScore()
{
  comppoint+=1;
  document.getElementById("compscore").innerHTML=comppoint;
}