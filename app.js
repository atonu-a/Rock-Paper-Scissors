let userScore = 0;
let compScore = 0;
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");


// Random choice from computer
const genCompchoice = () =>{
    const options = ["Rock", "Paper", "Scissors"];
    const idx = Math.floor(Math.random()*3);
    return options[idx];
} 
const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    const comChoice = genCompchoice();
    console.log("cumputer choice = ", comChoice);

    if(userChoice === comChoice){
        draw();
    }
    else{

        let userWin = true;
        if(userChoice ==="Rock"){
            userWin = comChoice === "Paper" ? false : true;
        } else if(userChoice ==="Paper"){
            userWin = comChoice === "Scissors" ? false : true;
        } else{
            userWin = comChoice === "Rock" ? false : true;
        }

        winningMsg(userWin, userChoice, comChoice);
    };
};


// User's choice
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


// Draw function

const draw = () =>{
    msg.innerText = "Game was draw! Try again.";
    msg.style.backgroundColor = "white";
    msg.style.color = "#081b31";
}

// Winning Message
const winningMsg = (userWin, userChoice, comChoice) =>{
    if(userWin){
        msg.innerText = `Congratulations! Your ${userChoice} has beaten ${comChoice}.`;
        msg.style.backgroundColor = "green";
        userScore++;
        user.innerText = `${userScore}`
    }
    else{
        msg.innerText = `Alas! ${comChoice} has beaten your ${userChoice}.`;
        msg.style.color = "white";
        msg.style.backgroundColor = "red";
        compScore++;
        comp.innerText = `${compScore}`;
    }
}