/**
 * 
 * créer un objet litteral avion ayant les propriétées suivantes
 * 
 * nombre d'ailes : 2
 * couleur : blanc
 * nombre de roues : 3
 * vitesse : 900 km/s
 * 
 * une fonction permettant d'afficher dans la console sa vitesse
 * 
 * 
 */


 let planAvion = {
    aile:2,
    couleur:'blanc',
    roue:3,
    vitesse:'900km/s',

showVitess: function(){
    console.log('Ma vitesse est de :'+this.vitesse);
    }

 };
planAvion.showVitess();




 