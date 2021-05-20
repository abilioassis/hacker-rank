// calculo o proximo multiplo de 5 mais proximo de n
QUnit.module("Grading Students");
QUnit.test("pm5", function (assert) {
    assert.deepEqual(pm5(73), 75);
    assert.deepEqual(pm5(72), 75);
    assert.deepEqual(pm5(71), 75);
});
const pm5 = function (n) {
    return Math.ceil(n / 5) * 5;
}

QUnit.module("Grading Students");
QUnit.test("gradingStudents", function (assert) {
    assert.deepEqual(gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]);
});

function gradingStudents(grades) {
    let r = [];
    let ga = 0; // grade arredondado 
    // varro os grades
    for (let i = 0; i < grades.length; i++) {
        // nota < 38 nao arredonda
        if (grades[i] < 38) { // aluno reprovado
            r.push(grades[i]);
        } else {
            // se a diferenca entre a nota e o proximo multiplo
            // for menor que 3, arredonda para o proximo multiplo de 5 (pm5)
            if ((pm5(grades[i]) - grades[i]) < 3) {
                // arredondo
                ga = pm5(grades[i]);
                r.push(ga);
            } else { // nao arredonda
                r.push(grades[i]);
            }
        }
    }
    return r;
}
