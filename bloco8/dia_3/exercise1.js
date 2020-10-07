const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
    const resul = arrays.reduce( (result, arrai) => result.concat(arrai));
    return resul
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
