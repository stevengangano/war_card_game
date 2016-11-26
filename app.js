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
	image: 'img/kingSpade.png',
	value: 13
}
var KingClub = {
	image: 'img/kingClub.png',
	value: 13
}
var KingDiamond = {
	image: 'img/kingDiamond.png',
	value: 13
}
var KingHeart= {
	image: 'img/kingHeart.png',
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

var you =  26
var dealerrr = 26
var globe = {}

var drawCard = function() {

  	var randomPlayer = Math.floor(Math.random() * cards.length);

  	var randomPlayerWar = Math.floor(Math.random() * cards.length);
  	var randomDealerWar = Math.floor(Math.random() * cards.length);
  	
	var randomPlayerImage = Math.floor(Math.random() * cards.length);

	var randomPlayerWarImageValue = Math.floor(Math.random() * cards.length);
	var randomPlayerWarImageValue2 = Math.floor(Math.random() * cards.length);	
	var randomPlayerWarImageValue3 = Math.floor(Math.random() * cards.length);
	globe.randomPlayerWarImageValue4 = Math.floor(Math.random() * cards.length);
	globe.randomPlayerWarImageValue5 = Math.floor(Math.random() * cards.length);
	globe.randomPlayerWarImageValue6 = Math.floor(Math.random() * cards.length);
	globe.randomPlayerWarImageValue7 = Math.floor(Math.random() * cards.length);

	var randomDealerWarImageValue = Math.floor(Math.random() * cards.length);
	var randomDealerWarImageValue2 = Math.floor(Math.random() * cards.length);
	var randomDealerWarImageValue3 = Math.floor(Math.random() * cards.length);
	globe.randomDealerWarImageValue4 = Math.floor(Math.random() * cards.length);
	globe.randomDealerWarImageValue5 = Math.floor(Math.random() * cards.length);
	globe.randomDealerWarImageValue6 = Math.floor(Math.random() * cards.length);
	globe.randomDealerWarImageValue7 = Math.floor(Math.random() * cards.length);

	var playerImage = document.getElementById('image').src = cards[randomPlayer].image
	var playerValue = document.getElementById('damage').value = cards[randomPlayer].value
	
	var drawButton = document.getElementById('draw')
	var playAgainButton = document.getElementById('playAgain')

	// Displays player card face up
	document.getElementById('image').src = cards[randomPlayer].image
	document.getElementById('damage').value = cards[randomPlayer].value
	//Displays dealer card face up
	dealerDraw();

	//If your card matches dealer card, change your card
	if (playerImage === Myapp.dealerImage) {
	document.getElementById('image').src = cards[randomPlayerImage].image;  
	document.getElementById('damage').value = cards[randomPlayer].value;
	}

	//If your card is greater than dealer's card
	if(playerValue > Number(dealerValue.innerHTML)) {
	 hideWar();
	 you++;
	 dealerrr--;
	 document.getElementById('loseOrwin').textContent = 'You Win'
	 document.getElementById('playerWar').innerHTML=''
	 console.log('Your card: ' + playerImage)
	 console.log('Your value: ' + playerValue)
	 console.log('Dealer card: ' + Myapp.dealerImage)
	 console.log('Dealer value: ' + Number(dealerValue.textContent))
	 console.log('You win!')

	//If it's a tie, then declare WAR
	} else if (playerValue === Number(dealerValue.textContent)){ 
	
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

	var playersWar = document.getElementById('playerWar')
	playersWar.textContent = 'Your WAR Cards'
	playersWar.className = 'text-center'


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

	var dealersWar = document.getElementById('dealerWar')
	dealersWar.textContent = 'Dealer WAR Cards'
	dealersWar.className = 'text-center'
	

	var warPlayer = document.getElementById('playerWarCard').src = cards[randomPlayerWar].image
	var player = document.getElementById('damage').value = cards[randomPlayerWar].value
	var warDealer = document.getElementById('dealerWarCard').src = cards[randomDealerWar].image
	var dealer = document.getElementById('damage').value = cards[randomDealerWar].value

	// If your War Card is equal to any of the other 3 cards, then change your card
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

	// If Dealer's War Card is equal to any of the other 3 cards, then change dealer card
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

// WAR
function war () {
	
	if (player > dealer) {
 		you +=4;
 		dealerrr -=4;
 		document.getElementById('loseOrwin').innerHTML = 'You Win!';
 		console.log('---WAR!---')
 		console.log('Your card: ' + warPlayer)
 		console.log('Your value: ' + player)
 		console.log('Dealer card: ' + warDealer)
 		console.log('Dealer value: ' + dealer)
 		console.log('You win!')

 	// Double War
	} else if (player === dealer) {
		
		document.getElementById('war').textContent = 'DOUBLE WAR!!!!'

		var playerDoubleWarImage = document.getElementById('playerWarCard').src = cards[globe.randomPlayerWarImageValue4].image
		playerDoubleWarImage;
		var playerDoubleWarValue = document.getElementById('damage').value = cards[globe.randomPlayerWarImageValue4].value
		playerDoubleWarValue;
		
		var dealerDoubleWarImage = document.getElementById('dealerWarCard').src = cards[globe.randomDealerWarImageValue4].image
		dealerDoubleWarImage;
		var dealerDoubleWarValue = document.getElementById('damage').value = cards[globe.randomDealerWarImageValue4].value
		dealerDoubleWarValue;

		//double war cards dont match other cards
		if (playerDoubleWarImage === dealerDoubleWarImage) {
		document.getElementById('playerWarCard').src = cards[globe.randomPlayerWarImageValue5].image
		document.getElementById('damage').value = cards[globe.randomPlayerWarImageValue5].value
		}
		if (playerDoubleWarImage === Myapp.dealerImage) {
		document.getElementById('playerWarCard').src = cards[globe.randomPlayerWarImageValue6].image
		document.getElementById('damage').value = cards[globe.randomPlayerWarImageValue6].value
		}
		if (playerDoubleWarImage === playerImage) {
		document.getElementById('playerWarCard').src = cards[globe.randomPlayerWarImageValue7].image
		document.getElementById('damage').value = cards[globe.randomPlayerWarImageValue7].value
		}

		//double war cards dont match other cards
		if (dealerDoubleWarImage === playerDoubleWarImage) {
		document.getElementById('dealerWarCard').src = cards[globe.randomDealerWarImageValue5].image
		document.getElementById('damage').value = cards[globe.randomDealerWarImageValue5].value
		}
		if (dealerDoubleWarImage === Myapp.dealerImage) {
		document.getElementById('dealerWarCard').src = cards[globe.randomDealerWarImageValue6].image
		document.getElementById('damage').value = cards[globe.randomDealerWarImageValue6].value
		}
		if (dealerDoubleWarImage === playerImage) {
		document.getElementById('playerWarCard').src = cards[globe.randomDealerWarImageValue7].image
		document.getElementById('damage').value = cards[globe.randomDealerWarImageValue7].value
		}

		//If you win double WAR
		if (playerDoubleWarValue > dealerDoubleWarValue){
			document.getElementById('loseOrwin').innerHTML = 'You Win';
			you +=8;
			dealerrr -=8;
			console.log('---Double War!---')
			console.log(document.getElementById('playerWarCard').src = cards[globe.randomPlayerWarImageValue4].image)
			console.log(document.getElementById('damage').value = cards[globe.randomPlayerWarImageValue4].value)
			console.log(document.getElementById('dealerWarCard').src = cards[globe.randomDealerWarImageValue4].image)
			console.log(document.getElementById('damage').value = cards[globe.randomDealerWarImageValue4].value)
			
		} else {
			//Dealer wins double WAR
			document.getElementById('loseOrwin').innerHTML = 'You Lose';
			dealerrr +=8;
 			you -=8;
 			console.log('---Double War!---')
		console.log(document.getElementById('playerWarCard').src = cards[globe.randomPlayerWarImageValue4].image)
		console.log(document.getElementById('damage').value = cards[globe.randomPlayerWarImageValue4].value)
		console.log(document.getElementById('dealerWarCard').src = cards[globe.randomDealerWarImageValue4].image)
		console.log(document.getElementById('damage').value = cards[globe.randomDealerWarImageValue4].value)
			
		}
		document.getElementById('you').textContent= "Player's cards: " + you;
		document.getElementById('dealer').textContent= "Dealer's cards: "  + dealerrr;

	} else {
		//Dealer wins WAR
 		dealerrr +=4;
 		you -=4;
 		document.getElementById('loseOrwin').innerHTML = 'Dealer Wins!';
 		console.log('---WAR!---')
 		console.log('Your card: ' + warPlayer)
 		console.log('Your value: ' + player)
 		console.log('Dealer card: ' + warDealer)
 		console.log('Dealer value: ' + dealer)
 		console.log('You lose!')
	}
	document.getElementById('you').textContent= "Player's cards: " + you;
	document.getElementById('dealer').textContent= "Dealer's cards: " + dealerrr;

}
setTimeout(war, 2000)


} else {
	//Dealer wins 
	hideWar();
 	dealerrr++;
	you--;
	document.getElementById('loseOrwin').textContent = 'Dealer Wins!';
	console.log('Your card: ' + playerImage)
 	console.log('Your value: ' + playerValue)
 	console.log('Dealer card: ' + Myapp.dealerImage)
 	console.log('Dealer value: ' + Number(dealerValue.innerHTML))
 	console.log('You lose!')
	} 

	document.getElementById('you').textContent= "Player's cards: " + you;
	document.getElementById('dealer').textContent= "Dealer's cards: " + dealerrr;


	//Shows Draw Button
	drawButton.style.display='inline' 
	drawButton.className='btn btn-primary text-center'

	//Show Play Again Button
	playAgainButton.style.display='inline'
	playAgainButton.className='btn btn-primary text-center'

	//Hide Opponent Value
	document.getElementById('dealerValue').style.display='none'
	//Show if you win or if dealer wins
	document.getElementById('loseOrwin').style.display='block'

	if (you >= 52) {
		alert('You win!')		
		playAgain();
	} 
	if (dealerrr >= 52){
		alert('You lost!')	
		playAgain();
	}
	
}

var Myapp = {}

//Dealer's Draw
function dealerDraw() {

	for (i=0; i < cards.length; i++) {

  	var randomDealer = Math.floor(Math.random() * cards.length);
  	var randomDealerImage = Math.floor(Math.random() * cards.length);

	document.getElementById('dealerImage').src = cards[randomDealer].image

	document.getElementById('dealerValue').value = cards[randomDealer].value

	Myapp.dealerImage = document.getElementById('dealerImage').src = cards[randomDealer].image

	var dealerValue = document.getElementById('dealerValue').innerHTML = cards[randomDealer].value
	}
}

function hideWar() {
	 //Hides WAR for player
    document.getElementById('playerWar').textContent=''
	var p = document.getElementsByClassName("playerWar");
    var i;
    for (i = 0; i < p.length; i++) {
        p[i].style.display = "none";
    }
    document.getElementById('playerWarCard').style.display = 'none'
  

    //Hides WAR for dealer
    document.getElementById('dealerWar').textContent=''
    var d = document.getElementsByClassName("dealerWar");
    var i;
    for (i = 0; i < d.length; i++) {
        d[i].style.display = "none";
    }
    document.getElementById('dealerWarCard').style.display = 'none'

    //Hides war sign
    document.getElementById('war').textContent=''	
}

function cardsFaceddown() {
	
var playerCard = image;
var dealerCard = dealerImage.src;

if (playerCard || dealerCard === '') {
		document.getElementById('image').src = 'img/drawCard.png'	
		document.getElementById('damage').textContent = ''
		document.getElementById('dealerImage').src = 'img/drawCard.png'
		document.getElementById('dealerValue').textContent = ''
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
	document.getElementById('playerWar').textContent=''
	var p = document.getElementsByClassName("playerWar");
    var i;
    for (i = 0; i < p.length; i++) {
        p[i].style.display = "none";
    }
    document.getElementById('playerWarCard').style.display='none'


    // Grab player War Cards and hide
    document.getElementById('dealerWar').textContent=''
	var d = document.getElementsByClassName("dealerWar");
    var i;
    for (i = 0; i < d.length; i++) {
        d[i].style.display = "none";
    }
    document.getElementById('dealerWarCard').style.display='none'

    //Hides war sign
    document.getElementById('war').textContent=''

    //Resets Score
    var resetPlayer = 26
    var resetDealer = 26
    you = resetPlayer
    dealerrr = resetDealer
   
    document.getElementById('you').textContent = "Player's cards: " +  resetPlayer
    document.getElementById('dealer').textContent = "Dealer's cards: " + resetDealer
  
}

