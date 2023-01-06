let getRandomNumber = getRandomCard();
let cardSum= 0;
 console.log(cardSum);
let cards = [];
let cardEl= document. querySelector('.card-el');
let messageEl= document. querySelector('#message-el') ;
let sumEl= document. querySelector('.sum-el');
let cashEl= document.getElementById('cash-el');
let input = '';
let isAlive =false
let hasBlackjack= false; 

let player = {
  name: 'Joe',
  chips: 0
}
let playerEl= document.querySelector('#player-el');
playerEl.textContent = player.name + ':' + ' '+ '$' + player.chips;

function chipPayment(){
  if(cardSum === 21){
      let chip = 250;
      playerEl.textContent = 'Joe: $'+ chip;
      console.log(chip)
  }
}


  function getRandomCard(){
    let randomNumber= Math.floor(Math.random()* 13) + 1; 
    if(randomNumber ===1){
      return 11;
    }else if(randomNumber > 10){
      return 10;
    }else{
      return randomNumber
    }
    console.log(randomNumber)
  }
    
  function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard ();
    cards= [ firstCard , secondCard];
    cardSum = firstCard + secondCard; 
    dealCards();
  }
 
  function dealCards(){
    cardEl.textContent = 'Cards: ' 
    for (let i = 0; i < cards.length; i++) { 
      cardEl.textContent +=  cards[i] + ' ';
    }
    sumEl.textContent = 'Sum: '+ cardSum;
    if (cardSum < 21){
      input = 'Do you want another card?' ;
    }else if(cardSum === 21){
      input = "You've won a Blackjack!!!";
       hasBlackjack = true;
       console.log(input);
       chipPayment();
       
    }else {
      input = 'Game Over!'
       isAlive= false;
    }
    messageEl.textContent = input;

  }
   
   function newCard(){ 
     if (isAlive ===true && hasBlackjack === false) {
        let card= getRandomCard() ;
        cardSum += card;
        cards.push(card);
        dealCards();
     }
      

   }
   