//
//BlackJack game
//by Amit Singh Pundeer 


let card1 = "Ace of Spades",
    card2 = "Ten of Hears";
    
console.log("Welcome to Blackjack! game");

console.log("You're dealt: ");
console.log(" "+card1);
console.log(" "+card2);


let isMultiPlayer = true;
console.log(isMultiPlayer, typeof(isMultiPlayer));


let value = false;
console.log(value, typeof(value));


let l;
console.log(l, typeof(l));


let l2 = null;
console.log( l2, typeof(l2) ); 


let cities = ["amit",1 , 2, 'c'];

console.log(cities[2], typeof(cities[2]));

let v = [0, 1, 2];

console.log(v.length);

v.push(3);
v.push(4);

console.log(v.length);

v.push(5);

console.log(v.length);

v.pop();

console.log("$" + v.length);

console.log(v);
let temp  = v.shift();
console.log(temp, v);

v.splice(1,1, 22, 23);

console.log("$",v);




