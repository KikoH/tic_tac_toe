var $turn = 0;
var $o = [];
var $x = [];

$(document).ready(function() {
	$(document).on('click', 'button', function() {
		location.reload();
	});
	start();
});

var start = function() {
	$('td').click(function(){
		if( $turn % 2 === 0 ) {
			$(this).text("X");
			var $boxId = $(this).attr("id");
			$(this).off('click');
			$x.push(parseInt($boxId));
			$('#player').text("Player one's turn");
			console.log($x);
			winner();
		}
		else {
			$(this).text("O");
			var $boxId = $(this).attr("id");
			$(this).off('click');
			$o.push(parseInt($boxId));
			$('#player').text("Player two's turn");
			console.log($o);
			winner();
		}
		$turn++;
	});
}

var winner = function() {
	var $sumX = 0;
	var $sumO = 0;
	
	if ($x.length >= 3) {
		for (i = 0; i < $x.length; i++) {
			$sumX += $x[i];
		}
		if ( ($x[0]) + ($x[1]) + ($x[2]) === 15 ) {
			alert("Player 1 is a winner (first 3)");
		}else if ( ($x[0]) + ($x[1]) + ($x[3]) === 15 ) {
			alert("Player 1 is a winner (0,1,3)");
		}else if ( ($x[0]) + ($x[1]) + ($x[4]) === 15 ) {
			alert("Player 1 is a winner (0,1,4)");
		}else if ( ($x[0]) + ($x[2]) + ($x[4]) === 15 ) {
			alert("Player 1 is a winner (0,2,4)");
		}else if ( ($x[1]) + ($x[2]) + ($x[3]) === 15 ) {
			alert("Player 1 is a winner (1,2,3)");
		}else if ( ($x[1]) + ($x[2]) + ($x[4]) === 15 ) {
			alert("Player 1 is a winner (1,2,4)");
		}else if ( ($x[2]) + ($x[3]) + ($x[4]) === 15 ) {
			alert("Player 1 is a winner (2,3,4)");
		}else if ( ($x[0]) + ($x[2]) + ($x[3]) === 15 ) {
			alert("Player 1 is a winner (0,2,3)");
		}
	}

	if ($o.length >= 3) {
		for (i = 0; i < $o.length; i++) {
			$sumO += $o[i];
		}
		if ( ($o[0]) + ($o[1]) + ($o[2]) === 15 ) {
			alert("Player 2 is a winner (first 3)");
		}else if ( ($o[0]) + ($o[1]) + ($o[3]) === 15 ) {
			alert("Player 2 is a winner (0,1,2)");
		}else if ( ($o[0]) + ($o[2]) + ($o[3]) === 15 ) {
			alert("Player 2 is a winner (0,1,4)");
		}else if ( ($o[1]) + ($o[2]) + ($o[3]) === 15 ) {
			alert("Player 2 is a winner (0,2,4)");
		}
	}
}

	// function checkForWinner(player) {
	// 	winners = [[1,2,3],[4,5,6]]
	// 	$blue = [1,3,5,7]
	// 	blue_combos = [[1,3,5],[3,5,7]]
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