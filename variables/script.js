// Objectif : Comprendre ce qu’est une variable et savoir stocker une valeur simple.

//Énoncé
//Déclare 3 variables :
//  •    ton prénom
//•    ton âge
//  •    si tu aimes le JavaScript (oui ou non)

//Affiche chaque valeur dans la console

const prenom = "Guewen";
const age = 19;
let js = "oui";

console.log(
  "je m'appelle " +
    prenom +
    " j'ai " +
    age +
    " ans et " +
    js +
    " j'aime le javascript ",
);

//Objectif Comprendre qu’une variable peut changer de valeur.

//Énoncé
//Déclare une variable score avec la valeur 0.
//Puis :
// •    change sa valeur à 10
//•    affiche le score après modification

let score = 0;

console.log(score);

score = 10;

console.log(score);

//Objectif
//Assembler plusieurs valeurs dans une phrase.
//Énoncé
//Déclare :
//  •    une variable firstName
//•    une variable city
//Affiche la phrase :
//Je m’appelle F et j’habite à J

const firstName = "Guewen";
let city = "Boussay";

console.log("Je m'appelle " + firstName + " et j'habite à " + city);

//Objectif
//Manipuler des nombres stockés dans des variables.
//Énoncé
//Déclare :
//  •    une variable price à 20
//  •    une variable quantity à 3
//Calcule le toal et affiche-le.

let price = 20;
let quantity = 3;

console.log(price + quantity);

//Identifier le type d’une variable.
//Énoncé
//Déclare les variables suivantes :
//  •    un prénom
//  •    un âge
//  •    un booléen
//Affiche la valeur et son type dans la console.

let booléen = true;

console.log(prenom + " " + age + " " + booléen);
console.log(typeof prenom);
console.log(typeof age);
console.log(typeof booléen);

// Objectif

//Comprendre la différence entre let et const.
//Énoncé
//Déclare :
//  •    une constante birthYear
//  •    une variable currentYear

//Calcule l’âge et affiche-le

const birthYear = 2006;
let currentYear = 2026;

console.log(currentYear - birthYear);

//Objectif
//Comprendre ce qui est autorisé ou non.
//Énoncé
//Observe le code suivant et essaie de comprendre ce qui fonctionne et ce qui ne fonctionne pas.

//const city = "Paris";
//city = "Lyon";

//let age = 20;
//age = 21;

function sayhello() {
  console.log("Bonjour à toi!");
}
sayhello();
