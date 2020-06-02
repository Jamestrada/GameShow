class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseDiv = document.createElement('div');
        phraseDiv.id = 'phrase';
        phraseDiv.class = 'section';
        const phraseUl = document.createElement('ul');
        const characters = this.phrase.split('');
        for (let i = 0; i < characters.length; i++) {
            const li = document.createElement('li');
            if (characters[i] === ' ') {
                li.class = 'space';
            } else {
                li.classList.add('hide', 'letter', characters[i]);
            }
            phraseUl.appendChild(li);
        }
        phraseDiv.appendChild(phraseUl);
    }

    checkLetter(letter) {
        if (this.phrase.indexOf(letter) >= 0) {
            return true;
        }
        return false;
    }

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