QUnit.module("Birthday Cake Candles");
QUnit.test("birthdayCakeCandles", function (assert) {
    assert.deepEqual(birthdayCakeCandles([3, 2, 1, 3]), 2);
});

function birthdayCakeCandles(candles) {
    // ordeno as velas de forma descendente
    candles.sort((a, b) => b - a);
    // a maior esta na frente
    let max = candles[0];
    // realizo a contagem
    let n = 1; // já existe 1 vela mais alta
    for (let i = 1; i < candles.length; i++) {
        if (candles[i] == max) {
            n = n + 1;
        }
    }
    return n;
}

