'use strict';

var kaja = {
    
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function() {
        console.log(this.imie);
    }
}

var krystian = {
    imie: "krystian",
    wzrost: 180,
    przedstawOsobe: function() {
        console.log('ten obiekt ma na imie: ' + this.imie); 
        
        /* this jest tylko w obiektach */
    
    }
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(kaja.wzrost);
console.log(krystian.wzrost);

console.log(kaja);
console.log(krystian);







