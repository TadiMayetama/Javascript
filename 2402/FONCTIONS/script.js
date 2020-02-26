
/*crée la fonction*/
function hello() {
    alert("Bonjour!! Alors tu comprends ou tu comprends rien");
  }
hello(); /* je l'appelle*/


var question = prompt('Quel est votre nom');
console.log(question);



console.log("______________________les expressions de fonction______________");


const openWindowsPlease = function (){console.log("openWindowPlease");
}
open


let nombre2 = 15.5;
console.log(nombre2)


function ditBonjour (prenom, nom) {
return 'Bonjour '+prenom+' '+nom;
}
console.log(ditBonjour('Loic', 'GODIN' ));



function askQuestion (){
let reponse = prompt ('Quel jour serons nous demain si aujourd\hui est la veille d\hier?');

if (bonneReponse(reponse)){
alert ('Bonne réponse');
}else{
  rejouer();
}

}


function bonneReponse (reponse){
  let goodAnswer = "hier";

  if (reponse.toLowerCase() === goodAnswer){
return true;
  }
  return false}
  
  function rejouer(){
    
    if (confirm('You lose...try again?')){
 askQuestion();
    }else{
      alert("By by looser ^__-")
    }
  }