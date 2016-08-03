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
	image: 'img/KingSpade.jpg',
	value: 13
}

var KingClub = {
	image: 'img/KingClub.jpg',
	value: 13
}

var KingDiamond = {
	image: 'img/KingDiamond.jpg',
	value: 13
}

var KingHeart= {
	image: 'img/KingHeart.png',
	value: 13
}

var QueenHeart= {
	image: 'img/queenHeart.jpg',
	value: 12
}

var QueenDiamond= {
	image: 'img/queenDiamond.jpg',
	value: 12
}

var QueenSpade= {
	image: 'img/queenSpade.jpg',
	value: 12
}

var QueenClub= {
	image: 'img/queenClub.jpg',
	value: 12
}

var JackHeart= {
	image: 'img/jackHeart.jpg',
	value: 11
}

var JackDiamond= {
	image: 'img/jackDiamond.jpg',
	value: 11
}

var JackSpade= {
	image: 'img/jackSpade.jpg',
	value: 11
}

var JackClub= {
	image: 'img/jackClub.jpg',
	value: 11
}

var TenHeart= {
	image: 'img/tenHeart.jpg',
	value: 10
}

var TenDiamond= {
	image: 'img/tenDiamond.jpg',
	value: 10
}

var TenSpade= {
	image: 'img/tenSpade.jpg',
	value: 10
}

var TenClub= {
	image: 'img/tenClub.jpg',
	value: 10
}

var NineHeart= {
	image: 'img/nineHeart.jpg',
	value: 9
}

var NineDiamond= {
	image: 'img/nineDiamond.jpg',
	value: 9
}

var NineSpade= {
	image: 'img/nineSpade.jpg',
	value: 9
}

var NineClub= {
	image: 'img/nineClub.jpg',
	value: 9
}

var EightHeart= {
	image: 'img/eightHeart.jpg',
	value: 8
}

var EightDiamond= {
	image: 'img/eightDiamond.jpg',
	value: 8
}

var EightSpade= {
	image: 'img/eightSpade.jpg',
	value: 8
}

var EightClub= {
	image: 'img/eightClub.jpg',
	value: 8
}

var SevenHeart= {
	image: 'img/sevenHeart.jpg',
	value: 7
}

var SevenDiamond= {
	image: 'img/sevenDiamond.jpg',
	value: 7
}

var SevenSpade= {
	image: 'img/sevenSpade.jpg',
	value: 7
}

var SevenClub= {
	image: 'img/sevenClub.jpg',
	value: 7
}

var SixHeart= {
	image: 'img/sixHeart.jpg',
	value: 6
}

var SixDiamond= {
	image: 'img/sixDiamond.jpg',
	value: 6
}

var SixSpade= {
	image: 'img/sixSpade.jpg',
	value: 6
}

var SixClub= {
	image: 'img/sixClub.jpg',
	value: 6
}

var FiveHeart= {
	image: 'img/fiveHeart.jpg',
	value: 5
}

var FiveDiamond= {
	image: 'img/fiveDiamond.jpg',
	value: 5
}

var FiveSpade= {
	image: 'img/fiveSpade.jpg',
	value: 5
}

var FiveClub = {
	image: 'img/fiveClub.jpg',
	value: 5
}

var FourHeart= {
	image: 'img/fourHeart.jpg',
	value: 4
}

var FourDiamond= {
	image: 'img/fourDiamond.jpg',
	value: 4
}

var FourSpade= {
	image: 'img/fourSpade.jpg',
	value: 4
}

var FourClub= {
	image: 'img/fourClub.jpg',
	value: 4
}

var ThreeHeart= {
	image: 'img/threeHeart.jpg',
	value: 3
}

var ThreeDiamond= {
	image: 'img/threeDiamond.jpg',
	value: 3
}

var ThreeSpade= {
	image: 'img/threeSpade.jpg',
	value: 3
}

var ThreeClub= {
	image: 'img/threeClub.jpg',
	value: 3
}

var TwoHeart= {
	image: 'img/twoHeart.jpg',
	value: 2
}

var TwoDiamond= {
	image: 'img/twoDiamond.jpg',
	value: 2
}

var TwoSpade= {
	image: 'img/twoSpade.jpg',
	value: 2
}

var TwoClub= {
	image: 'img/twoClub.jpg',
	value: 2
}





var pokemon = [AceSpade, AceClub, AceDiamond, AceHeart, KingSpade, KingClub, KingDiamond, KingHeart, 
QueenHeart, QueenDiamond, QueenSpade, QueenClub, JackHeart, JackDiamond, JackClub, JackSpade, TenHeart, TenDiamond, TenSpade, TenClub, NineHeart, NineDiamond, NineSpade, NineClub, EightHeart, EightDiamond, EightSpade, EightClub, SevenDiamond, SevenHeart, SevenClub, SevenSpade, SixSpade, SixClub, SixDiamond, SixHeart, FiveHeart, FiveDiamond, FiveSpade, FiveClub,
FourDiamond, FourHeart, FourClub, FourSpade, ThreeDiamond, ThreeHeart, ThreeClub, ThreeSpade, TwoHeart, TwoDiamond, TwoClub, TwoSpade]




// Your Card
function drawPokemon() {

  	var randomPlayer = Math.floor(Math.random() * pokemon.length);

  	var randomPlayerWar = Math.floor(Math.random() * pokemon.length);

  	var randomDealerWar = Math.floor(Math.random() * pokemon.length);
  	
	var randomPlayerImage = Math.floor(Math.random() * pokemon.length);
	
	var randomPlayerWarImageValue = Math.floor(Math.random() * pokemon.length);
	var randomPlayerWarImageValue2 = Math.floor(Math.random() * pokemon.length);	
	var randomPlayerWarImageValue3 = Math.floor(Math.random() * pokemon.length);

	var randomDealerWarImageValue = Math.floor(Math.random() * pokemon.length);
	var randomDealerWarImageValue2 = Math.floor(Math.random() * pokemon.length);
	var randomDealerWarImageValue3 = Math.floor(Math.random() * pokemon.length);

	var playerImage = document.getElementById('image').src = pokemon[randomPlayer].image
	var yourDamage = document.getElementById('damage').value = pokemon[randomPlayer].value
	
	document.getElementById('image').src = pokemon[randomPlayer].image
	document.getElementById('damage').value = pokemon[randomPlayer].value

	
	// console.log(yourDamage)
	// console.log(parseInt(opponentDamage.innerHTML)
	// console.log(yourDamage)
	// console.log(parseInt(opponentDamage.innerHTML)

	opponentDraw();

console.log(playerImage)
console.log(yourDamage)
console.log(Myapp.dealerImage)
console.log(opponentDamage.innerHTML)

// Player War Card must not match Dealer War Card
// Also must not match initial draw cards	


if (playerImage === Myapp.dealerImage) {
document.getElementById('image').src = pokemon[randomPlayerImage].image;  
document.getElementById('damage').value = pokemon[randomPlayer].value;
// alert('error 0')
}

if(yourDamage > Number(opponentDamage.innerHTML)) {
		document.getElementById('loseOrwin').innerHTML = 'You Win';
	
	} else if (yourDamage === Number(opponentDamage.innerHTML)){ 

		alert('War')
		// Displays players W.A.R.
		var x = document.getElementsByClassName('playerWar')
		x[0].src = 'img/warCard.jpg'
		// put timer inbetween
		x[1].src = 'img/warCard.jpg'
		// put timer inbetween
		x[2].src = 'img/warCard.jpg'
		var warPlayer = document.getElementById('fourthCard').src = pokemon[randomPlayerWar].image
		document.getElementById('damage').value = pokemon[randomPlayerWar].value

		// Displays dealers W.A.R
		var z = document.getElementsByClassName('dealerWar')
		// put timer inbetween
		z[0].src = 'img/warCard.jpg'
		// put timer inbetween
		z[1].src = 'img/warCard.jpg'
		// put timer inbetween
		z[2].src = 'img/warCard.jpg'
		var warDealer = document.getElementById('fifthCard').src = pokemon[randomDealerWar].image
		document.getElementById('damage').value = pokemon[randomDealerWar].value

    // setTimeout(function(){ x[0].src = 'img/warCard.jpg' }, 2000);
    // setTimeout(function(){ x[1].src }, 4000);
    // setTimeout(function(){ x[2].src }, 6000);


var player = document.getElementById('damage').value = pokemon[randomPlayerWarImageValue].value
var dealer = document.getElementById('damage').value = pokemon[randomDealerWarImageValue].value


// If Player's War Card is equal to the other 3 cards, change card
if (warPlayer === warDealer) {
document.getElementById('fourthCard').src = pokemon[randomPlayerWarImageValue].image
document.getElementById('damage').value = pokemon[randomPlayerWarImageValue].value
// alert('error 1');

} 
if (warPlayer === playerImage) {
document.getElementById('fourthCard').src = pokemon[randomPlayerWarImageValue2].image
document.getElementById('damage').value = pokemon[randomPlayerWarImageValue2].value	
// alert('error 2')
} 
if (warPlayer === Myapp.dealerImage){
document.getElementById('fourthCard').src = pokemon[randomPlayerWarImageValue3].image
document.getElementById('damage').value = pokemon[randomPlayerWarImageValue3].value
// alert('error 3')
}

// If Dealer's War Card is equal to the other 3 cards, change card
if (warDealer === warPlayer) {
document.getElementById('fourthCard').src = pokemon[randomDealerWarImageValue].image
document.getElementById('damage').value = pokemon[randomDealerWarImageValue].value
// alert('error 4');
} else if (warDealer === playerImage) {
document.getElementById('fourthCard').src = pokemon[randomDealerWarImageValue2].image
document.getElementById('damage').value = pokemon[randomDealerWarImageValue2].value
// alert('error 5')
} else if (warDealer === Myapp.dealerImage){
document.getElementById('fourthCard').src = pokemon[randomDealerWarImageValue3].image
document.getElementById('damage').value = pokemon[randomDealerWarImageValue3].value
// alert('error 6')
}

console.log(document.getElementById('fourthCard').src = pokemon[randomPlayerWarImageValue].image)
console.log(document.getElementById('damage').value = pokemon[randomPlayerWarImageValue].value)
console.log(document.getElementById('fifthCard').src = pokemon[randomDealerWarImageValue].image)
console.log(document.getElementById('damage').value = pokemon[randomDealerWarImageValue].value)

if (player > dealer) {
	document.getElementById('loseOrwin').innerHTML = 'You Win';
} else {
	document.getElementById('loseOrwin').innerHTML = 'You Lose';
}


} else {
		document.getElementById('loseOrwin').innerHTML = 'You Lose';
	} 

	//Hide Draw Button
	document.getElementById('draw').className ='visible btn btn-primary'
	//Hide Opponent Value
	document.getElementById('opponentDamage').className = 'hidden'
	//Show if Win or Lose
	document.getElementById('loseOrwin').className ='visible'
	//Show Play Again Button
	document.getElementById('playAgain').className ='visible btn btn-primary'

	// Grab each War Card and show for player
	var player = document.getElementsByClassName("war");
	for (i = 0; i < player.length; i++) {
    player[i].style.display = "visible";
    	}
    document.getElementById('fourthCard').className='visible'

    // Grab each War Card and show for player
    var dealer = document.getElementsByClassName("dealerWar");
	var i;
	for (i = 0; i < dealer.length; i++) {
    dealer[i].style.visibility = "visible";
    	}
    document.getElementById('fifthCard').className='visible'
}




var Myapp = {}
// Opponent Card
function opponentDraw() {

	for (i=0; i < pokemon.length; i++) {

  	var randomDealer = Math.floor(Math.random() * pokemon.length);
  	var randomDealerImage = Math.floor(Math.random() * pokemon.length);

	var h = document.getElementById('opponentImage').src = pokemon[randomDealer].image

	document.getElementById('opponentDamage').value = pokemon[randomDealer].value

	var opponentDamage = document.getElementById('opponentDamage').innerHTML = pokemon[randomDealer].value

	Myapp.dealerImage = document.getElementById('opponentImage').src = pokemon[randomDealer].image

	}
}

function cardsFaceddown() {
	
var yourCard = image;
var opponentCard = opponentImage.src;

if (opponentCard || yourCard === '') {
		document.getElementById('image').src = 'img/drawCard.jpg'
		
		document.getElementById('damage').innerHTML = ''
		document.getElementById('opponentImage').src = 'img/drawCard.jpg'
		document.getElementById('opponentDamage').innerHTML = ''
	} else {
		console.log('Error')
	}

	document.getElementById('playAgain').className ='hidden'
}

// Puts cards faced down as default
cardsFaceddown();

function playAgain () {
	cardsFaceddown();
	document.getElementById('draw').className ='visible btn btn-primary';
	document.getElementById('loseOrwin').className ='hidden';

	// Grab player War Cards and hide
	var x = document.getElementsByClassName("playerWar");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById('fourthCard').className='hidden'

    // Grab player War Cards and hide
	var z = document.getElementsByClassName("dealerWar");
    var i;
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
    document.getElementById('fifthCard').className='hidden'
}
