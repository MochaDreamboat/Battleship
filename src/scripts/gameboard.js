const gameBoard = () => {

    const board = {
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
    };

    const currentShips = [

    ]
    // Must reject if:
    // Coordinates are longer than ship's length.
    // Coordinates do not have either the same letter or the same number.
    // Coordinates are not in a consecutive, disjointed order (no diagonals either.)
    // Coordinates are duplicated.

    const placeShip = (ship, coordinates) => { // Coordinates are an array of pairs in their own arrays.
        if (ship.length != coordinates.length) {
            return 'Not valid. Try again!'
        }
        for (let i = 0; i <= ship.length - 1; i++) {
            let hitFunction = () => ship.hit(i);
            row = coordinates[i][0];
            column = coordinates[i][1] - 1;
            board[row][column] = hitFunction;
        }
    };

    const receiveAttack = (letterCoordinate, numberCoordinate) => {
        let coordinate = board[letterCoordinate][numberCoordinate - 1];
        if (typeof coordinate == 'function') {
            coordinate();
            return 'hit!'
        } else {
            return 'Missed!'
        }
    };
    return { board, placeShip, receiveAttack }
};

module.exports = gameBoard;