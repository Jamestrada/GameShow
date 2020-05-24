// const game = new Game();
// const startGame = game.startGame();

// game.addEventListener(startGame, () => {

// });

const phrase = new Phrase('Life is like a box of chocolates');
console.log(`Phrase - phrase: ${phrase.phrase}`);

const game = new Game();
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
    game.startGame();
});