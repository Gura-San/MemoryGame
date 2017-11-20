
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

flipCard(2);
flipCard(2);
checkForMatch();

function flipCard(cardId) {

    console.log(cards[cardId] + " was flipped");
    cardsInPlay.push(cardId);

}

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}