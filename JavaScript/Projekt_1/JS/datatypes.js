'use strict';
// typ liczbowy

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

// typ łańcuchowy 

var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr= wyplataStr + premiaStr;

console.log(calkowitaWyplataStr);

// typ logiczny "true" or "false"

var czyJestSmog;
czyJestSmog = false;

if (czyJestSmog) {
    console.log("jest Smog");
    }
else {
    console.log("nie ma smoga");
}


// specjalne typy danych "undefine" i "null"

var niezdefiniowanaZmienna;
var nullowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);

var imieStudenta = "michał";
console.log(imieStudenta.indexOf('c'));


