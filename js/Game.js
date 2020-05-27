class Game {
    phrases = this.createPhrases();
    constructor() {
        // this.missed = 0;

        // this.phrases = createPhrases();

        // this.activePhrase = null;
    }

    createPhrases() {
        return ['This is life', 'I need you now', 'Love does not exist', 'There is a God', 'Cold weather'];
    };

    startGame() {

    }

    getRandomPhrase() {
        const getRandom = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[getRandom];
    }

    handleInteraction() {

    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {
        
    }
}