console.log("________________________Affectation par décomposition")

let tab_1 = ["un", "deux", "trois"];

let var_1 = tab1 [0];
let var_2 = tab2 [1];
let var_3 = tab3 [2];

let [var_4, var_5, var_6] = tab_1; // j'affecte une valeur à mes nouvelles variables*/

console.log(var_2);
console.log(var_4);

console.log('var_1 : '+var_1);
console.log('var_1 : '+var_1);

[var_2, var_1] = tab_1;

// je met à jour mes variables
console.log('var_1 : '+var_1);
console.log('var_2 : '+var_2);


let [aa=2, bb] = [10,,'machin'];
console.log('aa : '+aa);
console.log('bb : '+bb);


let [g1, g2, ...g3] = array_3 //Affectation de nouveaux couple variable/valeur via rest

console.log('g1 : ',91);
console.log('g2 : ',92);
console.log('g3 : ',93);