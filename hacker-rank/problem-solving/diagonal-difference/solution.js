QUnit.module("Diagonal Difference");
QUnit.test("nomeDaFuncao", function (assert) {
    let m1 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
    let m2 = [[1, 3], [3, 4]];
    assert.deepEqual(diagonalDifference(m1), 15);
    assert.deepEqual(diagonalDifference(m2), 1);
});

function diagonalDifference(arr) {
    let r = 0;
    let dp = 0, ds = 0;
    let n = arr[0].length; // tamanho da matriz quadrada
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // diagonal principal: i = j
            if (i == j) {
                dp = dp + arr[i][j];
            }
            // diagonal secundária: i + j = n - 1
            if ((i + j) == (n - 1)) {
                ds = ds + arr[i][j];
            }
        }
    }
    r = Math.abs(dp - ds);
    return r;

}
