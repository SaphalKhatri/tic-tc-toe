let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#resetbutton");
let newGame= document.querySelector(".play");
let msg = document.querySelector(".msg");
let msgContainer= document.querySelector(".msgcont");

let turn0 = true; //player 1
const  win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("sdf");
        if(turn0){
            box.innerText= "0";
            turn0= false;
        }
        else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled= true;
       checkWin();
        
    });
});

const showiwnner=(winner)=>{
    msg.innerText=`winner is ${winner}`;
    msgcont.classlist.remove("hide");
    disablebox();

};
//function call
 const  checkWin=() =>{
    for(let pattern of win){
        let  val1= boxes[pattern[0]].innerText;
           let val2= boxes[pattern[1]].innerText;
           let val3=  boxes[pattern[2]].innerText;
             if(val1 !=""&& val2 !=""&& val3 !="") {
                if(val1==val2 && val2==val3){
                    console.log("winnwe", val1);
                    showiwnner(val1);
                }
             }
    }

 };
 const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

    
 }

 const enablegame=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

 }
 const restBtn=()=>{
    turn0=true;
    enablegame();
    msgContainer.classlist.add("hide");
 }

 newGame.addEventListener("click",restBtn);
 resetBtn.addEventListener("click",restBtn);