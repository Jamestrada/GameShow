// const game = new Game();
// const startGame = game.startGame();

// game.addEventListener(startGame, () => {

// });

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase = phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();
// const startButton = document.getElementById('btn__reset');
// startButton.addEventListener('click', () => {
//     game.startGame();
// });