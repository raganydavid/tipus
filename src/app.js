var szam = 35;
var szam2 = 27;
var szamStr = "34"; 
var szamStr2 = "45";

console.log(typeof szam);
console.log(szam2);
console.log(szam + szam2 + szamStr);
console.log(Number(szamStr) + Number(szamStr2));

var esik = true;
if (esik) {
    console.log('esik...')
}

var calcArea = function(base , height) {   //functiont el lehet menteni varkent
    return base* height / 2;
}
console.log(typeof calcArea)  // typeof az különleges operator

var pista = {                // objektumok letrehozasa tuljdonsag: ertek
    nev: "Pisti",
    kor: 28,
    van_kocsi: true
};

console.log(typeof pista);

var szamok = [25, 30, 40];
console.log(typeof szamok);
var nevek = ['Pisti', 'Pali', 'Jani'];