'use scrit';/* convention*/
console.log("ARRAY !!")

/**
 * en Js, les tableaux sont objets
 */

 console.log("Déclaration de tableau");

 let nombres = new Array(1,2,3,4,5)/*crée un tableau ayant 5 cellles déjà renseignées*/
 console.log("nombres : "+nombres);/* affiche + virgules*/
 console.log("nombres : ",nombres);
 console.log(`nombres : ${nombres}`);


 let nombres_v2 = [3,5,7,10,6];//crée un tableau ayant 5 cellles déjà renseignées
 console.log(nombres_v2);

 let nombres_v3 = [];// Crée un tableau vide
 console.log(nombres_v3);

 let nombres_v4 = new Array(6);// Crée un tableau ayant 6 cellules vide (undefined)
 console.log(nombres_v4);

 console.log("Remplir un tableau)")
 let array_1 = [];
 console.log("<0> array_1 : ",array_1);
 array_1[0]=1;
 array_1[1]=2;
 array_1[2]=3;
 array_1[3]=4;
console.log("<1> arry_1 : " ,array_1);

let array_2 = [];
let maxCel = 5;
console.log("<0> array_2 : " ,array_2);
for(let i=0 ; i<maxCel ;i++){
    array_2[i] = i+1;
}


console.log("<1> array_2 : " ,array_2);

let longueurTab = array_2.length;
console.log('longueurTab : '+longueurTab);
array_2[array_2.length] = 33; //Ajout à la fin du tableau une cellule contenant le nombre 33;
console.log(array_2)

array_2[array_2.length+6] = 66; //Ajoute à la cellule correspondant à la taille du tableau (nombre de cellules actuelle) + 6, la cellule contenant le nombre 66
console.log(array_2)

let varTest1 = "truc";
let array_3 = [
    1,
    2,
    3,
    55,
    true,
    'Coucou',
    varTest1['machin','bidule',55]
];


console.log('array_3 : ',array_3); // un tableau peut contenir plusieurs types de valeurs




console.log("__________________________________Parcourr un tableau");

//array_3
for( let i=0 ; i<array_3.length ; i++ ){
    console.log(`cel id = ${i} : ${array_3[i]}`);
}


console.log(" loop FOR ... OF");
for( const elt of array_3){
console.log(elt);

}

console.log( "loop FOREACH)");
array_3.forEach(function(elt){
    console.log(elt);
});
array_3.forEach(elt => console.log(elt));

console.log( "loop FOR OF entries()");
for(const [index, elt] of array_3.entries()){
    console.log(`array_3[${index}] = ${elt}`);
}


console.log("________________________Affectation par décomposition")

let tab_1 = ["un", "deux", "trois"];

let var_1 = tab1 [0];
let var_2 = tab2 [1];
let var_3 = tab3 [2];

let [var_4, var_5, var_6] = tab_1; // j'affecte une valeur à mes nouvelles variables
console.log(var_2);
console.log(var_4);

console.log('var_1 : '+var_1);
console.log('var_1 : '+var_1);
