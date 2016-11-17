var game = { //game object
	round: 1, //current round
	turn: 0, //current turn
	// difficulty: 1, // user difficulty
	// score: 0, //current score
	active: false, //whether a turn is active or not
	handler: false, // whether the click and sound handlers are active
	shape: '.shape', // cached string for the pad class
	compSequence: [], //array containing the generated/randomized pads
	userSequence: [], //array containing the users pad selections
};
