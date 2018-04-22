'use strict';

function aktualnyRok() {
    console.log("2018");
}

aktualnyRok();

var aktualnyMiesiac= function() {
    console.log("kwiecień");
}

console.log(aktualnyMiesiac);

aktualnyMiesiac();

function dodajLiczby(pierwszaLiczba, drugaLiczba) {
    var wynik= pierwszaLiczba + drugaLiczba;
  //  console.log(wynik);
    return wynik;
}

var wynikZFunkcji = dodajLiczby(18,11);

console.log(wynikZFunkcji);

// pierwszaLiczba i drugaLiczba obowiązuje tylko w funkcji dodajLiczby, poza funkcją nie użyje się pierwszej i drugiej liczby








