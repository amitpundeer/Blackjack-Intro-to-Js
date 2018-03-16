
//
//Objects
//

function changeCard(card) {
  card.suit = "Spades"
}

let card = {
  suit: "Hearts",
  value: "Queen"
};

//console.log(card.suit);
//console.log(card.value);

changeCard(card);

//console.log(card.suit);

//
//Array of Objects
//

let cards = [{
  suit: "Hearts",
  value: "Ace"
}, {
  suit: "Spades",
  value: "Ten"
}];

//console.log(cards[0].suit);
//console.log(cards[1].value);

//
//Standard built-in objects
//

let result = Math.random() * 52;
result = Math.trunc(result);

//console.log(result);

//
//Date
//

let date = new Date().toDateString();

//console.log(date);

//
//String
//

let var1 = "Hello World";
var1 = var1.toUpperCase();

//console.log(var1);

//
//Number
//

let var2 = 0 / 0;
//console.log(Number.isNaN(var2));

console.log('ON');

let p = document.getElementById('text-area');
//p.innerText='DOM manupluation';

let btn = document.getElementById('ok-button');
p.style.display = 'none';

btn.addEventListener('click', function(){
  //p.innerText = 'button clicked';
  p.style.display = 'block'; // block <-> none
});





































