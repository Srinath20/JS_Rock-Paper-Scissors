function getComputerChoice(){
    const arr = ["Rock","Paper","Scissor"];
    return arr[Math.floor(Math.random()*arr.length)];
    }
function getUserChoice(){
    const item = prompt("Enter your choice amoung Rock, Paper, Scissor");
    return item;
}   

function play(){
    const item2 = getComputerChoice();
    console.log("Computer chose "+ item2);
    const item = getUserChoice(); 
    console.log("You chose "+ item);
    if(item=="Rock" && item2=="Paper"){
        console.warn("You lost!!!");
        }
        else if(item=="Rock" && item2=="Scissor"){
        console.log("You won");
        }
        else if(item=="Rock" && item2=="Rock"){
            console.error("Both chose same item, its a tie!!");
        }
        else if(item=="Paper" && (item2=="Scissor")){
        console.warn("You lost!!!");
        }
        else if(item=="Paper" && item2=="Rock"){
        console.log("You won");
        }
        else if(item=="Paper" && item2=="Paper"){
            console.error("Both chose same item, its a tie!!");
        }
        else if(item=="Scissor" && item2=="Rock"){
        console.warn("You lost!!!");
        }
        else if(item=="Scissor" && item2=="Paper"){
        console.log("You won");
        }
        else if(item=="Scissor" && item2=="Scissor"){
            console.error("Both chose same item, its a tie!!");
        }
        else {
            console.warn("Please make sure you give the right input.\n REFER instruction if needed.");
        }
}
function myFunction() {
    document.getElementById("demo").innerHTML = "1) Open Console(ctrl+shift+J[For windows] or cmd+option+J[For Mac])\<br><br>2)Hit the button in Play Section.\<br><br>3)Enter your choice amoung Rock, Paper, Scissor in the pop-up.\<br><br>4)After entering your choice, hit ok button from pop-up.\<br><br><b><u>NOTE:)Make sure you enter the word as it is displayed in the POP-UP.</u></b>\<br><br>5)View your result in console.\<br><br>6)Thank you.&#128512;";
  }

const bg = document.getElementById('GameInstructions');
function colorChange(){
        bg.style.backgroundColor='blue';
}
function colorRemove(){
    bg.style.backgroundColor='#DDDDDD';
}
bg.addEventListener("mouseenter",colorChange);
bg.addEventListener("mouseout",colorRemove);


