//
//BlackJack Game
//By Amit Singh Pundeer
//


//card variables
let suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
let cards = ['Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven', 'Six',
  'Five', 'Four', 'Three', 'Two'];


//DOM variables
let textArea = document.getElementById('text-area'),
 newGameButton = document.getElementById('new-game-button'),
 stayButton = document.getElementById('stay-button'),
 hitButton = document.getElementById('hit-button');


//Game variables
let gameStarted = false,
  gameOver = false,
  playerWon = false, 
  dealerCards = [],
  playerCards = [], 
  dealerScore = 0,
  playerScore = 0,
  deck = [];
  

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();


newGameButton.addEventListener('click', function() {
  
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  
  deck = createDeck();
  shuffleDeck(deck);
  
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];
  
  textArea.innerText = "Starting...";
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  
  showStatus(gameStarted);
  
});

hitButton.addEventListener('click', function(){
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus(gameStarted);
});

stayButton.addEventListener('click',function(){
    gameOver=true;
    checkForEndOfGame();
    showStatus(gameStarted);
});

function checkForEndOfGame()
{
  updateScores();
  
  if(gameOver)
  {
    while(dealerScore<playerScore &&
            playerScore<=21 &&
                dealerScore <= 21)
    {
      dealerCards.push(getNextCard());
      updateScores();
    }
    
    if(playerScore > 21)
    {
      playerWon = false;
      gameOver = true;
    }else if(dealerScore > 21)
    {
      playerWon = true;
      gameOver = true;
    }else if(gameOver)
    {
      if(playerScore > dealerScore)
      {
        playerWon = true;
      }else{
        playerWon =false;
      }
    }
    
    newGameButton.style.display = 'inline';
    hitButton.style.display ='none';
    stayButton.style.display = 'none';
  }
}

function updateScores()
{
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

function getScore(cardArray)
{
  let score = 0;
  let hasAce = false;
  
  for(let i = 0; i < cardArray.length; i++)
  {
    let card = cardArray[i];
    score+= getCardNumericValue(card);
    if(card.value === 'Ace')
       hasAce = true;
  }
  
  if(hasAce && score + 10 <= 21)
    return score + 10;
  return score;
}

function getCardNumericValue(card)
{
  switch(card.value){
    case 'Ace':
      return 1;
    case 'Two': 
      return 2;
    case 'Three':
      return 3;
    case 'Four': 
      return 4;
    case 'Five':
      return 5;
    case 'Six': 
      return 6;
    case 'Seven':
      return 7;
    case 'Eight': 
      return 8;
    case 'Nine':
      return 9;
    default: 
      return 10;
  }
}

function createDeck() {
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let cardIdx = 0; cardIdx < cards.length; cardIdx++) {
      let card = {
        suit: suits[suitIdx],
        value: cards[cardIdx]
      };
      deck.push(card);
    } //end-of-inner-loop
  } //end-of-outer-loop
  return deck;
} //end-of-createDeck

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[i];
    deck[i] = deck[swapIdx];
    deck[swapIdx] = tmp;
  }
}

function getNextCard() {
  return deck.shift();
} //end-of-func

function getCardString(card) {
  return card.value + ' of ' + card.suit;
}

function showStatus(gameStarted)
{
  
  if(!gameStarted)
  {
    textArea.innerText = 'Welcome to BlackJack!';
    return;
  }
  
  let dealerCardString='';
  for(let i = 0; i < dealerCards.length; i++)
  {
    dealerCardString += getCardString(dealerCards[i]) + '\n';
  }
  
  
  let playerCardString='';
  for(let i = 0; i < playerCards.length; i++)
  {
    playerCardString += getCardString(playerCards[i]) + '\n';
  }
  
  updateScores();
  
  textArea.innerText = 
    'Dealer has :\n' +
      dealerCardString
        + ' (score '+ dealerScore +')\n\n' +
    'Player has :\n' +
        playerCardString
          + ' (score '+ playerScore +')\n\n';
    
    if(gameOver)
    {
      if(playerWon)
      {
        textArea.innerText += '\nYou Wins!';
      }
      else
      {
        textArea.innerText += '\nDealer Wins!';
      }
    }
}//end-of-func

/*
console.log("You've delt: ");
console.log(getCardString(playerCards[0]));
console.log(getCardString(playerCards[1]));
*/