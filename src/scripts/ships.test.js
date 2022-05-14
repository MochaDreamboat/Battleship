const ship = require('./ships.js');

test('Generate a ship with inputted length.', () => {
    let newShip = ship(5);
    expect(newShip.length).toBe(5);
});

test('Generate array representing ship given its length', () => {
    let newShip = ship(3);
    expect(newShip.body).toStrictEqual([0, 0, 0])
});

test('Hit ship at given position.', () => {
    let newShip = ship(5);
    newShip.hit(4);
    expect(newShip.body).toStrictEqual([0, 0, 0, 0, 1])
});

test('Partially damaged ship is not sunk', () => {
    let newShip = ship(3);
    newShip.hit(2);
    expect(newShip.isSunk()).toBe(false)
});

test('Fully damaged ship is declared sunk', () => {
    let newShip = ship(5);
    for (let i = 0; i <= 4; i++) {
        newShip.hit(i);
    };
    console.log(newShip)
    expect(newShip.isSunk()).toBe(true)
});