let game;
const button = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');
const keys = keyboard.querySelectorAll('.key');

/**
* Starts a new game
*/
button.addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

/**
* Lets players use the onscreen keyboard to enter guesses
*/
keyboard.addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
        game.handleInteraction(e.target);
    }
})

/**
* Lets players use their physical keyboard to enter guesses
*/
document.addEventListener('keydown', (e) => {
    keys.forEach(key => {
        if (key.disabled === false && key.textContent === e.key) {
            game.handleInteraction(key);
        }
    });
});