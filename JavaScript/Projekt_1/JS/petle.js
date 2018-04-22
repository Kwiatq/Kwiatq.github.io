'use strict';

/*for (var i=10 ; i > 0; i--) {
    console.log(i);
}

console.log('\n')

for (var i = 1 ; i <= 5; i++) {
    console.log(i);
}*/

var tablica = ['Krystian', 'Monika', 'Danuta'];

for (var i=0; i<3; i++) {
    console.log('Element z indexem: ' + i + ' ma wartosc ' + tablica[i]);
}

console.log('\n')

var tablica = ['Krystian', 'Monika', 'Danuta', 'Zenek', 'Mietek'];
// porównanie dla dowolnej wartosci komorek w tabeli
for (var i=0; i< tablica.length ; i++) {
    console.log('Element z indexem: ' + i + ' ma wartosc ' + tablica[i]);
}

console.log('\n \n')

tablica.forEach( function ( element, index) {
    console.log('Element z indexem: ' + index + ' ma wartosc ' + element);
});

// wazne stosowanie nawiasu () gdzie sie konczy

console.log('\n \n')

var it = 0;
while ( it <= 10) {
    console.log(it);
    it++;
}

console.log('\n \n')

var iter = 20;

do {
    console.log(iter);
   iter++;
    
   }    while (iter < 10)

console.log('\n \n')

var a =0;
while ( a< 10 ) {
    console.log(++a);
    
    if (a == 6) {
        break;
    }
}

console.log('\n \n')

// przeskakiwanie do kolejnej itteracji

for (var b = 0; b < 10 ; b++) {
    
    if ( b == 5 ) {
        continue;
    }   else {
        console.log(b);
    }
        console.log('--')
}





