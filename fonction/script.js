//Écris une fonction qui prend en argument un nombre entier et retourne son carré. Affiche le résultat dans la console. Objectif : Je donne 3 à ma fonction, j’obtiens 9. Je donne 2 à ma fonction, j’obtiens 4.

function carre(nombre) {
  return nombre * nombre;
}
//console.log(carre(3));
//console.log(carre(2));

//Stocke le résultat de la fonction dans une variable
// (c’est-à-dire, créé une variable qui sera égale à l’appel de la fonction).
// Nous allons utiliser cette variable pour la donner à une autre fonction .
// Ecris une autre fonction qui va multiplier par 10, la variable précédente.
// Affiche le résultat dans la console.
// Objectif : Je donne 9 à ma fonction de multiplication, j’obtiens 90.

let triangle = 9;
let number = 10;

function exercice2_2(triangle, number) {
  let resultat = triangle * number;
  console.log(resultat);
}
//exercice2_2(triangle, number);
function carre(nombre) {
  return nombre * nombre;
}
let utilisateur = prompt("entre un nombre: ");
let nombre = parseInt(utilisateur, 10);
let resultatcarre = carre(nombre);

console.log(resultatcarre);
console.log(resultatcarre * 10);
