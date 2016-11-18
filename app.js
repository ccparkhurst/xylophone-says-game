console.log('app.js is connected');

//Play sound when user clicks on a key --> "free play mode"
function freePlayMode() {
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
};
freePlayMode();

//global variables
var compSequenceArray = [];
var userSequenceArray = [];
var keys = [];


//Function to initialize board
function initialize() {

}
//function to trigger the start of the game
function startGame() {
  $('img').on('click', function() {
      $('#audioKeyAll').get(0).play();
      incRound();
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

//function to generate the computer sequence
function generateCompSequence() {
      compSequenceArray.push(Math.floor(Math.random() * 5) +1);
      return compSequenceArray;
}
generateCompSequence();

//function to flash key and play sound of generated element
function showCompSequence() {
  // keys = ['#keyC','#keyD','#keyD','#keyF','#keyG'];
  for (var i = 0; i<compSequenceArray.length; i++){
      if (i === 0) {
        $('#keyC').stop().animate({opacity: '1'}, 10);      //key flash
        $('#keyC').stop().animate({opacity: '0.5'}, 300);   //key flash
        $('#audioKeyC').get(0).play();                      //play soun
        }
      }
    }
showCompSequence();

//function to display the computer sequence

//function to make the keys flash

//object to generate computer sequence and display to user
// var compSequence = {
//   keys: [{keyC: $('#keyC'), keyD: $('#keyD'), keyE: $('#keyD'), keyF: $('#keyF'), keyG: $('#keyG')}],
//   compSequenceArray: [],
//   userSequenceArray: [],
//   key: '.key',
//   keyFlash: function(element, times, speed, key){         //function to make the keys flash
//     var that = this;
//     if(times > 0){							                       //make sure the key should flash
//       that.playSound(key);				                     //play the corresponding key sound
//       element.stop().animate({opacity: '1'}, {		     //animate the key toflash
//         duration: 50,
//         complete: function(){
//         element.stop().animate({opacity: '0.5'}, 300);
//         }
//       });												                       //end animation
//     }
//     if (times > 0) {									                 //call the flash function again until done the correct amount of times
//       setTimeout(function () {
//         that.keyFlash(element, times, speed, key);
//       }, speed);
//       times -= 1;						                           //times - 1 for each time it's called
//     }
//   },
//   playSound: function(key){                              //plays sound that corresponds with key flash
//     var audio= $('.audio'+key)[0];
// 		audio.currentTime=0;				                      //resets audio position to the start of the clip
// 		audio.play();
//   },
//   genCompSequence: function(){                         //generate computer sequence
//     for (var i=0; i<keys.length; i++){
//       this.compSequenceArray.push(Math.floor(Math.random() * 5) +1);
//     }
//   },
//   displayCompTurn: function(){                             //display computer sequence to user
//     var that = this;
//     $.each(this.genCompSequence, function(index, item) { //iterate over each value in the computers generated array
//         setTimeout(function(){
//           that.keyFlash($(that.shape+item),1,300,item);
//         },500*index); //multiply timeout by how number of items in the array so they play sequentially (add a *that.difficulty to add difficulty)
//     });
//   }
// };






//function to generate computer sequence
// function createSequence(rounds) {
//   for (var i=0; i<=rounds; i++){
//     computerSequence.push(Math.floor(Math.random() * 5) + 1);
//   }
// }
//
// createSequence();

// //function for computer to take a turn and generate  flash and sound
// function computerTurn(key, sound) {
//   $.each(computerSequence, function(i, num) {
//       setTimeout(function(){
//         flash($(shape+num),1,300,num);
//       },500*index*difficulty);
//   });
//
// }
