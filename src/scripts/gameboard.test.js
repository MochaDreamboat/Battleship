const ship = require('./ships.js');
const gameBoard = require('./gameboard.js');

let newBoard = gameBoard();
let newShip = ship(5);
let testCoordinates = [['A', 1], ['A', 2], ['A', 3], ['A', 4], ['A', 5]];


test('Return board object.', () => {
    expect(newBoard.board).toStrictEqual({
        A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    })
});

test('Ship is placed in appropriate coordinates.', () => {
    newBoard.placeShip(newShip, testCoordinates);
    expect(newBoard.board.A[0]).toEqual(expect.anything());
});

test('Gameboard registers successful hit on correct ship part.', () => {
    newBoard.receiveAttack('A', 3);
    expect(newShip.body).toStrictEqual([0, 0, 1, 0, 0])
});