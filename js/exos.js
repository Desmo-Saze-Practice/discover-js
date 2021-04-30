/**
*  Challenge Quizz
*
* Pour ce challenge, suit les instructions dans le fichier README.md
* Et écris ton code ici même !
*/
let answerCount = 0;

/* Exo 1 */
// Ton code ici...

var question1 = "Quelle mer borde la ville de Sébastopol ?";
var solution1 = "la mer noire";

/* Exo 2 */
// Ton code ici...

const firstPromptResult = window.prompt(question1);
const reponse1 = firstPromptResult;
if (solution1 === reponse1) {
    answerCount++;
    alert(`Your first answer is right !!`);
}
else {
    alert("Your first answer is wrong.");
}

/* Exo 3 */
// Ton code ici...

const question2 = "Quel est l'âge du capitaine ?";
const solution2 = 63;
const secondPromptResult = Number(window.prompt(question2));
const reponse2 = secondPromptResult;

if (secondPromptResult === solution2) {
    answerCount++;
    alert(`Your second answer is right !! You have ${answerCount} right answer(s).`);
} else {
    alert("Your second answer is wrong.")
}

// bonus



