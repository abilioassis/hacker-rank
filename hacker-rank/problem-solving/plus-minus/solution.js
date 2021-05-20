QUnit.module("Plus Minus");
QUnit.test("plusMinus", function (assert) {
    assert.deepEqual(plusMinus([-4, 3, -9, 0, 4, 1]), ['0.500000', '0.333333', '0.166667']);
});

// plusMinus(Array): Array
// retorna a proporcao de números positivos, negativos e zeros com 6 casas decimais
function plusMinus(arr) {
    let r = [];
    let p = 0, n = 0, z = 0;
    let k = arr.length;
    for (let i = 0; i < k ; i++) {
        if (arr[i] > 0) {
            p = p + 1;
        } else if (arr[i] < 0) {
            n = n + 1;
        } else {
            z = z + 1;
        }
    }
    r = [(p/k).toFixed(6), (n/k).toFixed(6), (z/k).toFixed(6)];
    console.log((p/k).toFixed(6));
    console.log((n/k).toFixed(6));
    console.log((z/k).toFixed(6));
    return r;

}