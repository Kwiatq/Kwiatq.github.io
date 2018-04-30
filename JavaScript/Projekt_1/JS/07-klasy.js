'use strict';


class Osoba /* klasa z duzych liter */ {
    
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlInfo() {
        console.log('Nazwywam sie ' + this.nazwisko + ' ' + this.imie)
    }
}

var agata = new Osoba('Agata', 'Kowalska');

var marcin = new Osoba('Marcin', 'Key');

console.log(agata.imie);

console.log(agata);

console.log(marcin);

marcin.wyswietlInfo();