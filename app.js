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
}
freePlayMode();

//global variables
var compSequenceArray = [];
var userSequenceArray = [];
var keys = ['C','D','E','F','G'];


//Function to initialize board
function initialize() {

}
//function to trigger the start of the game
function startGame() {
  $('img').click(function() {
    showCompSequence();

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
      compSequenceArray.push(Math.floor(Math.random() * 5));
      return compSequenceArray;
}
generateCompSequence();
// generateCompSequence();
// generateCompSequence();
// generateCompSequence();
// generateCompSequence();

//function to flash key and play sound of generated element

function playStuff(key, audio) {
  // $(key).stop().animate({opacity: '1'}, 2000);      //key flash
     $(key).animate({opacity: '0.5'}, 10);
     window.setTimeout(function(){
       $(key).animate({opacity: '1'}, 10);
       },500);                                       //key flash
     $(audio).get(0).play();                         //play sound
}


function showCompSequence() {                           //display sequence to user with flash & sound
  for (var i = 0; i<compSequenceArray.length; i++){
      window.setTimeout(function(i){
        playStuff('#key'+ keys[compSequenceArray[i]], '#audioKey' + keys[compSequenceArray[i]]);
      },i*750,i);
    }
  }
      // switch (compSequenceArray[i]) {
      //   case 0:
      //     window.setTimeout(playStuff('#keyC', '#audioKeyC'), i*1000);
      //     break;
      //   case 1:
      //     window.setTimeout(playStuff('#keyD', '#audioKeyD'), i*1000);
      //     break;
      //   case 2:
      //     window.setTimeout(playStuff('#keyE', '#audioKeyE'), i*1000);
      //     break;
      //   case 3:
      //     window.setTimeout(playStuff('#keyF', '#audioKeyF'), i*1000);
      //     break;
      //   case 4:
      //     window.setTimeout(playStuff('#keyG', '#audioKeyG'), i*1000);
      //     break;
      //   }
      // },1000*i);
    // }
// window.setTimeout(function(){ alert('here');},2000);
// window.setTimeout(function() {
//   showCompSequence();
// }, 2000);
//




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
