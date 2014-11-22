var $turn = 0;
var $o = [];
var $x = [];
var $winningCombo = [[1, 2, 3]];

$(document).ready(function() {
	

	$('td').click(function(){
		if( $turn % 2 === 0 ) {
			$(this).text("X");
			var $clicked = $(this).attr("id");
			$(this).off('click');
			$x.push(parseInt($clicked));
			$('#player').text("Player one's turn");
			console.log($x);
			winner();
		}
		else {
			$(this).text("O");
			var $clicked = $(this).attr("id");
			$(this).off('click');
			$o.push(parseInt($clicked));
			$('#player').text("Player two's turn");
			console.log($o);
			
		}
		$turn++;
	});

	
});

var winner = function() {
	if ($x.length >= 3) {
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