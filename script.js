function getComputerChoice(){
    const arr = ["Rock","Paper","Scissor"];
    return arr[Math.floor(Math.random()*arr.length)];
    }  

function rock(){
    const item = "Rock";
    const item2 = getComputerChoice();
    document.getElementById("comp_choice").innerText = "Computer Chose "+ item2;
    if(item2=="Paper"){
        document.getElementById("result").innerText = "Sorry,you lost";
        }
        else if(item2=="Scissor"){
            document.getElementById("result").innerText = "You Won";
        }
        else if(item2=="Rock"){
            document.getElementById("result").innerText = "Its a tie";
        }
}

function paper(){
    const item = "Paper";
    const item2 = getComputerChoice();
    document.getElementById("comp_choice").innerText = "Computer Chose "+ item2;
    if(item2=="Scissor"){
        document.getElementById("result").innerText = "Sorry,you lost";
        }
        else if(item2=="Rock"){
            document.getElementById("result").innerText = "You Won";
        }
        else if(item2=="Paper"){
            document.getElementById("result").innerText = "Its a tie";
        }
}

function scissor(){
    const item = "Scissor";
    const item2 = getComputerChoice();
    document.getElementById("comp_choice").innerText = "Computer Chose "+ item2;
    if(item2=="Rock"){
        document.getElementById("result").innerText = "Sorry,you lost";
        }
        else if(item2=="Paper"){
            document.getElementById("result").innerText = "You Won";
        }
        else if(item2=="Scissor"){
            document.getElementById("result").innerText = "Its a tie";
        }
}



