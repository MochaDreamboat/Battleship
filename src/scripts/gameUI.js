import { Player, AI } from "./player.js";

// Associate grid marks on UI w/ value that will pass into given hit function.

Player.setBoard(gameBoard);
AI.setBoard(gameBoard);

//"Player one, set your ships"
Player.board.placeShip(5, [['A', 1], ['A', 2], ['A', 3], ['A', 4], ['A', 5]]);
Player.board.placeShip(4, [['B', 1], ['B', 2], ['B', 3], ['B', 4]]);
Player.board.placeShip(3, [['C', 1], ['C', 2], ['C', 3]]);
Player.board.placeShip(2, [['D', 1], ['D', 2]]);
Player.board.placeShip(1, [['E', 1]]);

// AI places ships
AI.board.placeShip(5, [['A', 1], ['A', 2], ['A', 3], ['A', 4], ['A', 5]]);
AI.board.placeShip(4, [['B', 1], ['B', 2], ['B', 3], ['B', 4]]);
AI.board.placeShip(3, [['C', 1], ['C', 2], ['C', 3]]);
AI.board.placeShip(2, [['D', 1], ['D', 2]]);
AI.board.placeShip(1, [['E', 1]]);

// Begin!

while (Player.board.allSunk() != true && AI.board.allSunk() != true) {
    playerAttackRow = prompt("Select row").toUpperCase();
    playerAttackColumn = Number(prompt("Select column"));
    Player.attack(playerAttackRow, playerAttackColumn);
    // Use math random floor to pick random 
}