class Game {
    constructor() {
        this.missed = 0;

        this.phrases = this.createPhrases();

        this.activePhrase = null;
    }

    createPhrases() {
        return [new Phrase('This is life'), new Phrase('I need you now'), new Phrase('Love does not exist'), new Phrase('There is a God'), new Phrase('Cold weather')];
    };

    startGame() {
        // Will start the game
    }

    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
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