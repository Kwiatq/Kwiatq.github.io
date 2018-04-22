// conditions

 'use strict';

var wzrostMateusza = 190;
var wzrostOlgi = 150;

if (wzrostOlgi < wzrostMateusza) {
   
    console.log('Olga jest nizsza ');
}   else {
    console.log('Olga jest wyższa ');
}

if (wzrostOlgi < wzrostMateusza) {
   
    console.log('Mateusz jest wyższy ');
}   else if ( wzrostOlgi == wzrostMateusza) {
    console.log('Mateusz i Olga sa rowni ');
}   else {
    console.log('Mateusz jest nizszy ')
}

var kolor = 'niebieski';

switch (kolor) {
    case 'czerwony':
        console.log('kolor czerwony')
        break;
    case 'niebieski':
        console.log('kolor niebieski')
        break;
    case 'zielony':
        console.log('kolor zielony')
        break;
    default:
        console.log('inny kolor')
}







