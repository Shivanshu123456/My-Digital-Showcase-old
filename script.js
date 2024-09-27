console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let turn = "X";
let gameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 5, 15],
        [6, 7, 8, 5, 15, 0],
        [0, 3, 6, -5, 5, 90],
        [1, 4, 7, 5, 15, 0],
        [2, 5, 8, 5, 15, 0],
        [0, 4, 8, 5, 15, 0],
        [2, 4, 6, 5, 15, 0],
    ];

    wins.forEach(e => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
            boxtext[e[0]].innerText !== '') {
            
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
            gameover = true;
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameover) {
            boxtext.innerText = turn;
            audioturn.play();
            checkWin();
            if (!gameover) {
                turn = changeTurn();
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    });
});

let reset = document.querySelector('.reset');
if (reset) {
    reset.addEventListener('click', () => {
        let boxtext = document.querySelectorAll('.boxtext');
        Array.from(boxtext).forEach(element => {
            element.innerText = "";
        });
        turn = 'X';
        gameover = false;
        document.querySelector(".info").innerText = "Turn for " + turn;
    });
} else {
    console.error('Reset button not found. Please ensure there is an element with class "reset".');
}
