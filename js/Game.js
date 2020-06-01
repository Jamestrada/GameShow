class Game {
    constructor() {
        this.missed = 0;

        this.phrases = [];

        this.activePhrase = null;
    }

    createPhrases() {
        return [new Phrase('This is life'), new Phrase('I need you now'), new Phrase('Love does not exist'), new Phrase('There is a God'), new Phrase('Cold weather')];
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