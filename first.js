let userscore =0;
let compscore =0;

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg")

const gencomputerChoice=()=>{
    const options=["paper","rock","scissors"];
    const randIdx=math.floor(math.random() *3);
    return options[randIdx];
};

const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was Draw";
};

const showWnner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        console.log("you win!");
        msg.innerText=`you win your ${userchoice}  beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        console.log("you lose");
        msg.innerText=`yot lose. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userchoice)=>{
    console.log("user choice =",userchoice);
    const compChoice = gencomputerChoice;
    console.log("comp choice =",compChoice)
    if(userchoice == compChoice){
       drawGame();
    }
    else{
        let userWin=true;
        if(userchoice =="rock"){
            userWin=compChoice == "paper"?false:true;
        }
        else if(userchoice =="paper"){
       userWin=compChoice =="scissors"?false:true;
        }
        else{
           userWin= compChoice =="rock"?false:true;
        }
        showWnner(userWin);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("clicck",()=>{
       const userchoice=choice.getAttribute("id");
       console.log("choice was clicked",userscore) ;
       playGame(userchoice);
    });
});