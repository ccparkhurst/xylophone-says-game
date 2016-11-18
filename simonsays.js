var game = { //game object
  compSequence: [], //array containing the generated/randomized pads
	userSequence: [], //array containing the users pad selections
  round: 0, //current round
	turn: 0, //current turn
	// difficulty: 1, // user difficulty
	// score: 0, //current score
	active: false, //whether a turn is active or not
	handler: false, // whether the click and sound handlers are active
	shape: '.shape', // cached string for the pad class

  startGame: function(){
    $('img').on('click', function() {
        $('#audioKeyAll').get(0).play();
        incRound();
    });
  },
  incRound: function(){
    var round = 0;
    $('img').click(function() {
      round++;
      $('.round').html('Round: ' + round);
    });
  },






};

//
//   begin: function(){
//           $('img').on('click', function(){
//           this.startGame();
//           });
//   },
//   startGame: function(){
//     this.compSequence = [];
//     this.userSequence = [];
//     this.round = 0;
//     this.active = true;
//     this.nextRound();
//   },
//   nextRound: function(){
//     $('round').html(++this.round);
//     this.compSequence.push(math.random(this));
//     this.userSequence = this.computerSequence.slice(0);
//     this.animate(this.sequence);
//   }
// };
