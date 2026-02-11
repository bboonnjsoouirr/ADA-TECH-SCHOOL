function addition3Numbers() {
  let total = 1 + 2 + 3;
  console.log("le résultat de la somme est " + total);
}

//addition3Numbers();

//function addition3NumbersWitharg(number1, number2, number3) {
// let sum = number1 + number2 + number3;
//console.log("le résultat de la somme est " + sum);
//}

//let a = 1;
//let b = 2;
//let c = 3;

//addition3NumbersWitharg(a, b, c)

//Écris une fonction qui prend en argument un nombre entier et retourne son carré. Affiche le résultat dans la console. Objectif : Je donne 3 à ma fonction, j’obtiens 9. Je donne 2 à ma fonction, j’obtiens 4.

function carre(nombre) {
  return nombre * nombre;
}
console.log(carre(3));
console.log(carre(2));
