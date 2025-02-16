let userscore=0;
let compscore=0;
 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const uscore=document.querySelector("#user-score");
 const cscore=document.querySelector("#comp-score");
 const gencompchoise=()=>{
    const option=["rock","paper","scissors"];
   const no=Math.floor(Math.random()*3);
    return option[no];
 }
 const draw=()=>{
    console.log("draw");
    msg.innerText="Game was draw . play again ";
    msg.style.backgroundColor = "#081b31";
 }
 const showwinner=(userWin,UserChoice,compchoice)=>{
    if(userWin){
        console.log("you win!");
        msg.innerText=`you win! ${UserChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        uscore.innerText=userscore;
    }
    else{
        console.log("you loss");
        msg.innerText=`you lost. ${compchoice} beats ${UserChoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        cscore.innerText=compscore;
    }

 }
  const playgame=(UserChoice)=>{
    console.log("user choice =",UserChoice);
    //generate computer choice
    const compchoice=gencompchoise();
    console.log("comp choice =",compchoice);
   if(UserChoice===compchoice){
    //draw game
    draw();
   }else{
    let userWin=true;
    if(UserChoice==="rock"){
        //scissors paper
        userWin=compchoice==="paper" ? false:true;
    }else if(UserChoice==="paper"){
        //rock scissor
        userWin=compchoice==="scissors"? false:true;
    }else{
        //rock paper
        userWin=compchoice==="rock"? false:true;
    }
    showwinner(userWin,UserChoice,compchoice);
   }
 }
 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const UserChoice=choice.getAttribute("id");
       playgame(UserChoice);
    })
 })