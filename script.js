let name = prompt("Welcome to GC mini-golf. What is your name?");
let capName = name[0].toUpperCase() + name.substring(1);
let gamecount = prompt("Hi " + capName + ", Would you like to play 3 or 6 holes?");
let total = 0;

for (let i = 1; i <= gamecount; i++) {
    let score = Number(prompt("How many putts for hole " + (i) + "?"));
    total += score;
}
console.log(capName + ", your total score is " + total + ".");

if (gamecount == 3) {
    let totalpar = total - 9;
    if (totalpar > 0) {
        console.log("Nice try, " + capName + ". Your total par was: +" + totalpar + ".");
    }
    else if (totalpar < 0) {
        console.log("Great Job, " + capName + "! Your total par was " + totalpar + ".");
    }
    else if (totalpar == 0) {
        console.log("Good game, " + capName + ". Your total par was " + totalpar + ".");
    }
} else if (gamecount == 6) {
    let totalpar = total - 18;
    if (totalpar > 0) {
        console.log("Nice try, " + capName + ". Your total par was +" + totalpar + ".");
    }
    else if (totalpar < 0) {
        console.log("Great job, " + capName + "! Your total par was " + totalpar + ".");
    }
    else if (totalpar == 0) {
        console.log("Good game, " + capName + ". Your total par was " + totalpar + ".");
    }
}





