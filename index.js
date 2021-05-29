const cards = document.querySelectorAll('.card');
var boardArr = ['', '', '', '', '', '', '', '', ''];
let symbol = 'X';

const winningCombinations = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,5,9],
  [1,5,9],
  [7,5,3],
];

const createMark = (index) => {
    boardArr[index] = symbol;
    let text = document.createElement('span');
    text.innerText = symbol;
    cards[index].appendChild(text);
  };

const game = (() => {
  inGame = true;

  const cardsArr = Array.from(cards);
  cardsArr.forEach((card, index) => {
    card.addEventListener('click', () => {
      if (boardArr[index] == '' && inGame) {
        createMark(index);
      }
    });
  });
})();
