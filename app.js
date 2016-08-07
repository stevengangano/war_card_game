// var x = document.getElementById("pokemon")

//generates a random number between 0-2
// x.innerHTML = Math.floor(Math.random() * 3) + 0);

var AceSpade = {
	image: 'img/AceSpade.png',
	value: 14
}

var AceClub = {
	image: 'img/AceClub.png',
	value: 14
}

var AceDiamond = {
	image: 'img/AceDiamond.png',
	value: 14
}

var AceHeart = {
	image: 'img/AceHeart.png',
	value: 14
}

var KingSpade = {
	image: 'img/KingSpade.png',
	value: 13
}

var KingClub = {
	image: 'img/KingClub.png',
	value: 13
}

var KingDiamond = {
	image: 'img/KingDiamond.png',
	value: 13
}

var KingHeart= {
	image: 'img/KingHeart.png',
	value: 13
}

var QueenHeart= {
	image: 'img/queenHeart.png',
	value: 12
}

var QueenDiamond= {
	image: 'img/queenDiamond.png',
	value: 12
}

var QueenSpade= {
	image: 'img/queenSpade.png',
	value: 12
}

var QueenClub= {
	image: 'img/queenClub.png',
	value: 12
}

var JackHeart= {
	image: 'img/jackHeart.png',
	value: 11
}

var JackDiamond= {
	image: 'img/jackDiamond.png',
	value: 11
}

var JackSpade= {
	image: 'img/jackSpade.png',
	value: 11
}

var JackClub= {
	image: 'img/jackClub.png',
	value: 11
}

var TenHeart= {
	image: 'img/tenHeart.png',
	value: 10
}

var TenDiamond= {
	image: 'img/tenDiamond.png',
	value: 10
}

var TenSpade= {
	image: 'img/tenSpade.png',
	value: 10
}

var TenClub= {
	image: 'img/tenClub.png',
	value: 10
}

var NineHeart= {
	image: 'img/nineHeart.png',
	value: 9
}

var NineDiamond= {
	image: 'img/nineDiamond.png',
	value: 9
}

var NineSpade= {
	image: 'img/nineSpade.png',
	value: 9
}

var NineClub= {
	image: 'img/nineClub.png',
	value: 9
}

var EightHeart= {
	image: 'img/eightHeart.png',
	value: 8
}

var EightDiamond= {
	image: 'img/eightDiamond.png',
	value: 8
}

var EightSpade= {
	image: 'img/eightSpade.png',
	value: 8
}

var EightClub= {
	image: 'img/eightClub.png',
	value: 8
}

var SevenHeart= {
	image: 'img/sevenHeart.png',
	value: 7
}

var SevenDiamond= {
	image: 'img/sevenDiamond.png',
	value: 7
}

var SevenSpade= {
	image: 'img/sevenSpade.png',
	value: 7
}

var SevenClub= {
	image: 'img/sevenClub.png',
	value: 7
}

var SixHeart= {
	image: 'img/sixHeart.png',
	value: 6
}

var SixDiamond= {
	image: 'img/sixDiamond.png',
	value: 6
}

var SixSpade= {
	image: 'img/sixSpade.png',
	value: 6
}

var SixClub= {
	image: 'img/sixClub.png',
	value: 6
}

var FiveHeart= {
	image: 'img/fiveHeart.png',
	value: 5
}

var FiveDiamond= {
	image: 'img/fiveDiamond.png',
	value: 5
}

var FiveSpade= {
	image: 'img/fiveSpade.png',
	value: 5
}

var FiveClub = {
	image: 'img/fiveClub.png',
	value: 5
}

var FourHeart= {
	image: 'img/fourHeart.png',
	value: 4
}

var FourDiamond= {
	image: 'img/fourDiamond.png',
	value: 4
}

var FourSpade= {
	image: 'img/fourSpade.png',
	value: 4
}

var FourClub= {
	image: 'img/fourClub.png',
	value: 4
}

var ThreeHeart= {
	image: 'img/threeHeart.png',
	value: 3
}

var ThreeDiamond= {
	image: 'img/threeDiamond.png',
	value: 3
}

var ThreeSpade= {
	image: 'img/threeSpade.png',
	value: 3
}

var ThreeClub= {
	image: 'img/threeClub.png',
	value: 3
}

var TwoHeart= {
	image: 'img/twoHeart.png',
	value: 2
}

var TwoDiamond= {
	image: 'img/twoDiamond.png',
	value: 2
}

var TwoSpade= {
	image: 'img/twoSpade.png',
	value: 2
}

var TwoClub= {
	image: 'img/twoClub.png',
	value: 2
}


var cards = [AceSpade, AceClub, AceDiamond, AceHeart, KingSpade, KingClub, KingDiamond, KingHeart, 
QueenHeart, QueenDiamond, QueenSpade, QueenClub, JackHeart, JackDiamond, JackClub, JackSpade, TenHeart, TenDiamond, TenSpade, TenClub, NineHeart, NineDiamond, NineSpade, NineClub, EightHeart, EightDiamond, EightSpade, EightClub, SevenDiamond, SevenHeart, SevenClub, SevenSpade, SixSpade, SixClub, SixDiamond, SixHeart, FiveHeart, FiveDiamond, FiveSpade, FiveClub,
FourDiamond, FourHeart, FourClub, FourSpade, ThreeDiamond, ThreeHeart, ThreeClub, ThreeSpade, TwoHeart, TwoDiamond, TwoClub, TwoSpade]

// var cards = [AceSpade, AceClub, AceDiamond, AceHeart, KingSpade, KingClub, KingDiamond, KingHeart]

var you =  26
var dealerrr = 26

var drawCard = function() {

  	var randomPlayer = Math.floor(Math.random() * cards.length);

  	var randomPlayerWar = Math.floor(Math.random() * cards.length);

  	var randomDealerWar = Math.floor(Math.random() * cards.length);
  	
	var randomPlayerImage = Math.floor(Math.random() * cards.length);
	
	var randomPlayerWarImageValue = Math.floor(Math.random() * cards.length);
	var randomPlayerWarImageValue2 = Math.floor(Math.random() * cards.length);	
	var randomPlayerWarImageValue3 = Math.floor(Math.random() * cards.length);
	var randomPlayerWarImageValue4 = Math.floor(Math.random() * cards.length);
	var randomPlayerWarImageValue5 = Math.floor(Math.random() * cards.length);
	var randomPlayerWarImageValue6 = Math.floor(Math.random() * cards.length);
	var randomPlayerWarImageValue7 = Math.floor(Math.random() * cards.length);

	var randomDealerWarImageValue = Math.floor(Math.random() * cards.length);
	var randomDealerWarImageValue2 = Math.floor(Math.random() * cards.length);
	var randomDealerWarImageValue3 = Math.floor(Math.random() * cards.length);
	var randomDealerWarImageValue4 = Math.floor(Math.random() * cards.length);
	var randomDealerWarImageValue5 = Math.floor(Math.random() * cards.length);
	var randomDealerWarImageValue6 = Math.floor(Math.random() * cards.length);
	var randomDealerWarImageValue7 = Math.floor(Math.random() * cards.length);

	var playerImage = document.getElementById('image').src = cards[randomPlayer].image
	var yourDamage = document.getElementById('damage').value = cards[randomPlayer].value
	
	document.getElementById('image').src = cards[randomPlayer].image
	document.getElementById('damage').value = cards[randomPlayer].value

	var drawButton = document.getElementById('draw')
	var playAgainButton = document.getElementById('playAgain')

opponentDraw();

if (playerImage === Myapp.dealerImage) {
document.getElementById('image').src = cards[randomPlayerImage].image;  
document.getElementById('damage').value = cards[randomPlayer].value;
}

if(yourDamage > Number(opponentDamage.innerHTML)) {
 hide();
 you++;
 dealerrr--;
 document.getElementById('loseOrwin').textContent = 'You Win!';
 document.getElementById('war').innerHTML = ''
 console.log('Your card: ' + playerImage)
 console.log('Your value: ' + yourDamage)
 console.log('Dealer card: ' + Myapp.dealerImage)
 console.log('Dealer value: ' + Number(opponentDamage.innerHTML))
 console.log('You win!')

} else if (yourDamage === Number(opponentDamage.innerHTML)){ 
	
	
	document.getElementById('war').textContent = 'WAR!!!!'
	
	// Displays players W.A.R.
	var p = document.getElementsByClassName('playerWar')
	var i;
    for (i = 0; i < p.length; i++) {
        p[i].src='img/warCard.png'
        p[i].style.display='inline'
    }

	function playerWarCard () {
	document.getElementById('playerWarCard').src = cards[randomPlayerWar].image;
	document.getElementById('damage').value = cards[randomPlayerWar].value;
	document.getElementById('playerWarCard').style.display = 'inline';
	}	
	setTimeout(playerWarCard, 2000)


	// Displays dealers W.A.R	 
	var d = document.getElementsByClassName("dealerWar");
	var i;
    for (i = 0; i < d.length; i++) {
        d[i].src='img/warCard.png'
        d[i].style.display='inline'
    }
	
	function dealerWarCard(){
		document.getElementById('dealerWarCard').src = cards[randomDealerWar].image
		document.getElementById('damage').value = cards[randomDealerWar].value
		document.getElementById('dealerWarCard').style.display = 'inline'
	}
	setTimeout(dealerWarCard, 2000)
	


var warPlayer = document.getElementById('playerWarCard').src = cards[randomPlayerWar].image
var warDealer = document.getElementById('dealerWarCard').src = cards[randomDealerWar].image
var player = document.getElementById('damage').value = cards[randomPlayerWar].value
var dealer = document.getElementById('damage').value = cards[randomDealerWar].value

// If Player's War Card is equal to any of the other 3 cards, then change card
if (warPlayer === warDealer) {
document.getElementById('playerWarCard').src = cards[randomPlayerWarImageValue].image
document.getElementById('damage').value = cards[randomPlayerWarImageValue].value
} 
if (warPlayer === playerImage) {
document.getElementById('playerWarCard').src = cards[randomPlayerWarImageValue2].image
document.getElementById('damage').value = cards[randomPlayerWarImageValue2].value	
} 
if (warPlayer === Myapp.dealerImage){
document.getElementById('playerWarCard').src = cards[randomPlayerWarImageValue3].image
document.getElementById('damage').value = cards[randomPlayerWarImageValue3].value
}

// If Dealer's War Card is equal to any of the other 3 cards, then change card
if (warDealer === warPlayer) {
document.getElementById('dealerWarCard').src = cards[randomDealerWarImageValue].image
document.getElementById('damage').value = cards[randomDealerWarImageValue].value
} else if (warDealer === playerImage) {
document.getElementById('dealerWarCard').src = cards[randomDealerWarImageValue2].image
document.getElementById('damage').value = cards[randomDealerWarImageValue2].value
} else if (warDealer === Myapp.dealerImage){
document.getElementById('dealerWarCard').src = cards[randomDealerWarImageValue3].image
document.getElementById('damage').value = cards[randomDealerWarImageValue3].value
}


function winOrlose () {
	if (player > dealer) {
		document.getElementById('loseOrwin').innerHTML = 'You Win!';
 		you +=4;
 		dealerrr -=4;
 		console.log('---WAR!---')
 		console.log('Your card: ' + warPlayer)
 		console.log('Your value: ' + player)
 		console.log('Dealer card: ' + warDealer)
 		console.log('Dealer value: ' + dealer)
 		console.log('You win!')
	} 

	// 	else if (player === dealer) {

	// 	console.log(document.getElementById('playerWarCard').src = cards[randomPlayerWarImageValue4].image)
	// 	console.log(playerDoubleWarValue)
	// 	console.log(document.getElementById('dealerWarCard').src = cards[randomDealerWarImageValue4].image)
	// 	console.log(dealerDoubleWarValue)

	// 	alert('double war')
	// 	var playerDoubleWarImage = document.getElementById('playerWarCard').src = cards[randomPlayerWarImageValue4].image
	// 	return playerDoubleWarImage;
	// 	var playerDoubleWarValue = document.getElementById('damage').value = cards[randomPlayerWarImageValue4].value

	// 	return playerDoubleWarValue;
	// 	console.log(playerDoubleWarValue)

	// 	var dealerDoubleWarImage = document.getElementById('dealerWarCard').src = cards[randomDealerWarImageValue4].image
	// 	return dealerDoubleWarImage;
	// 	var dealerDoubleWarValue = document.getElementById('damage').value = cards[randomDealerWarImageValue4].value
	// 	return dealerDoubleWarValue;
	// 	console.log(dealerDoubleWarValue)

	// 	//need to make sure double war cards dont match others
	// 	if (playerDoubleWarImage === dealerDoubleWarImage) {
	// 	document.getElementById('playerWarCard').src = cards[randomPlayerWarImageValue5].image
	// 	document.getElementById('damage').value = cards[randomPlayerWarImageValue5].value
	// 	}
	// 	if (playerDoubleWarImage === Myapp.dealerImage) {
	// 	document.getElementById('playerWarCard').src = cards[randomPlayerWarImageValue6].image
	// 	document.getElementById('damage').value = cards[randomPlayerWarImageValue6].value
	// 	}
	// 	if (playerDoubleWarImage === playerImage) {
	// 	document.getElementById('playerWarCard').src = cards[randomPlayerWarImageValue7].image
	// 	document.getElementById('damage').value = cards[randomPlayerWarImageValue7].value
	// 	}

	// 	//need to make sure double war cards dont match others
	// 	if (dealerDoubleWarImage === playerDoubleWarImage) {
	// 	document.getElementById('dealerWarCard').src = cards[randomDealerWarImageValue5].image
	// 	document.getElementById('damage').value = cards[randomDealerWarImageValue5].value
	// 	}
	// 	if (dealerDoubleWarImage === Myapp.dealerImage) {
	// 	document.getElementById('dealerWarCard').src = cards[randomDealerWarImageValue6].image
	// 	document.getElementById('damage').value = cards[randomDealerWarImageValue6].value
	// 	}
	// 	if (dealerDoubleWarImage === playerImage) {
	// 	document.getElementById('playerWarCard').src = cards[randomDealerWarImageValue7].image
	// 	document.getElementById('damage').value = cards[randomDealerWarImageValue7].value
	// 	}


	// 	if (playerDoubleWarValue > dealerDoubleWarValue){
	// 		document.getElementById('loseOrwin').innerHTML = 'You Win';
	// 		you +=8;
	// 		dealerrr -=8;
	// 		console.log(playerDoubleWarValue)
	// 		console.log(dealerDoubleWarValue)
	// 	} else {
	// 		document.getElementById('loseOrwin').innerHTML = 'You Lose';
	// 		dealerrr +=8;
 // 			you -=8;
	// 		console.log(playerDoubleWarValue)
	// 		console.log(dealerDoubleWarValue)
	// 	}
	// 	document.getElementById('you').textContent= 'Player: ' + you;
	// 	document.getElementById('dealer').textContent= 'Dealer: ' + dealerrr;

	// }

else {
		document.getElementById('loseOrwin').innerHTML = 'Dealer Wins!';
 		dealerrr +=4;
 		you -=4;
 		console.log('---WAR!---')
 		console.log('Your card: ' + warPlayer)
 		console.log('Your value: ' + player)
 		console.log('Dealer card: ' + warDealer)
 		console.log('Dealer value: ' + dealer)
 		console.log('You lose!')
	}
	document.getElementById('you').textContent= 'Player: ' + you;
	document.getElementById('dealer').textContent= 'Dealer: ' + dealerrr;

}
setTimeout(winOrlose, 2000)


} else {
	 hide();
	 dealerrr++;
 	 you--;
	 document.getElementById('loseOrwin').textContent = 'Dealer Wins!';
	 document.getElementById('war').innerHTML = ''
	console.log('Your card: ' + playerImage)
 	console.log('Your value: ' + yourDamage)
 	console.log('Dealer card: ' + Myapp.dealerImage)
 	console.log('Dealer value: ' + Number(opponentDamage.innerHTML))
 	console.log('You lose!')
	} 

	document.getElementById('you').textContent= 'Player: ' + you;
	document.getElementById('dealer').textContent= 'Dealer: ' + dealerrr;


	//Hide Draw Button
	drawButton.style.display='inline' 
	drawButton.className='btn btn-primary text-center'
	//Show Play Again Button
	playAgainButton.style.display='inline'
	playAgainButton.className='btn btn-primary text-center'
	//Hide Opponent Value
	document.getElementById('opponentDamage').style.display='none'
	//Show if Win or Lose
	document.getElementById('loseOrwin').style.display='block'

	if (you >= 52) {		
		playAgain();
	} 
	if (dealerrr >= 52){	
		playAgain();
	}
	
}


var Myapp = {}

// Opponent Card
function opponentDraw() {

	for (i=0; i < cards.length; i++) {

  	var randomDealer = Math.floor(Math.random() * cards.length);
  	var randomDealerImage = Math.floor(Math.random() * cards.length);

	document.getElementById('opponentImage').src = cards[randomDealer].image

	document.getElementById('opponentDamage').value = cards[randomDealer].value

	Myapp.dealerImage = document.getElementById('opponentImage').src = cards[randomDealer].image

	var opponentDamage = document.getElementById('opponentDamage').innerHTML = cards[randomDealer].value

	}
}

function cardsFaceddown() {
	
var playerCard = image;
var dealerCard = opponentImage.src;

if (playerCard || dealerCard === '') {
		document.getElementById('image').src = 'img/drawCard.png'
		
		document.getElementById('damage').innerHTML = ''
		document.getElementById('opponentImage').src = 'img/drawCard.png'
		document.getElementById('opponentDamage').innerHTML = ''
	} 

	document.getElementById('playAgain').display ='none'
}

// Puts cards faced down as default
cardsFaceddown();

function playAgain () {
	cardsFaceddown();

	var drawButton = document.getElementById('draw')
	drawButton.className ='visible btn btn-primary';
	document.getElementById('loseOrwin').style.display ='none';

	// Grab player War Cards and hide
	var p = document.getElementsByClassName("playerWar");
    var i;
    for (i = 0; i < p.length; i++) {
        p[i].style.display = "none";
    }
    document.getElementById('playerWarCard').style.display='none'


    // Grab player War Cards and hide
	var d = document.getElementsByClassName("dealerWar");
    var i;
    for (i = 0; i < d.length; i++) {
        d[i].style.display = "none";
    }
    document.getElementById('dealerWarCard').style.display='none'

    // Figure out how to reset score

    document.getElementById('you').textContent = 'Player: ' + 26
    document.getElementById('dealer').textContent = 'Dealer: ' + 26
 
}

function hide () {
	// Grab player War Cards and hide
	var p = document.getElementsByClassName("playerWar");
    var i;
    for (i = 0; i < p.length; i++) {
        p[i].style.display = "none";
    }
    document.getElementById('playerWarCard').style.display = 'none'

    var d = document.getElementsByClassName("dealerWar");
    var i;
    for (i = 0; i < d.length; i++) {
        d[i].style.display = "none";
    }
    document.getElementById('dealerWarCard').style.display = 'none'
	
}

