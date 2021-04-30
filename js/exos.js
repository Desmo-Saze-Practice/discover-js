/**
*  Challenge Quizz
*
* Pour ce challenge, suit les instructions dans le fichier README.md
* Et écris ton code ici même !
*/

/* Exo 1 */
// Ton code ici...

var question1 = "Quelle mer borde la ville de Sébastopol ?";
var solution1 = "la mer noire";

/* Exo 2 */
// Ton code ici...

const firstPromptResult = window.prompt(question1);
const reponse1 = firstPromptResult;
if (solution1 === reponse1) {
    alert("your first answer is right !!");
}
else {
    alert("your first answer is wrong.");
}

/* Exo 3 */
// Ton code ici...

const question2 = "Quel est l'âge du capitaine ?";
const solution2 = 63;
const secondPromptResult = Number(window.prompt(question2));
const reponse2 = secondPromptResult;

if (secondPromptResult === solution2) {
    alert("your second answer is right !!");
} else {
    alert("your second answer is wrong.")
}

// bonus



