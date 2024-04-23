let button = document.querySelectorAll(".button_background")

let next = "X"

let index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let next_round = document.getElementById("next_round")

let reset = document.getElementById("reset")

let player_result = document.getElementById("Player_result")

let player_score_1 = document.getElementById("Player_score_1")

let player_score_2 = document.getElementById("Player_score_2")

let X = 0

let O = 0 

button.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (this.id == index[this.id]) {
            if (next == "X") {
                btn.innerHTML = "X"
                next = "O"
                index[this.id] = "X"
                player_result.innerHTML="Player 2 Turn"
            } else {
                btn.innerHTML = "O"
                next = "X"
                index[this.id] = "O"
                player_result.innerHTML="Player 1 Turn"
            }
        }
        winner()
        draw()
    })
})

let winner = () => {
    if (index[1] == index[2] && index[2] == index[3] || index[4] == index[5] && index[5] == index[6] || index[7] == index[8] && index[8] == index[9] || index[1] == index[4] && index[4] == index[7] || index[2] == index[5] && index[5] == index[8] || index[3] == index[6] && index[6] == index[9] || index[1] == index[5] && index[5] == index[9] || index[3] == index[5] && index[5] == index[7]) {
        if (next == "O") {
            player_result.innerHTML="Player 1 wins"
            player_score_1.innerHTML = X + 1
            X++
            stop()
        } else {
            player_result.innerHTML="Player 2 Wins"
            player_score_2.innerHTML= O + 1
            O++
            stop()
        }
    }
}

let draw = () => {
    if (index[1]!==1 && index[2]!==2 && index[3]!==3 && index[4]!==4 && index[5]!==5 && index[6]!==6 && index[7]!==7 && index[8]!==8 && index[9]!==9) {
        player_result.innerHTML="Match Is Drawn"
    }
}

let stop = () => {
    button.forEach((btn) => {
        btn.disabled = true
    })
}

next_round.addEventListener("click", function(){
    button.forEach((btn)=>{
        btn.disabled=false
        btn.innerHTML="."
        player_result.innerHTML="Player 1 Turn"
    })
    for(let i=0; i<10; i++){
        index[i]=i
    }
    next="X"
})

reset.addEventListener("click", function(){
    button.forEach((btn)=>{
        btn.disabled=false
        btn.innerHTML="."
        player_score_1.innerHTML=""
        player_score_2.innerHTML=""
        player_result.innerHTML="Player 1 Turn"
    })
    for(let i=0; i<10; i++){
        index[i]=i
    }
    next="X"
})