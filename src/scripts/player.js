// Given player interacts with opponent's gameboard.
import { gameBoard } from './gameBoard.js';

let Player = {
    name: null,
    board: gameBoard(),
    attack: function (letter,number) {
        playerTwo.board.receiveAttack(letter,number);
    }
}

let AI = {
    name: null,
    board: gameBoard(),
    attack: function (letter,number) {
        playerOne.board.receiveAttack(letter,number);
    }
}