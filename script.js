let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;
let xScore = 0;
let yScore = 0;

boxes.forEach(e =>{
    e.innerHTML = "";
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML = turn;
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
})

function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "85px";  
    } else {
        turn = "X";
        document.querySelector(".bg").style.left = "0px";  
    }
}

function checkWin(){
    let win = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i < win.length; i++){
        let c0 = boxes[win[i][0]].innerHTML;
        let c1 = boxes[win[i][1]].innerHTML;
        let c2 = boxes[win[i][2]].innerHTML;

        if(c0 != "" && c0 === c1 && c0 === c2){
            isGameOver = true;
            if(turn === "X"){
                document.querySelector(".X-score").innerHTML = xScore + 1;
                xScore += 1;
            }else{
                document.querySelector(".Y-score").innerHTML = yScore + 1;
                yScore += 1;
            }
            document.querySelector("#results").innerHTML = turn + " win";
            document.querySelector("#play-again").style.display = "inline";
            document.querySelector("#reset").style.display = "inline";


            for(let j = 0; j < 3; j++){
                boxes[win[i][j]].style.backgroundColor = "#E7B10A";
                boxes[win[i][j]].style.color = "#000";

            }
        }
    }
}

function checkDraw(){
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "")
                isDraw = false;
        })
    

        if(isDraw){
            isGameOver = true;
            document.querySelector(".X-score").innerHTML = xScore + 1;
            document.querySelector(".Y-score").innerHTML = yScore + 1;
            xScore += 1;
            yScore += 1;
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline";
            document.querySelector("#reset").style.display = "inline";
        }
    }
}

document.querySelector("#play-again").addEventListener("click", ()=>{
    isGameOver = false;
    turn = "X";

    document.querySelector(".bg").style.left = "0px";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";
    document.querySelector("#reset").style.display = "none";

    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff";
    })
})

document.querySelector("#reset").addEventListener("click", ()=>{
    isGameOver = false;
    turn = "X";
    xScore = 0;
    yScore = 0;

    document.querySelector(".bg").style.left = "0px";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";
    document.querySelector("#reset").style.display = "none";
    document.querySelector(".X-score").innerHTML = xScore;
    document.querySelector(".Y-score").innerHTML = yScore;



    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff";
    })
})