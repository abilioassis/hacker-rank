QUnit.module("Mini-Max Sum");
QUnit.test("miniMaxSum", function (assert) {
    assert.deepEqual(miniMaxSum([1, 2, 3, 4, 5]), [10, 14]);
});

// miniMaxSum(Array): Array
function miniMaxSum(arr) {
    // ordeno o vetor de entrada de forma ascendente
    let vo = arr.sort(function (a, b) { return a - b });
    // o valor mínimo e a soma dos 4 primeiros
    // o valor máximo e a soma dos 4 ultimos
    let min = 0, max = 0;
    for (let i = 0; i < vo.length - 1; i++) {
        min = min + arr[i];
    }
    for (let i = 1; i < vo.length; i++) {
        max = max + arr[i];
    }
    let r = [];
    r.push(min, max);
    console.log(min, max);
    return r;

}
