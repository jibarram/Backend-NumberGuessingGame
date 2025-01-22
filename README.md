# Number Guessing Game

Sample solution for the [Number Guessing Game challenge](https://roadmap.sh/projects/number-guessing-game) from [roadmap.sh](https://roadmap.sh).

## Features
- Three difficulty levels:
  - Easy: 10 chances
  - Medium: 5 chances
  - Hard: 3 chances
- Tracks the number of attempts taken to guess correctly.
- Displays whether the guessed number is higher or lower than the correct number.
- High score tracking for the fewest attempts.
- Option to play multiple rounds.
- Timer to measure the time taken to guess the number.

## Requirements
- Node.js v12.0 or later

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/jibarram/Backend-NumberGuessingGame
   ```
2. Navigate to the project directory:
   ```bash
   cd Backend-NumberGuessingGame
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
Run the game using the following command:
```bash
node game.js
```

Follow the prompts to:
1. Select a difficulty level.
2. Enter your guesses.
3. View results, including attempts and high scores.
4. Optionally play additional rounds.

## Example
```
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Enter your choice: 2

Great! You have selected the Medium difficulty level.
Let's start the game!

Enter your guess (5 chances left): 50
Incorrect! The number is less than your guess.

Enter your guess (4 chances left): 25
Incorrect! The number is greater than your guess.

Enter your guess (3 chances left): 35
Congratulations! You guessed the correct number in 3 attempts.
Do you want to play again? (yes/no): no

Thank you for playing the Number Guessing Game!
```


