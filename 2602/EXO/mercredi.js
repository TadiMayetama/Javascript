/**
 * A laide de la condition ternaire, la variable nb prendra comme valeur 42 si  nb est égale à 6, sinon nb sera égale à 9;
 * 
 * step 1 => utiliser les conditions pour afficher le résultat
 * 
 * step 2 => traduire en ternaire
 * 

 */

let nb, nb2 = 6;

if(nb2 === 6){
    nb = 42;
}else{
    nb=9;

}

console.log(nb)


/**
 * 
 * let nb, nb2 = 6;
 * nb2 === 6 ? nb=42 : nb=9;
 * console.log(nb);
 * 
 * 



 /**
  * créer une focntion qui prend commme parametre un tableau contenant des strings et des number 
  * 
  * La fonction retourne un tableau qui contient deux tableau,
  * > l'un avec QUE des number
  * >l'autre avec que des strings
  * 
  * push
  * 
  * typeof string / number
  * 
  *for of
  * 
  * 
  */

function sortArray(tab){
    let arrayString = [];
    let arrayNumber = [];
    let newTab;

    for(let elt of tab){
        if (typeof elt === "string"){
            arrayString.push(elt);
        }else if(typeof elt === "number"){
            arrayNumber.push(elt);
}

}


newTab = [arrayString, arrayNumber];

return newTab;

}

let [a1, a2] = sortArray(['Hello',34,'world',6,7,98,0,'it',true,false,[1,2,3]]);

console.log(a1);
console.log(a2);