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


var drawCard = function() {

  	var randomPlayer = Math.floor(Math.random() * cards.length);

  	var randomPlayerWar = Math.floor(Math.random() * cards.length);

  	var randomDealerWar = Math.floor(Math.random() * cards.length);
  	
	var randomPlayerImage = Math.floor(Math.random() * cards.length);
	
	var randomPlayerWarImageValue = Math.floor(Math.random() * cards.length);
	var randomPlayerWarImageValue2 = Math.floor(Math.random() * cards.length);	
	var randomPlayerWarImageValue3 = Math.floor(Math.random() * cards.length);
	var randomPlayerWarImageValue4 = Math.floor(Math.random() * cards.length);

	var randomDealerWarImageValue = Math.floor(Math.random() * cards.length);
	var randomDealerWarImageValue2 = Math.floor(Math.random() * cards.length);
	var randomDealerWarImageValue3 = Math.floor(Math.random() * cards.length);
	var randomDealerWarImageValue4 = Math.floor(Math.random() * cards.length);

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
 document.getElementById('loseOrwin').innerHTML = 'You Win';
 hide();
	
} else if (yourDamage === Number(opponentDamage.innerHTML)){ 
	console.log(document.getElementById('playerWarCard').src = cards[randomPlayerWar].image)
	console.log(document.getElementById('dealerWarCard').src = cards[randomDealerWar].image)

	alert('War')
	// Displays players W.A.R.
	var x = document.getElementsByClassName('playerWar')
	var i;
    for (i = 0; i < x.length; i++) {
        x[i].src='img/warCard.png'
        x[i].style.display='inline'
    }
	// function playerWarCardOne () {
	// 	x[0].src ='img/warcard.png'
	// }
	// setTimeout(playerWarCardOne, 500)

	// function playerWarCardTwo () {
	// 	x[1].src ='img/warcard.png'
	// }
	// setTimeout(playerWarCardTwo, 1000)

	// function playerWarCardThree () {
	// 	x[2].src ='img/warcard.png'
	// }
	// setTimeout(playerWarCardThree, 1500)

	// x[0].style.display='inline';
	// x[1].style.display='inline';
	// x[2].style.display='inline';

	function playerWarCard () {
	document.getElementById('playerWarCard').src = cards[randomPlayerWar].image
	document.getElementById('playerWarCard').style.display = 'inline'
	document.getElementById('damage').value = cards[randomPlayerWar].value
	}	
	setTimeout(playerWarCard, 2000)


	// Displays dealers W.A.R	 
	var z = document.getElementsByClassName("dealerWar");
	var i;
    for (i = 0; i < z.length; i++) {
        z[i].src='img/warCard.png'
        z[i].style.display='inline'
    }
	// var dealerWarCardOne = function () {
	// 	z[0].src ='img/warcard.png'
	// }
	// setTimeout(dealerWarCardOne, 500)

	// clearInterval(dealerWarCardOne)

	// function dealerWarCardTwo () {
	// 	z[1].src ='img/warcard.png'
	// }
	// setTimeout(dealerWarCardTwo, 1000)

	// function dealerWarCardThree () {
	// 	z[2].src ='img/warcard.png'
	// }
	// setTimeout(dealerWarCardThree, 1500)

	// z[0].style.display='inline';
	// z[1].style.display='inline';
	// z[2].style.display='inline';

	function dealerWarCard(){
		document.getElementById('dealerWarCard').src = cards[randomDealerWar].image
		document.getElementById('dealerWarCard').style.display = 'inline'
		document.getElementById('damage').value = cards[randomDealerWar].value
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
		document.getElementById('loseOrwin').innerHTML = 'You Win';

	} else if (player === dealer) {

		console.log(document.getElementById('playerWarCard').src = cards[randomPlayerWarImageValue4].image)
		console.log(document.getElementById('dealerWarCard').src = cards[randomDealerWarImageValue4].image)

		alert('double war')
		document.getElementById('playerWarCard').src = cards[randomPlayerWarImageValue4].image
		var playerDoubleWarValue = document.getElementById('damage').value = cards[randomPlayerWarImageValue4].value

		document.getElementById('dealerWarCard').src = cards[randomDealerWarImageValue4].image
		var dealerDoubleWarValue = document.getElementById('damage').value = cards[randomDealerWarImageValue4].value

		//need to make sure double war cards dont match others

		if (playerDoubleWarValue > dealerDoubleWarValue){
			document.getElementById('loseOrwin').innerHTML = 'You Win';
		} else {
			document.getElementById('loseOrwin').innerHTML = 'You Lose';
		}
	} else {
		document.getElementById('loseOrwin').innerHTML = 'You Lose';
	}
}
setTimeout(winOrlose, 2000)

} else {
		document.getElementById('loseOrwin').innerHTML = 'You Lose';
		hide();
	} 

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
}


var Myapp = {}
// Opponent Card
function opponentDraw() {

	for (i=0; i < cards.length; i++) {

  	var randomDealer = Math.floor(Math.random() * cards.length);
  	var randomDealerImage = Math.floor(Math.random() * cards.length);

	var h = document.getElementById('opponentImage').src = cards[randomDealer].image

	document.getElementById('opponentDamage').value = cards[randomDealer].value

	var opponentDamage = document.getElementById('opponentDamage').innerHTML = cards[randomDealer].value

	Myapp.dealerImage = document.getElementById('opponentImage').src = cards[randomDealer].image

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
	} else {
		console.log('Error')
	}

	document.getElementById('playAgain').display ='none'
}

// Puts cards faced down as default
cardsFaceddown();

function playAgain () {
	cardsFaceddown();

	var drawButton = document.getElementById('draw')
	drawButton.className ='visible btn btn-primary';
	document.getElementById('loseOrwin').display ='none';

	// Grab player War Cards and hide
	var x = document.getElementsByClassName("playerWar");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById('playerWarCard').style.display='none'


    // Grab player War Cards and hide
	var z = document.getElementsByClassName("dealerWar");
    var i;
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
    document.getElementById('dealerWarCard').style.display='none'


}

function hide () {
	// Grab player War Cards and hide
	var x = document.getElementsByClassName("playerWar");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById('playerWarCard').style.display = 'none'

    var z = document.getElementsByClassName("dealerWar");
    var i;
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
    document.getElementById('dealerWarCard').style.display = 'none'
	
}
