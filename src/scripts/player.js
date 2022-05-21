// Given player interacts with opponent's gameboard.
import { gameBoard } from './gameBoard.js';

let Player = {
    name: null,
    board: gameBoard(),
    enemy: AI.board,
    attempts: [],
    attack: function (letter,number) {
        if (this.attempts.find([letter, number] == true)) {
            return;
        }
        this.attempts.push([letter, number]);
        return this.enemy.receiveAttack(letter,number);
    },

    attempts: []
}

let AI = {
    name: null,
    board: gameBoard(),
    enemy: Player.board,
    attempts: [],
    attack: function (letter,number) {
        if (this.attempts.find([letter, number] == true)) {
            return;
        }
        this.attempts.push([letter, number]);
        return Player.board.receiveAttack(letter,number);
    },

    randomizeCoordinate: function () {
        // 
    }
}