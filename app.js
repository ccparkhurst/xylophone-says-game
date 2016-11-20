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
var round = 0;

//initialize board
function initialize() {

}

//trigger the start of the game
function startGame() {              //***ADD A BOARD RESET ON START CLICK, otherwise if user played keys before starting game, they will have been pushed to user array
  $('img').click(function() {
    showCompSequence();
    round++;
    $('.round').html('Round: ' + round);

  });
}
startGame();

//increment the round
function incRound() {
    round++;
    $('.round').html('Round: ' + round);
  }

//generate the computer sequence
function generateCompSequence() {
      compSequenceArray.push(Math.floor(Math.random() * 5));
      return compSequenceArray;
}
generateCompSequence();

//flash key and play sound of generated element
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
      //     playStuff('#keyC', '#audioKeyC');
      //     break;
      //   case 1:
      //     playStuff('#keyD', '#audioKeyD');
      //     break;
      //   case 2:
      //     playStuff('#keyE', '#audioKeyE');
      //     break;
      //   case 3:
      //     playStuff('#keyF', '#audioKeyF');
      //     break;
      //   case 4:
      //     playStuff('#keyG', '#audioKeyG');
      //     break;
      //   }
      // }
    // }
//

//push whichever key the user presses into the user sequence array so it can be compared against computer array
function logUserSequence() {
    $('#keyC').click(function() {
      userSequenceArray.push(0);
    });
    $('#keyD').click(function() {
      userSequenceArray.push(1);
    });
    $('#keyE').click(function() {
      userSequenceArray.push(2);
    });
    $('#keyF').click(function() {
      userSequenceArray.push(3);
    });
    $('#keyG').click(function() {
      userSequenceArray.push(4);
    });
    return userSequenceArray;
}
logUserSequence();

//Compare the user sequence array to the computer array. If it's equal, have the computer go again.
function compareSequences(){
  for (var i=0; i<compSequenceArray.length; i++){
    if (userSequenceArray[i] === compSequenceArray[i] && userSequenceArray.length === compSequenceArray.length) {
        return true;
    //     generateCompSequence();
      } else {
        return false;
    //     $('#audioKeyAll').get(0).play();
    //     userSequenceArray = [];     ---
      }
  }
}
compareSequences();

// function newRound() {
//   compSequenceArray.push(Math.floor(Math.random() * 5));
//   userSequenceArray=[];
//   generateCompSequence();
//   incRound();
// }
//
// while(compareSequences(true)){
//   newRound();
// }


//While compareSequences is true, computer goes again and pushes new number to array.


//computer goes again. need to ensure that either a) the computer array grows every time and does not reset, or b) the user array resets before each turn
