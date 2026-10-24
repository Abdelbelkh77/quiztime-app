import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let naam = await userInput.question("Wat is je naam? ");
let wachtwoord = await userInput.question("Geef wachtwoord: ");

if (wachtwoord != "QUIZ1234") {
console.log("Elaba, da mag niet!");
} else {
console.log("---------------------------------------------");
console.log("-----WELCOME TO QUIZTIME!!!!------");
console.log("---------------------------------------------");

let totaalscore = 0;
let verderSpelen = "ja";

while (verderSpelen == "ja") {

    let antwoord1 = await userInput.question(
        "Welke kleur heeft een mandarijn? "
    );

    if (antwoord1 == "oranje" || antwoord1 == "Oranje") {
        totaalscore++;
        console.log("Correct! Goed gedaan!");
    } else {
        console.log("Jammer!");
    }

    let antwoord2 = parseFloat(
        await userInput.question("Hoeveel is 10 + 10? ")
    );

    if (antwoord2 == 20) {
        totaalscore++;
        console.log("Correct! Goed gedaan!");
    } else {
        console.log("Jammer!");
    }

    verderSpelen = await userInput.question(
        "Wil je verder spelen? (ja/nee) "
    );
}

console.log(naam + ", je score is " + totaalscore);

for (let i = 0; i < totaalscore; i++) {
    console.log("hoera");


}
}
process.exit();