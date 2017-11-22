
var cards = [
    {
      rank: 'queen',
      suit: 'hearts',
      cardImage: 'images/queen-of-hearts.png'
    },
    {
      rank: 'queen',
      suit: 'diamonds',
      cardImage: 'images/queen-of-diamonds.png'
    },
    {
      rank: 'king',
      suit: 'hearts',
      cardImage: 'images/king-of-hearts.png'
    },
    {
      rank: 'king',
      suit: 'diamonds',
      cardImage: 'images/king-of-diamonds.png'
    }
  ]

var cardsInPlay = [];


checkForMatch()

function flipCard(cardId) {

    console.log(cards[cardId].rank + ' was flipped')
    cardsInPlay.push(cardId).rank
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)

}

function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img')
        cardElement.setAttribute('src', 'images/back.png')
        cardElement.setAttribute('data-id', i)
        document.addEventListener('click', flipCard(i))
        document.getElementById('game-board').appendChild(cardElement)
    }
}
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}

createBoard()