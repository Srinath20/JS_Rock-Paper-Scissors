function getComputerChoice(){
    const arr = ["Rock","Paper","Scissor"];
    return arr[Math.floor(Math.random()*arr.length)];
    }  

function rock(){
    const item = "Rock";
    const item2 = getComputerChoice();
    console.log("Computer chose "+ item2);
    if(item2=="Paper"){
        console.warn("You lost!!!");
        }
        else if(item2=="Scissor"){
        console.log("You won");
        }
        else if(item2=="Rock"){
            console.error("Both chose same item, its a tie!!");
        }
}

function paper(){
    const item = "Paper";
    const item2 = getComputerChoice();
    console.log("Computer chose "+ item2);
    if(item2=="Scissor"){
        console.warn("You lost!!!");
        }
        else if(item2=="Rock"){
        console.log("You won");
        }
        else if(item2=="Paper"){
            console.error("Both chose same item, its a tie!!");
        }
}

function scissor(){
    const item = "Scissor";
    const item2 = getComputerChoice();
    console.log("Computer chose "+ item2);
    if(item2=="Rock"){
        console.warn("You lost!!!");
        }
        else if(item2=="Paper"){
        console.log("You won");
        }
        else if(item2=="Scissor"){
            console.error("Both chose same item, its a tie!!");
        }
}



