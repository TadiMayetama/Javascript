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

 }
 let marie = new Person ("Marie", "McDonald", 'Angers');

 console.log('marie : ',marie);
 marie.myNameIs();

 