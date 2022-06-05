// Given player interacts with opponent's gameboard.
let Player = {
    name: null,
    setBoard: function(fn) {
        this.board = fn();
    },
    enemy: AI.board,
    attempts: [],
    attack: function (letter,number) {
        if (this.attempts.find([letter, number] == true)) {
            return false;
        }
        this.attempts.push([letter, number]);
        return this.enemy.receiveAttack(letter,number);
    },
    attempts: []
}

let AI = {
    name: null,
    setBoard: function(fn) {
        this.board = fn();
    },
    enemy: Player.board,
    attempts: [],
    attack: function (letter,number) {
        if (this.attempts.find([letter, number] == true)) {
            return;
        }
        this.attempts.push([letter, number]);
        return Player.board.receiveAttack(letter,number);
    },
}