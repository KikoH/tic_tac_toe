var $turn = 0;
var $o = [];
var $x = [];
var $sum = 0;
var $isWinner = false;

$(document).ready(function() {
	$("#tie").hide();
	$('#player').text("Player one's turn");

	$(document).on('click', 'button', function() {
		location.reload();
	});
	start();
});

var start = function() {
	$('td').click(function(){
		if( $turn % 2 === 0 ) {
			$('<img style="max-height: auto; max-width: 100%;" src="http://storage.googleapis.com/ticimages/x.jpg">').appendTo($(this));
			var $boxId = $(this).attr("id");
			$(this).off('click');
			$x.push(parseInt($boxId));
			$('#player').text("Player one's turn");
			console.log($x);
			winner();
		}
		else {
			$('<img style="max-height: auto; max-width: 100%;" src="http://storage.googleapis.com/ticimages/o.jpg">').appendTo($(this));
			var $boxId = $(this).attr("id");
			$(this).off('click');
			$o.push(parseInt($boxId));
			$('#player').text("Player two's turn");
			console.log($o);
			winner();
		}
		$turn++;
		console.log($turn);
		if ( ($turn >= 9) && ($isWinner === false) ) {
			$('#tie').show();
			setTimeout( '$("img").hide();', 2000 );
		}
	});
}

var winner = function() {
	var $sumX = 0;
	var $sumO = 0;
	
	if ($x.length >= 3) {
		if ( ($x[0]) + ($x[1]) + ($x[2]) === 15 ) {
			alert("Player 1 is a winner");
			$isWinner = true;
		}else if ( ($x[0]) + ($x[1]) + ($x[3]) === 15 ) {
			alert("Player 1 is a winner");
			$isWinner = true;
		}else if ( ($x[0]) + ($x[1]) + ($x[4]) === 15 ) {
			alert("Player 1 is a winner");
			$isWinner = true;
		}else if ( ($x[0]) + ($x[2]) + ($x[4]) === 15 ) {
			alert("Player 1 is a winner");
			$isWinner = true;
		}else if ( ($x[1]) + ($x[2]) + ($x[3]) === 15 ) {
			alert("Player 1 is a winner");
			$isWinner = true;
		}else if ( ($x[1]) + ($x[2]) + ($x[4]) === 15 ) {
			alert("Player 1 is a winner");
			$isWinner = true;
		}else if ( ($x[2]) + ($x[3]) + ($x[4]) === 15 ) {
			alert("Player 1 is a winner");
			$isWinner = true;
		}else if ( ($x[0]) + ($x[2]) + ($x[3]) === 15 ) {
			alert("Player 1 is a winner");
			$isWinner = true;
		}
		$(window).off("click");
	}

	if ($o.length >= 3) {
		for (i = 0; i < $o.length; i++) {
			$sumO += $o[i];
		}
		if ( ($o[0]) + ($o[1]) + ($o[2]) === 15 ) {
			alert("Player 2 is a winner");
			$isWinner = true;
		}else if ( ($o[0]) + ($o[1]) + ($o[3]) === 15 ) {
			alert("Player 2 is a winner");
			$isWinner = true;
		}else if ( ($o[0]) + ($o[2]) + ($o[3]) === 15 ) {
			alert("Player 2 is a winner");
			$isWinner = true;
		}else if ( ($o[1]) + ($o[2]) + ($o[3]) === 15 ) {
			alert("Player 2 is a winner d");
			$isWinner = true;
		}
	}
}

	// function checkForWinner(player) {
	// 	winners = [[1,2,3],[4,5,6]]
	// 	$blue = [1,3,5,7]
	// 	blue_combos = [[1,3,6],[3,5,7]]

	// 	a = [1,2,3]
	// 	b = [2,4,6]

	// 	a[0] == b[0]
	// 	a[0] == b[0]
	// 	a[0] == b[0]

	// 	winners[0] == blue_combos[0]
	// }


	
	// if ( ($x.toString() == ($winningCombo.toString())) ) {
	// 	console.log('winner');
	// 	console.log($.inArray($x , $winningCombo));
	// 	console.log($x);
	// 	console.log($winningCombo);

	// }else if ( ($x[0] === '1') && ($x[1] === '2') && ($x[2] === '3') ) {

	// };




// var winner = function() {
// 	if $winningCombo. {
// 		console.log('winner');

// 	}else if ( ($x[0] === '1') && ($x[1] === '2') && ($x[2] === '3') ) {

// 	}