const gameboard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    return { board };
})();

// const displayController = (() => {
//     const controller = [];
//     return {controller};
// });

// const players = (playerName) => {
//     const showName = () => console.log(playerName)
//     return { showName }
// }

// Adds array elements to the board
// const displayXOs = () => {
//     for (let i = 0; i < gameboard.board.length; i++) {
//         document.getElementById(`field-${i}`).textContent = gameboard.board[i];
//     }
// };

// displayXOs();

// Add from table to board array
// const addXOToArray = () => {
//     for (let i = 0; i < gameboard.board.length; i++) {
//         gameboard.board[i] = document.getElementById(`field-${i}`).textContent;
//     }
// };

player = 1;

// Adds eventlisteners to all fields allowing for x's and o'x to be placed
for (let i = 0; i < gameboard.board.length; i++) {
    document.getElementById(`button-${i}`).addEventListener('click', () => {
        if (document.getElementById(`field-${i}`).textContent === '') {
            if (player === 1) {
                document.getElementById(`field-${i}`).textContent = 'x';
                gameboard.board[i] = 'x';
                winnerX.checkWinner('x');
                player = 2;
            } else if (player === 2) {
                document.getElementById(`field-${i}`).textContent = 'o';
                gameboard.board[i] = 'o';
                winnerO.checkWinner('o');
                player = 1;
            }
        }
    })
};

// Logic to check if game is over

// Creates winner checks
const winnerFactory = () => {
    const checkWinner = (symbol) => {
        if (gameboard.board[0] === `${symbol}` && gameboard.board[1] === `${symbol}` && gameboard.board[2] === `${symbol}` ||
            gameboard.board[3] === `${symbol}` && gameboard.board[4] === `${symbol}` && gameboard.board[5] === `${symbol}` ||
            gameboard.board[6] === `${symbol}` && gameboard.board[7] === `${symbol}` && gameboard.board[8] === `${symbol}` ||
            gameboard.board[0] === `${symbol}` && gameboard.board[3] === `${symbol}` && gameboard.board[6] === `${symbol}` ||
            gameboard.board[1] === `${symbol}` && gameboard.board[4] === `${symbol}` && gameboard.board[7] === `${symbol}` ||
            gameboard.board[2] === `${symbol}` && gameboard.board[5] === `${symbol}` && gameboard.board[8] === `${symbol}` ||
            gameboard.board[0] === `${symbol}` && gameboard.board[4] === `${symbol}` && gameboard.board[8] === `${symbol}` ||
            gameboard.board[2] === `${symbol}` && gameboard.board[4] === `${symbol}` && gameboard.board[6] === `${symbol}`) {
                if (symbol === 'x') {
                    displayWinner('x');
                }
                if (symbol === 'o') {
                    displayWinner('o');
                }
        }
    }
    return {checkWinner}
}

// Creates new instances of winnerFactory
const winnerX = winnerFactory();
const winnerO = winnerFactory();

// When a Player wins, I want a heading to say 'Player 1/2 wins!', a button to press play again which resets upon click
const displayWinner = (symbol) => {
    if (symbol === 'x') {
        document.getElementById('winnerField').innerHTML =
            `<h2 id="winning-player-header">Spiller 1 vinder!</h2>
             <button id="play-again-button">Spil igen</button>`
    }
    if (symbol === 'o') {
        document.getElementById('winnerField').innerHTML =
            `<h2 id="winning-player-header">Spiller 2 vinder!</h2>
             <button id="play-again-button">Spil igen</button>`
    }
};

// Reset game 
document.getElementById('play-again-button').addEventListener('click', () => {
    board = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('winnerField').innerHTML = ''
});

// Insert names 
// Reset game after win upon click
// Realise when it is no longer possible to win. Or just ask when they are all filled. 
