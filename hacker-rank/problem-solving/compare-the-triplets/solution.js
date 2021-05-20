QUnit.module("compare-the-triplets");
QUnit.test("compareTriplets", function (assert) {
    assert.deepEqual(compareTriplets([5, 6, 7], [3, 6, 10]), [1, 1]);
    assert.deepEqual(compareTriplets([17, 28, 30], [99, 16, 8]), [2, 1]);
});

// compareTriplets(Array, Array): Array
function compareTriplets(a, b) {
    let pa = 0, pb = 0; // pontos de Alice e Bob, respectivamente
    let r = []; // resultado
    let n = a.length; // tamanho dos vetores de entrada
    for (let i = 0; i < n; i++) {
        if (a[i] > b[i]) {
            pa = pa + 1;
        } else if (a[i] < b[i]) {
            pb = pb + 1;
        }
    }
    r[0] = pa;
    r[1] = pb;
    return r;
}
