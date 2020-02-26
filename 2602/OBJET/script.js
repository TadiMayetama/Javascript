/**
 * Un objet est comme une super variable qui peut cintenir des variableset des fonctions.
 * 
 * Les varibales seront des des "Propriétés"
 * Les fonctions seront des "méthodes"
 * 
 * 
 */

 console.log("__________création d'un objet___________")

 let maVoiture = new Object();

 maVoiture.couleur = "rouge";
 maVoiture.modele = "Clio";
 maVoiture.nbRoues= 4;


 console.log('maVoiture : '+maVoiture);
 console.log('maVoiture : ',maVoiture);
 console.log("couleur de la voiture  : "+maVoiture);

 let maSecondeVoiture = {
    couleur : "Bleu",
    modele : "Clio",
    nbRoues : 4,
    radio: true,

    rouler:function(){
        console.log("avance");
 }

 };

 console.log('maSecondeVoiture : ',maSecondeVoiture);
 maSecondeVoiture.rouler();

 console.log("__________Objet constructeur___________");

 function Person(lastName, firstName, city){


    this.myLastName = lastName;
    this.myFirtName = firstName;
    this.myCity = city;

    this.myNameIs = function(){
            console.log ('Hello, my name is '+this.myLastName + " " + this.myFistName);
    }

    this.showCity= function(){
        return `I'm living in ${this.myCity}`;


    }

 } /* fonction constructeur se crée avec la valeur new*/

 let marie = new Person ("Marie", "McDonald", 'Angers');
 let paul = new Person ('Paul', 'Walter', "Paris");


 console.log('marie : ',marie);
 console.log('marie : '+marie);
/*
 console.log(marie.myFirstName);

 paul.likeToDance = true;
 paul.doYou

 










// marie.doYouLikeToDance(); ==> Pas Possible car seulement défini chez Paul

Person.prototype.doYouLikeToCook = function(){
    console.log(this.myLastName + ' love to cook !!');
}


 paul.doYouLikeToCook();
 marie.doYouLikeToCook();

 */


 console.log('---------comparaison d\'Objet--------');


 let julien = new Person ('Julien','dupond','salanches');
 let julien2 = new Person ('Julien','dupond','salanches');
 
 
 
 console.log("JULIEN ????? :",JSON.stringify(julien) === JSON.stringify(julien2));
 
 
 let homer1 = { nom: "Homer"};
 let homer2 = { nom: "Homer"};

 let homer3 = homer2;

 console.log( 'Est ce que homer1 est identique à homer2 ? :'+ (homer1 == homer2));
 console.log( 'Est ce que homer2 est identique à homer2 ? :'+ (homer1 == homer2));
 console.log( 'Est ce que homer3 est identique à homer2 ? :'+ (homer3 == homer2));


 console.log(JSON.stringify(homer1));
 console.log(homer1);
 console.log(JSON.stringify(homer2));
 console.log(homer2);

 console.log(JSON.stringify(homer2) == JSON.stringify(homer1))

 console.log('_____________Hydratation de Person....');


 let julienne = Object.assign(
     {

        sex:'female'
     },
     julien

 )
 julienne.mLastName ='Julienne'


 console.log('julien : ',julien);
 console.log('julienne : ',julienne);

 console.log('___________________Parcourir un Objet______________')
 console.log(' Parcour les propriétés de Julien :');
 for (let property in julien){
console.log('property : ', property);
console.log('valeur : ',julien[property])



 }