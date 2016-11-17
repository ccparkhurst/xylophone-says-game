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
$('img').on('mouseover', function() {
    $('#audioKeyAll').get(0).play();
});
};
userSound();

//When user clicks on mallet, the game begins
function pressPlay(){

};

//Computer sequence
compSequence = [];
userSequence = [];
function compPlay(){
  for (var i=0; i<compArray.length; i++){
    compArray.push();
  }
}

//User sequence --> needs to match computer sequence
function userPlay(){
  for (var i=0; i<=compArray.length; i++){
    if (userSequence === compSequence) {
      round = 0;
      round += i;
      userArray.push();
  } else {
    //empty array and start back at 0
    //add trigger event for computer to start back at 0
    userArray = [];
    //play sound
    var key = i;
    $('this.key').on('click', function() {
        $('#audioKeyAll').get(0).play();
    });
  }
}
}

//
