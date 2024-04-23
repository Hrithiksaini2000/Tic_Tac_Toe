
let button = document.querySelectorAll(".button_background");

let next_round = document.getElementById("next_round")

let reset = document.getElementById("reset")

let Player_result = document.getElementById("Player_result")

let next = "X"

let X = 0

let O = 0

let Player_score_1 = document.getElementById("Player_score_1")

let Player_score_2 = document.getElementById("Player_score_2")

let index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

button.forEach(function (btn) {
    btn.addEventListener("click", function () {
        if (this.id == index[this.id]) {
            if (next == "X") {
                btn.innerHTML = "X"
                next = "O"
                index[this.id] = "X"
                Player_result.innerHTML="Player 2 Turn"
            }
            else {
                btn.innerHTML = "O"
                next = "X"
                index[this.id] = "O"
                Player_result.innerHTML="Player 1 Turn"
            }
            // console.log(index)
        }
        winner()
        draw()
    })
})

let winner = () => {
    // if(index[1]=="X" && index[2]=="X" && index[3]=="X" || index[4]=="X" && index[5]=="X" && index[6]=="X" || index[7]=="X" && index[8]=="X" && index[9]=="X" || index[1]=="X" && index[4]=="X" && index[7]=="X" || index[2]=="X" && index[5]=="X" && index[8]=="X" || index[3]=="X" && index[6]=="X" && index[9]=="X" || index[1]=="X" && index[5]=="X" && index[9]=="X" || index[3]=="X" && index[5]=="X" && index[7]=="X" || index[1]=="O" && index[2]=="O" && index[3]=="O" || index[4]=="O" && index[5]=="O" && index[6]=="O" || index[7]=="O" && index[8]=="O" && index[9]=="O" || index[1]=="O" && index[4]=="O" && index[7]=="O" || index[2]=="O" && index[5]=="O" && index[8]=="O" || index[3]=="O" && index[6]=="O" && index[9]=="O" || index[1]=="O" && index[5]=="O" && index[9]=="O" || index[3]=="O" && index[5]=="O" && index[7]=="O")
    if (index[1] == index[2] && index[2] == index[3] || index[4] == index[5] && index[5] == index[6] || index[7] == index[8] && index[8] == index[9] || index[1] == index[4] && index[4] == index[7] || index[2] == index[5] && index[5] == index[8] || index[3] == index[6] && index[6]==index[9] || index[1]==index[5]&& index[5]==index[9] || index[3]==index[5] && index[5]==index[7]) {
        if(next=="O"){
            Player_result.innerHTML="Player X Wins"
            Player_score_1.innerHTML = X + 1;
            X++;
            // console.log("Player X Wins")
            stop()
        }
        else{
            Player_result.innerHTML="Player O Wins"
            Player_score_2.innerHTML = O + 1;
            O++;
            // console.log("Player O Wins")
            stop()
        }
    }
}
let draw =()=>{
if (index[1]!==1 && index[2]!==2 && index[3]!==3 && index[4]!==4 && index[5]!==5 && index[6]!==6 && index[7]!==7 && index[8]!==8 && index[9]!==9){
        console.log("The Match Is Draw")
    }
}

let stop = () =>{
    button.forEach(function(btns){
        btns.disabled=true
    })
}
 
next_round.addEventListener("click", function(){
    button.forEach(function(btnes){
        Player_result.innerHTML="Player 1 Turn"
        btnes.innerHTML="."
        btnes.disabled=false
    })
    for(let i=0; i<10; i++){
        index[i]=i
    }
    next="X"
})

reset.addEventListener("click", function(){
    button.forEach(function(btnes){
        Player_result.innerHTML="Player 1 Turn"
        btnes.innerHTML="."
        btnes.disabled=false
        Player_score_1.innerHTML = ""
        Player_score_2.innerHTML = ""
    })
    for(let i=0; i<10; i++){
        index[i]=i
    }
    next="X"
})