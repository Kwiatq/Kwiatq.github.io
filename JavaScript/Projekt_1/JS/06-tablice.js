'use strict';
var imiona = ['Monika', 'Heniek', 'Richard'];

imiona[3]='Tania';
imiona[2]= 'Ela';

imiona.push('Geralt');

console.log(imiona);

//JavaScript array function <--  funkcje tabeli

imiona.pop(); /* pop- wycięcie komórki z tabeli */
imiona.pop();

console.log(imiona);

//dodaje na koniec tabeli, wycina tez od końca

console.log(imiona.unshift('Robert')); /* dodanie na początek */
console.log(imiona);

console.log(imiona.shift()); /* odjęcie pierwszego */
console.log(imiona);

console.log(imiona.length); /* długość tablicy */

console.log(imiona.join(' ;) ')); /* join łączy elementy */

console.log(imiona.reverse()); /* odwrócenie elementów w tablicy */


var liczba = ['zero', 'dwa', 'osiem'];

console.log(liczba.sort());

var liczby = [22,11,24,54,38];
console.log(liczby.sort());

console.log(liczby.sort().reverse());


