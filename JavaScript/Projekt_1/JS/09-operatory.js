'use strict';
var liczba1 = 13, liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;
console.log(++wynik);

wynik+=3; //ten sam zapis co wynik=wynik + 3

console.log(wynik);

while (liczba2 < liczba1) {
    console.log(liczba1);
    --liczba1;
}



if ('2' === 2) {
    console.log('\n prawda');
}   else {
    console.log('\n falsz');
}

if (wynik == 6) {
    console.log('\n TaK');
}   else {
    console.log('\n nIe');
}



if (!(('2' !== 2) & (8 < 4) ) ) {
    document.write('<br> prawdosc');
}   else {
    document.write('<br> falszywosc');
}


var liczba = 100;
var wynik = (liczba < 0) ? -1 : 1;
console.log(wynik);

//skrótowy zaspis

(2>5) ? console.log('tak') : console.log('nie');


