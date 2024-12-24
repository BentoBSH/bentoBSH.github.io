let board = ['','','','','','','','',''];
let simbols = ['x', 'o'];
let playerTime = 0; 
let gameOver = false;


function handleMove(position){


    board[position-1] = simbols[playerTime]

    gameOver = isWin();

    if (playerTime == 0) {
        playerTime = 1;
    } else {
        playerTime = 0;
    }
}

function isWin(){
    
    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ]
    for(let i=0; i<winStates.length; i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            alertar(playerTime);
            return true
        }
            if (gameOver){
        alertar(playerTime);
        return
    } 
    }
}


function resetar(x){
    if (x < 1){
        //nova rodada
        board = ['','','','','','','','','']; 
        for (let a=1; a<=board.length; a++){
            document.getElementById(`${a}`).innerHTML= '';
        }
        gameOver = false;
        console.log('clicou nova rodada');
    }if (x > 0){
        //Zerar placar e nova rodada 
        console.log('clicou zerar');
}
}