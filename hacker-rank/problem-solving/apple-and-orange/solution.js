QUnit.module("apple-and-orange");
QUnit.test("countApplesAndOranges", function (assert) {
    assert.deepEqual(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]), [1, 1]);
});


function countApplesAndOranges(s, t, a, b, apples, oranges) {   
    let nm = 0;
    for (let i = 0; i < apples.length; i++) {
        if ((a + apples[i] >= s) && (a + apples[i] <= t)) {
            nm = nm + 1;
        }
    }
    
    let nl = 0;
    for (let j = 0; j < oranges.length; j++) {
        if ((b + oranges[j] >= s) && (b + oranges[j] <= t)) {
            nl = nl + 1;
        }
    }
    
    console.log(nm);
    console.log(nl);
    // resultado
    let r = []; 
    r.push(nm, nl);
    return r;

}