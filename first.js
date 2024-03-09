let boxes=document.querySelectorAll(".box");
let rset=document.querySelector("#rest");
let newgame=document.querySelector(".newbt");
let resgame=document.querySelector("#rest");
let msg=document.querySelector(".msg");
let turn0= true;
const winning=[ [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            box.style.color="purple";
            turn0=false
        } else{
            {
                box.innerText="X";
                box.style.color="blue";
                turn0=true;
            }
        }
        box.disabled=true;
        checkWinner();
    });
});
const resetgame=()=>{
    turn0=true;
    enablegame();
    msg.classList.add("hide");
    newgame.classList.add("hide1");
}
const showWinner=(winner) =>{
   msg.innerText=`Congratulation, Winner is ${winner}`;
   msg.style.color="green";
   msg.classList.remove("hide");
   newgame.classList.remove("hide1");
   Disablegame();
  

}
const checkWinner=() =>{
    for(let pattern of winning){
        let posval1= boxes[pattern[0]].innerText;
        let posval2= boxes[pattern[1]].innerText;
        let posval3= boxes[pattern[2]].innerText;
        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1===posval2 && posval2===posval3){
                showWinner(posval1);
            } else{
                msg.innerText="Please try again";
                msg.style.color="red";
            }
        }
    }

}
const Disablegame= () =>{
    for(let box of boxes){
    box.disabled=true;
    }
}
const enablegame = () =>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    }
}
resgame.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);
