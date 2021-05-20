QUnit.module("Number Line Jumps");
QUnit.test("kangaroo", function (assert) {
    assert.deepEqual(kangaroo(0, 1, 1, 2), 'NO');
    assert.deepEqual(kangaroo(0, 1, 1, 1), 'NO');
    assert.deepEqual(kangaroo(0, 3, 4, 2), 'YES'); 
    assert.deepEqual(kangaroo(0, 3, 19, 1), 'NO');
    assert.deepEqual(kangaroo(21, 6, 47, 3), 'NO'); 
    assert.deepEqual(kangaroo(28, 8, 96, 2), 'NO'); 
    assert.deepEqual(kangaroo(47, 7, 56, 2), 'NO'); 
    assert.deepEqual(kangaroo(2564, 5393, 5121, 2836), 'YES'); 
});

function kangaroo(x1, v1, x2, v2) {
    // se o que esta atras eh mais lento ou tem a mesma velocidade, nao ha chance do encontro
    if (v1 <= v2) { // 1 eh mais lento
        return 'NO';
    } else { // existe chance de encontro
        let t = 0; // tempo
        let s1 = x1, s2 = x2; // posicao dos cangurus a qualquer tempo
        // enquanto o canguru 1 estiver atras, eu deixo os cangurus pulando...
        while(s1 < s2) {
            // avanco o tempo
            t += 1;
            // atualizo as posicoes
            s1 = x1 + v1 * t;
            s2 = x2 + v2 * t;
        }
        if (s1 == s2) {
            return 'YES';
        } else {
            return 'NO';
        }
    }
}