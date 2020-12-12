let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const restart_btn = document.getElementById("restart")

getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

convertToWord = (letter) => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

win = (userChoice , computerChoice) => {
    const smallUserWord = "user".fontsize(2).sub();
    const smallComputerWord = "comp".fontsize(2).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You win! ❤️`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('green-glow');
    },500);
}

lose = (userChoice , computerChoice) => {
    const smallUserWord = "user".fontsize(2).sub();
    const smallComputerWord = "comp".fontsize(2).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You lose...  💩`;   
    userChoice_div.classList.add('red-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('red-glow');
    },500);
}

draw = (userChoice , computerChoice) => {
    
    const smallUserWord = "user".fontsize(2).sub();
    const smallComputerWord = "comp".fontsize(2).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. Tie  😟`;   
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('grey-glow');
    },500);
}


game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice , computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice , computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice , computerChoice);
            break;            
    }
}

restart = () =>{
    console.log("hekjkfh")
    location.reload();
}

main = () => {
    rock_div.addEventListener('click' , () => {
        game("r");
    })

    paper_div.addEventListener('click',() => {
        game("p");
    })

    scissors_div.addEventListener('click',() => {
        game("s");
    })

    restart_btn.addEventListener('click',() => {
        userScore = 0;
        computerScore = 0;
    })

}

main();