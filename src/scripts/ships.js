// Factory function creates and facilitates ships/their behavior.
const ship = (n) => {

    const length = n;
    const body = createStructure(length);

    // Ships represented by 1D array declared by ship's length.
    // 0's represent no-hit, 1's represent hits.
    function createStructure(length) {
        let body = [];
        for (let i = 0; i < n; i++) {
            body.push(0);
        }
        return body
    };

    // Hits determined by targeting array index of respective position.
    const hit = (position) => {
        body[position] = 1;
    }

    // If damage matches length (aka health) of ship, return true.
    const isSunk = () => {
        let damage = body.reduce((a, b) => a + b, 0);
        return (damage == length ? true : false)
    };
    return {
        length,
        body,
        hit,
        isSunk
    }
}

// Testing export
module.exports = ship;