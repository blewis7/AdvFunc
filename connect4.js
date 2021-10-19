const columnOne = [...document.getElementsByClassName('column-one')];
const columnTwo = [...document.getElementsByClassName('column-two')];
const columnThree = [...document.getElementsByClassName('column-three')];
const columnFour = [...document.getElementsByClassName('column-four')];
const columnFive = [...document.getElementsByClassName('column-five')];
const columnSix = [...document.getElementsByClassName('column-six')];
const columnSeven = [...document.getElementsByClassName('column-seven')];
const div = document.querySelector('.game-grid');
const game = [...div.childNodes];
const gameBoard = [];
let player = 1;
let turns = 0;

for (let i = 0; i < game.length; i++){
    if (i % 2 !== 0){
        gameBoard.push(game[i]);
    }
}

const winningArrays = [ // Received code from https://github.com/kubowania/connect-four/blob/master/app.js
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
]

function checkForWin(){
    for (let i = 0; i < winningArrays.length; i++){
        const card1 = gameBoard[winningArrays[i][0]];
        const card2 = gameBoard[winningArrays[i][1]];
        const card3 = gameBoard[winningArrays[i][2]];
        const card4 = gameBoard[winningArrays[i][3]];

        setTimeout (function() {
            if (
                card1.classList.contains('red-piece') &&
                card2.classList.contains('red-piece') &&
                card3.classList.contains('red-piece') &&
                card4.classList.contains('red-piece')
            ) {
                alert('Red Piece Player Wins!');
            }
            if (
                card1.classList.contains('yellow-piece') &&
                card2.classList.contains('yellow-piece') &&
                card3.classList.contains('yellow-piece') &&
                card4.classList.contains('yellow-piece')
            ) {
                alert('Yellow Piece Player Wins!');
            } 
        }, 100);
    }
}

// Column 1

for (let i = columnOne.length-1; i >= 0; i--){
    columnOne[i].addEventListener('mouseover', () => {
        if (player === 1){
            columnOne[0].classList.add('red-piece-above');
        }
        else if (player === 2){
            columnOne[0].classList.add('yellow-piece-above');
        }
    });

    columnOne[i].addEventListener('mouseout', () => {
        if (player === 1){
            columnOne[0].classList.remove('red-piece-above');
        }
        else if (player === 2){
            columnOne[0].classList.remove('yellow-piece-above');
        }
    });
    
    columnOne[i].addEventListener('click', () => {
        if (player === 1){
            if (columnOne[columnOne.length-1].classList.contains('cell')){
                columnOne[columnOne.length-1].classList.remove('cell');
                columnOne[columnOne.length-1].classList.add('red-piece');
                columnOne.pop();
                columnOne[0].classList.remove('red-piece-above');
                columnOne[0].classList.add('yellow-piece-above');
                player = 2;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnOne.length <= 1){
                return;
            } 
        }
        else if (player === 2){
            if (columnOne[columnOne.length-1].classList.contains('cell')){
                columnOne[columnOne.length-1].classList.remove('cell');
                columnOne[columnOne.length-1].classList.add('yellow-piece');
                columnOne.pop();
                columnOne[0].classList.remove('yellow-piece-above');
                columnOne[0].classList.add('red-piece-above');
                player = 1;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnOne.length <= 1){
                return;
            }
        }
    }); 
     
}

// Column 2

for (let i = columnTwo.length-1; i >= 1; i--){
    columnTwo[i].addEventListener('mouseover', () => {
        if (player === 1){
            columnTwo[0].classList.add('red-piece-above');
        }
        else if (player === 2){
            columnTwo[0].classList.add('yellow-piece-above');
        }
    });

    columnTwo[i].addEventListener('mouseout', () => {
        if (player === 1){
            columnTwo[0].classList.remove('red-piece-above');
        }
        else if (player === 2){
            columnTwo[0].classList.remove('yellow-piece-above');
        }
    });

    columnTwo[i].addEventListener('click', () => {
        if (player === 1){
            if (columnTwo[columnTwo.length-1].classList.contains('cell')){
                columnTwo[columnTwo.length-1].classList.remove('cell');
                columnTwo[columnTwo.length-1].classList.add('red-piece');
                columnTwo.pop();
                columnTwo[0].classList.remove('red-piece-above');
                columnTwo[0].classList.add('yellow-piece-above');
                player = 2;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnTwo.length <= 1){
                return;
            } 
        }
        else if (player === 2){
            if (columnTwo[columnTwo.length-1].classList.contains('cell')){
                columnTwo[columnTwo.length-1].classList.remove('cell');
                columnTwo[columnTwo.length-1].classList.add('yellow-piece');
                columnTwo.pop();
                columnTwo[0].classList.remove('yellow-piece-above');
                columnTwo[0].classList.add('red-piece-above');
                player = 1;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnTwo.length <= 1){
                return;
            } 
        }
    }); 
}

//Column 3

for (let i = columnThree.length-1; i >= 1; i--){
    columnThree[i].addEventListener('mouseover', () => {
        if (player === 1){
            columnThree[0].classList.add('red-piece-above');
        }
        else if (player === 2){
            columnThree[0].classList.add('yellow-piece-above');
        }
    });

    columnThree[i].addEventListener('mouseout', () => {
        if (player === 1){
            columnThree[0].classList.remove('red-piece-above');
        }
        else if (player === 2){
            columnThree[0].classList.remove('yellow-piece-above');
        }
    });

    columnThree[i].addEventListener('click', () => {
        if (player === 1){
            if (columnThree[columnThree.length-1].classList.contains('cell')){
                columnThree[columnThree.length-1].classList.remove('cell');
                columnThree[columnThree.length-1].classList.add('red-piece');
                columnThree.pop();
                columnThree[0].classList.remove('red-piece-above');
                columnThree[0].classList.add('yellow-piece-above');
                player = 2;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnThree.length <= 1){
                return;
            } 
        }
        else if (player === 2){
            if (columnThree[columnThree.length-1].classList.contains('cell')){
                columnThree[columnThree.length-1].classList.remove('cell');
                columnThree[columnThree.length-1].classList.add('yellow-piece');
                columnThree.pop();
                columnThree[0].classList.remove('yellow-piece-above');
                columnThree[0].classList.add('red-piece-above');
                player = 1;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnThree.length <= 1){
                return;
            }  
        }
    }); 
}

// Column 4

for (let i = columnFour.length-1; i >= 1; i--){
    columnFour[i].addEventListener('mouseover', () => {
        if (player === 1){
            columnFour[0].classList.add('red-piece-above');
        }
        else if (player === 2){
            columnFour[0].classList.add('yellow-piece-above');
        }
    });

    columnFour[i].addEventListener('mouseout', () => {
        if (player === 1){
            columnFour[0].classList.remove('red-piece-above');
        }
        else if (player === 2){
            columnFour[0].classList.remove('yellow-piece-above');
        }
    });

    columnFour[i].addEventListener('click', () => {
        if (player === 1){
            if (columnFour[columnFour.length-1].classList.contains('cell')){
                columnFour[columnFour.length-1].classList.remove('cell');
                columnFour[columnFour.length-1].classList.add('red-piece');
                columnFour.pop();
                columnFour[0].classList.remove('red-piece-above');
                columnFour[0].classList.add('yellow-piece-above');
                player = 2;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnFour.length <= 1){
                return;
            } 
        }
        else if (player === 2){
            if (columnFour[columnFour.length-1].classList.contains('cell')){
                columnFour[columnFour.length-1].classList.remove('cell');
                columnFour[columnFour.length-1].classList.add('yellow-piece');
                columnFour.pop();
                columnFour[0].classList.remove('yellow-piece-above');
                columnFour[0].classList.add('red-piece-above');
                player = 1;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnFour.length <= 1){
                return;
            }
        }
    });
}

// Column 5

for (let i = columnFive.length-1; i >= 1; i--){
    columnFive[i].addEventListener('mouseover', () => {
        if (player === 1){
            columnFive[0].classList.add('red-piece-above');
        }
        else if (player === 2){
            columnFive[0].classList.add('yellow-piece-above');
        }
    });

    columnFive[i].addEventListener('mouseout', () => {
        if (player === 1){
            columnFive[0].classList.remove('red-piece-above');
        }
        else if (player === 2){
            columnFive[0].classList.remove('yellow-piece-above');
        }
    });

    columnFive[i].addEventListener('click', () => {
        if (player === 1){
            if (columnFive[columnFive.length-1].classList.contains('cell')){
                columnFive[columnFive.length-1].classList.remove('cell');
                columnFive[columnFive.length-1].classList.add('red-piece');
                columnFive.pop();
                columnFive[0].classList.remove('red-piece-above');
                columnFive[0].classList.add('yellow-piece-above');
                player = 2;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnFive.length <= 1){
                return;
            } 
        }
        else if (player === 2){
            if (columnFive[columnFive.length-1].classList.contains('cell')){
                columnFive[columnFive.length-1].classList.remove('cell');
                columnFive[columnFive.length-1].classList.add('yellow-piece');
                columnFive.pop();
                columnFive[0].classList.remove('yellow-piece-above');
                columnFive[0].classList.add('red-piece-above');
                player = 1;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnFive.length <= 1){
                return;
            } 
        }
    }); 
}

// Column 6

for (let i = columnSix.length-1; i >= 1; i--){
    columnSix[i].addEventListener('mouseover', () => {
        if (player === 1){
            columnSix[0].classList.add('red-piece-above');
        }
        else if (player === 2){
            columnSix[0].classList.add('yellow-piece-above');
        }
    });

    columnSix[i].addEventListener('mouseout', () => {
        if (player === 1){
            columnSix[0].classList.remove('red-piece-above');
        }
        else if (player === 2){
            columnSix[0].classList.remove('yellow-piece-above');
        }
    });

    columnSix[i].addEventListener('click', () => {
        if (player === 1){
            if (columnSix[columnSix.length-1].classList.contains('cell')){
                columnSix[columnSix.length-1].classList.remove('cell');
                columnSix[columnSix.length-1].classList.add('red-piece');
                columnSix.pop();
                columnSix[0].classList.remove('red-piece-above');
                columnSix[0].classList.add('yellow-piece-above');
                player = 2;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnSix.length <= 1){
                return;
            } 
        }
        else if (player === 2){
            if (columnSix[columnSix.length-1].classList.contains('cell')){
                columnSix[columnSix.length-1].classList.remove('cell');
                columnSix[columnSix.length-1].classList.add('yellow-piece');
                columnSix.pop();
                columnSix[0].classList.remove('yellow-piece-above');
                columnSix[0].classList.add('red-piece-above');
                player = 1;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnSix.length <= 1){
                return;
            } 
        }
    }); 
}

// Column 7

for (let i = columnSeven.length-1; i >= 1; i--){
    columnSeven[i].addEventListener('mouseover', () => {
        if (player === 1){
            columnSeven[0].classList.add('red-piece-above');
        }
        else if (player === 2){
            columnSeven[0].classList.add('yellow-piece-above');
        }
    });

    columnSeven[i].addEventListener('mouseout', () => {
        if (player === 1){
            columnSeven[0].classList.remove('red-piece-above');
        }
        else if (player === 2){
            columnSeven[0].classList.remove('yellow-piece-above');
        }
    });

    columnSeven[i].addEventListener('click', () => {
        if (player === 1){
            if (columnSeven[columnSeven.length-1].classList.contains('cell')){
                columnSeven[columnSeven.length-1].classList.remove('cell');
                columnSeven[columnSeven.length-1].classList.add('red-piece');
                columnSeven.pop();
                columnSeven[0].classList.remove('red-piece-above');
                columnSeven[0].classList.add('yellow-piece-above');
                player = 2;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnSeven.length <= 1){
                return;
            } 
        }
        else if (player === 2){
            if (columnSeven[columnSeven.length-1].classList.contains('cell')){
                columnSeven[columnSeven.length-1].classList.remove('cell');
                columnSeven[columnSeven.length-1].classList.add('yellow-piece');
                columnSeven.pop();
                columnSeven[0].classList.remove('yellow-piece-above');
                columnSeven[0].classList.add('red-piece-above');
                player = 1;
                turns++;
                checkForWin(); 
                setTimeout (function() {
                    if (turns === 42){
                        alert('To rematch, refresh page!')
                    }
                }, 100);
            }
            if (columnSeven.length <= 1){
                return;
            } 
        }
    }); 
}