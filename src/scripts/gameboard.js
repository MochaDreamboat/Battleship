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

    const placeShip = (length, ...coordinates) => { // Coordinates are an array of pairs in their own arrays.
        // Instantiate new ship by calling ship()
        // Coordinates have to be either in the same row or the same array index.
        let newShip = ship(length);
        // Overlay hit functions for ship arrays on coordinates.
        for (let i = 0; i <= coordinates.length; i++) {
            board.coordinates[0][indexOf[coordinates[1]]] = ship.hit(i);
        }
    };

    const receiveAttack = (letterCoordinate, numberCoordinate) => {
        let coordinate = board.letterCoordinate[numberCoordinate - 1];
        if (typeof coordinate == 'function') {
            coordinate();
        } else {
            return 'Missed!'
        }
    };
    return { board, placeShip, receiveAttack }
};