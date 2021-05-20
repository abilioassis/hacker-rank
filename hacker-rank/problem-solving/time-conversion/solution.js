QUnit.module("Time Conversion");
QUnit.test("timeConversion", function (assert) {
    // Apague o “AM” das horas entre "1:00AM" e "11:59AM"
    assert.deepEqual(timeConversion('03:27:00AM'), '03:27:00');
    assert.deepEqual(timeConversion('10:00:59AM'), '10:00:59');
    // Deixe o horario do meio-dia igual e simplesmente remova o “PM”
    assert.deepEqual(timeConversion('12:01:00PM'), '12:01:00');
    // Some 12 horas ao periodo entre "1:00 PM" e "11:59 PM" e apague o “PM”
    assert.deepEqual(timeConversion('07:05:45PM'), '19:05:45');
    // Substitua o '12' por '00' ao periodo entre "12:00 AM" e "12:59 AM" e apague o “AM”
    assert.deepEqual(timeConversion('12:40:22AM'), '00:40:22');
    assert.deepEqual(timeConversion('12:05:39AM'), '00:05:39');   
});

// Transforma o sistema de 12 em 24 horas
// Formato de s: 'hh:mm:ssAM' ou 'hh:mm:ssPM'
function timeConversion(s) {
    let r = '';
    let rn = 0;
    // Apague o AM das horas entre 1:00AM e 11:59AM
    let hn = parseInt(s.slice(0, 2)); // hora no formato numerico
    let t = s.slice(8); // turno: AM ou PM
    if (hn >= 1 && hn <= 11 && t == 'AM') {
        r = s.slice(0, 8);
    }
    // Deixe o horario do meio-dia igual e simplesmente remova o PM
    if (hn == 12) {
        r = s.slice(0, 8);
    }
    // Some 12 horas ao periodo entre 1:00 PM e 11:59 PM e apague o PM
    if (hn >= 1 && hn <= 11 && t == 'PM') {
        rn = hn + 12;
        r = rn + s.slice(2, 8);
    }
    // Substitua o '12' por '00' ao periodo entre "12:00 AM" e "12:59 AM" e apague o AM
    if (hn == 12 && t == 'AM') {
        r = '00' + s.slice(2, 8);
    }  
    return r;
}
