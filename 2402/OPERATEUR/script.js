/* Les opérateurs utilisés dans javascript :

Arithmetiques : +,-,*,
Comparaisons : ==, ===, >,>=, <,<=
Logiques : &&, ||

*/

let nb = 5;
let nb2 = 6;
let resultat = nb + nb2;
console.log(resultat);

/*
let chaineDecaracter = "ma chaine de cractères";
let resustat2 = chaineDeCaractere + resultat;
console.log(resultat2);*/

nb += 2;
console.log(nb);
nb = nb + 2;

nb += 2;
console.log(nb);

nb /= 7;
console.log("");


/* Le modulo permet d'obtenir le reste d'une division euclidienne

7 / 2 = 3, il reste 1

*/


console.log("Modulo 7 / 2 : "+7%2);

/* Comparateurs == et === */

let cp1 = 5;
let cp2 = '5';

console.log(cp1 == cp2)
console.log(cp1 === cp2)


/* Conditions */

let b = 10;
b++;

if (b === 11){
console.log('b=10');
}else{
    console.log ('b !=10');
}

if( b === 10 ){
console.log("b strictement égale à 10");
}else if ( b === 11 ){
console.log("b strictement égale à 11");
}else{ ( b === 0 );
console.log("b n'est ni égale à10, ni à 11");
}


let c = true;
let d = 'truc';

if ( c===true);
    if (d==='truc');
console.log("c égale TRUE et d égale TRUC");

if ( c===true);
    if (d==='truc');
console.log("c égale TRUE et d égale TRUC");


// Compare puis incremente
let g = 10;
if (g++ ===10) {
    console.log(g);
}

// > g => 11
// Compare juste
if ((g+1) === 12){
    console.log(g);
}
//> g 11
Compare
let g = 10;
if (++g ===10) {
    console.log(g);
}


/* CONDITION TERNAIRE/ AFFECTATION CONDITONNELLE*/

let v1 = 5;
(v1 >=5)? console.log("V1") : console.log("v2");

/* Comparason , resultat si TRUE : resultat si FALSE*/

let v2 = (v1=>5)? v1 + 2 : v1 + 3;
console.log(v2);

//boucles

console.log("__________________WHILE");
index=0;
while(index <=10){
    console.log(index);
    index++;
}

console.log("__________________WHILEV2");
index = 0;
    while(index++ <=20){
            console.log(index);
}

console.log("__________________DO WHILE");
index = 11;
    do{
            console.log("je rentre");
            index++;
}while(index <10);

console.log("-------BOUCLE FOR")

for(let i=0; i<=10; i++){
console.log(i);

}