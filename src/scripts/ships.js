// Factory function creates and facilitates ships/their behavior.

const ship = (n) => {

    const length = n;
    const body = createStructure(length);

    function createStructure (length) {
        let body = [];
        for (let i = 0; i < n; i++) {
            body.push(0);
        } 
        return body
    };

    const hit = (position) => {
        body[position] = 1;
    }

    const isSunk = () => {
        let damage = body.reduce((a,b) => a + b, 0);
        return (damage == length ? true : false)
    };
    return {length, body, hit, isSunk}
}

module.exports = ship;