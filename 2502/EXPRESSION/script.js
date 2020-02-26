//Faire une fonction qui s'auto execute et qui affiche 'Bonjour' + prenom , prenom étant un parametre de cette fonction.

(function(prenom){
    console.log(`Bonjour ${prenom}`);
})(prompt('Quel est votre prenom?'));



//Faire une expression de fonction qui divise 2 nombres et retourne le resultat

function division (num1, num2) {
    return (num1/num2);
}


//j'appelle la fonction division

//Appeler et Afficher la fonction
console.log(division(5,2));

/*
let division = function(num1,num2){
    let resultat = num1/num2;
    return resultat
}
let number1 = division(10,2);
console.log(number1);



/* Realiser un switch qui prends la variable nombre2 et qui affiche :
* "a" si nombre2 est égal à 3
* "b" si nombre2 est égal à 5
* "c" si nombre2 est égal à 7
* "d" si nombre2 est égal à autre chose */
/*
function testNombre2 (nombre2){
    switch (nombre2){
        case 3:
            console.log("a");
                break;
        case 5:
            console.log("b");
                break;
        case 7:
            console.log("c");
                break ;

        default : 
            console.log("d");
                break;
    }
}

let question = prompt("afficher nombre");
console.log(testNombre2(question))

*/
function testNombre2 (nombre2){
    switch (nombre2){
        case 3:
            return("a");
                break;
        case 5:
            return("b");
                break;
        case 7:
            return("c");
                break ;

        default : 
            return("d");
                break;
    }
}
let question = prompt("afficher nombre");
console.log(testNombre2(question))