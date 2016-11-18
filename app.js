console.log('app.js is connected');

//Play sound when user clicks on a key
var userSound = function() {
$('#keyC').on('click', function() {
    $('#audioKeyC').get(0).play();
});
$('#keyD').on('click', function() {
    $('#audioKeyD').get(0).play();
});
$('#keyE').on('click', function() {
    $('#audioKeyE').get(0).play();
});
$('#keyF').on('click', function() {
    $('#audioKeyF').get(0).play();
});
$('#keyG').on('click', function() {
    $('#audioKeyG').get(0).play();
});
// $('img').on('mouseover', function() {
//     $('#audioKeyAll').get(0).play();
// });
};
userSound();

//global variables
computerSequence = [];
userSequence = [];


//Function to initialize board
function initialize() {

}

//function to trigger the start of the game
function startGame() {
  $('img').on('click', function() {
      $('#audioKeyAll').get(0).play();
      incRound();
      // var round =0;
      // round++;
      // var incRound = $('.round').html().replace('Round: ' +round++);
      // $('.round').html(incRound);
  });
}
startGame();

//function to increment the round
function incRound() {
  var round = 0;
  $('img').click(function() {
    round++;
    $('.round').html('Round: ' + round);
});
}
incRound();

//function to generate computer sequence
function createSequence(rounds) {
  for (var i=0; i<=rounds; i++){
    computerSequence.push(Math.floor(Math.random() * 5) + 1);
  }
}
console.log(createSequence(5));
createSequence(2);

//function for computer to take a turn and generate  flash and sound
function computerTurn(key, sound) {
  $.each(computerSequence, function(i, num) {
      setTimeout(function(){
        flash($(shape+num),1,300,num);
      },500*index*difficulty);
  });

}
