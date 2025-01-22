const readline = require('readline');
const { randomInt } = require('crypto');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const DIFFICULTY_LEVELS = {
    1: { name: 'Easy', chances: 10 },
    2: { name: 'Medium', chances: 5 },
    3: { name: 'Hard', chances: 3 }
};

let highScore = Infinity;

function askQuestion(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function startGame() {
    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 1 and 100.");

    while (true) {
        const difficultyChoice = await askQuestion(`\nPlease select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\n\nEnter your choice: `);

        const difficulty = DIFFICULTY_LEVELS[Number(difficultyChoice)];
        if (!difficulty) {
            console.log("Invalid choice. Please try again.");
            continue;
        }

        console.log(`\nGreat! You have selected the ${difficulty.name} difficulty level.`);
        const numberToGuess = randomInt(1, 101);
        const startTime = Date.now();
        let attempts = 0;
        let success = false;

        for (let i = 0; i < difficulty.chances; i++) {
            const guess = await askQuestion(`\nEnter your guess (${difficulty.chances - i} chances left): `);
            attempts++;
            const guessedNumber = Number(guess);

            if (guessedNumber === numberToGuess) {
                success = true;
                break;
            } else if (guessedNumber < numberToGuess) {
                console.log("Incorrect! The number is greater than your guess.");
            } else {
                console.log("Incorrect! The number is less than your guess.");
            }
        }

        if (success) {
            const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
            console.log(`\nCongratulations! You guessed the correct number (${numberToGuess}) in ${attempts} attempts and ${timeTaken} seconds.`);
            if (attempts < highScore) {
                highScore = attempts;
                console.log(`New high score: ${attempts} attempts!`);
            }
        } else {
            console.log(`\nGame Over! The correct number was ${numberToGuess}.`);
        }

        const playAgain = await askQuestion("\nDo you want to play again? (yes/no): ");
        if (playAgain.toLowerCase() !== 'yes') {
            break;
        }
    }

    console.log("\nThank you for playing the Number Guessing Game!");
    rl.close();
}

startGame();
