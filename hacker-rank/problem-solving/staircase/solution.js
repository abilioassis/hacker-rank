const imprimir = function(c, n) {
    let s = ''; // string
    for (let i = 1; i <= n; i++) {
        s = s + c;
    }
    return s;
}



QUnit.module("Staircase");
QUnit.test("staircase", function (assert) {
    let b = ' ';
    // n-i brancos e i #
    let escada = '   #\n' + // i = 1, 3 brancos, 1 #
                 '  ##\n' + // i = 2, 2 brancos, 2 #
                 ' ###\n' + // i = 3, 1 brancos, 3 #  
                 '####';  // i = 4, 0 brancos, 4 #
    assert.deepEqual(staircase(4), escada);
});

function staircase(n) {
    // Todas as linhas (exceto a ultima) possuem o mesmo padrao:
    // n-i brancos
    // i jogos da velha
    // 1 /n
    let linha = '';
    let b = ' '; // branco
    for (let i = 1; i <= n-1; i++) {
        linha = linha + imprimir(b, n-i) + imprimir('#', i) + '\n';
    }
    // ultima linha
    linha = linha + imprimir('#', n);
    console.log(linha);
    return linha;
}

