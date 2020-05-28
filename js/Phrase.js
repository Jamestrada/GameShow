class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        const phraseDiv = document.createElement('div');
        phraseDiv.id = 'phrase';
        phraseDiv.class = 'section';
        const phraseUl = document.createElement('ul');
        phraseDiv.appendChild(phraseUl);
    }

    checkLetter() {

    }

    showMatchedLetter() {
        
    }
}