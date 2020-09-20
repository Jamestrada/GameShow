class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */  
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase');
        const characters = this.phrase.split('');
        for (let i = 0; i < characters.length; i++) {
            const li = document.createElement('li');
            if (characters[i] === ' ') {
                li.className = 'space';
            } else {
                li.classList.add('hide', 'letter', characters[i]);
                li.textContent = characters[i];
            }
            ul.appendChild(li);
        }
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        if (this.phrase.indexOf(letter) >= 0) {
            return true;
        }
        return false;
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const lis = document.querySelectorAll('li.letter');
        for (const li of lis) {
            if (li.textContent === letter.toLowerCase()) {
                li.classList.remove('hide');
                li.classList.add('show');
            }
        }
    }
}