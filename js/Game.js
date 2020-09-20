class Game {
    constructor() {
        this.missed = 0;

        this.phrases = this.createPhrases();

        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        return [new Phrase('This is life'), new Phrase('I need you now'), new Phrase('Love does not exist'), new Phrase('There is a God'), new Phrase('Cold weather')];
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        this.reset();
        const overlay = document.querySelector('#overlay');
        overlay.style.visibility = 'hidden';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhraseIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhraseIndex];
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const lis = document.querySelectorAll('li.letter');
        for (const li of lis) {
            if (li.classList.contains('hide')) {
                return false;
            }
        }
        return true;
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1;
        const scoreboard = document.getElementById('scoreboard');
        const hearts = scoreboard.querySelectorAll('li');

        if (this.missed === 5) {
            this.gameOver(false);
        }

        for (let i = 0; i < this.missed; i++) {
            hearts[i].querySelector('img').src = 'images/lostHeart.png';
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        overlay.style.visibility = 'visible';
        const message = overlay.querySelector('h1');
        if (gameWon) {
            message.textContent = 'Congrats! You did it!';
            overlay.className = 'win';
        } else {
            message.textContent = 'Oh snap! You will get it next time!';
            overlay.className = 'lose';
        }
    }

    /**
    * Resets board by enabling all keys, removing all previous letters, and resetting the lives.
    */
    reset() {
        const ul = document.querySelector('#phrase');
        const buttons = document.querySelectorAll('button.key');
        const hearts = document.querySelectorAll('img');
        ul.innerHTML = '';

        buttons.forEach(button => {
            button.className = 'key';
            button.disabled = false;
        });

        hearts.forEach(heart => {
            heart.src = 'images/liveHeart.png'
        });
    }
}