const cards = document.querySelectorAll('.card');
var boardArr = ['', '', '', '', '', '', '', '', ''];
let symbol = 'X';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const createMark = (index) => {
    boardArr[index] = symbol;
    cards[index].innerText = symbol;
    // let text = document.createElement('span');
    // text.innerText = symbol;
    // cards[index].appendChild(text);
  };

const deleteEvent = (card) => {
  card.removeEventListener('click', deleteEvent);
};

const changeTurn = () => {
  symbol = symbol === 'X' ? 'O' : 'X';
};

const game = (() => {
  inGame = true;
  won = 'X';

  const cardsArr = Array.from(cards);
  cardsArr.forEach((card, index) => {
    card.addEventListener('click', () => {
      if (!inGame) {
        console.log(`there is a winner, ${won}`);
      } else if (boardArr[index] == '' && inGame) {
        createMark(index);
        deleteEvent(card);
        changeTurn();
        winner();
      }
    });
  });
})();

const winner = () => {
  winningCombinations.forEach((combinations) => {
    position1 = cards[combinations[0]].innerText;
    position2 = cards[combinations[1]].innerText;
    position3 = cards[combinations[2]].innerText;
    if (position1 == position2 && position2 == position3 &&
       position1 !== '') {
      inGame = false;
      won = position1;
    }
  });
};

const showWinner = () => {
  let won = document.createElement('div');

};
