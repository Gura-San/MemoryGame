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

var cardsInPlay = []

function flipCard() {
    var cardId = this.getAttribute('data-id')
    this.setAttribute('src', cards[cardId].cardImage)
    var rank = cards[cardId].rank
    
    cardsInPlay.push(rank)

    if (cardsInPlay.length == 2) {
        checkForMatch()
    }  
}

function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img')
        cardElement.setAttribute('src', 'images/back.png')
        cardElement.setAttribute('data-id', i)
        cardElement.addEventListener('click', flipCard)
        //Just spend an hour to realize that addEventL istener('click', flipCard()) doesn't need () on a function. Thanks Ryan!
        document.getElementById('game-board').appendChild(cardElement)
    }
}
function checkForMatch() {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!")
            reloadPage()
        } else {
            alert('Sorry, try again.')
            reloadPage()
        }
}

function reloadPage () {
  window.location.reload()
}

createBoard()
