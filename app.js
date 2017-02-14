//variables
var compSequenceArray = [];
var userSequenceArray = [];
var keys = ['C', 'D', 'E', 'F', 'G'];
var round = 0;
var active = false;
var difficulty;

//trigger the start of the game
(function startGame() {
    $('img').click(function() {
        newRound();
    });
})();

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

//flash key and play sound of generated element, with 2 levels difficulty
function playStuff(key, audio) {
    $(key).animate({
        opacity: '0.5'
    }, 0);
    if ($('input:radio[value="easy"]').is(':checked')) {              //easy mode, flash .5 sec
        window.setTimeout(function() {
            $(key).animate({
                opacity: '1'
            }, 0);
        }, 500); //key flash
    } else {
      window.setTimeout(function() {
          $(key).animate({
              opacity: '1'
          }, 0);
      }, 350); //key flash                                          //hard mode, flash .35 sec
    }
    $(audio).get(0).play(); //play sound
}

//display sequence to user with flash & sound
function showCompSequence() {
    for (var i = 0; i < compSequenceArray.length; i++) {
      if ($('input:radio[value="easy"]').is(':checked')) {
        window.setTimeout(function(i) {
            playStuff('#key' + keys[compSequenceArray[i]], '#audioKey' + keys[compSequenceArray[i]]);
        }, i * 750, i);                                             //easy mode, wait 750ms between keys
      } else {
        window.setTimeout(function(i) {
            playStuff('#key' + keys[compSequenceArray[i]], '#audioKey' + keys[compSequenceArray[i]]);
        }, i * 500, i);                                             //hard mode, wait 500ms between keys
      }
    }
}

//on click of key, play sound and flash key,
//push the key into the user Sequence array,
//and run function to check if user sequence is equal to computer sequence
(function userClick() {
    $('#keyC').on('click', function() {
      $('#audioKeyC').get(0).play();
      $('#keyC').animate({ opacity: '0.5'});
      setTimeout(function() {
        $('#keyC').animate({ opacity: '1'});
      }, 500);
      userSequenceArray.push(0);
      areSequencesEqual();
    });
    $('#keyD').on('click', function() {
      $('#audioKeyD').get(0).play();
      $('#keyD').animate({ opacity: '0.5'});
      setTimeout(function() {
        $('#keyD').animate({ opacity: '1'});
      }, 500);
      userSequenceArray.push(1);
      areSequencesEqual();
    });
    $('#keyE').on('click', function() {
      $('#audioKeyE').get(0).play();
      $('#keyE').animate({ opacity: '0.3'});
      setTimeout(function() {
        $('#keyE').animate({ opacity: '1'});
      }, 500);
      userSequenceArray.push(2);
      areSequencesEqual();
    });
    $('#keyF').on('click', function() {
      $('#audioKeyF').get(0).play();
      $('#keyF').animate({ opacity: '0.5'});
      setTimeout(function() {
        $('#keyF').animate({ opacity: '1'});
      }, 500);
      userSequenceArray.push(3);
      areSequencesEqual();
    });
    $('#keyG').on('click', function() {
      $('#audioKeyG').get(0).play();
      $('#keyG').animate({ opacity: '0.5'});
      setTimeout(function() {
        $('#keyG').animate({ opacity: '1'});
      }, 500);
      userSequenceArray.push(4);
      areSequencesEqual();
    });
})();

//compare the user sequence to the computer sequence.
function compareSequences() {
    for (var i = 0; i < userSequenceArray.length; i++) {
        if (userSequenceArray[i] !== compSequenceArray[i] && active === true) {
            return false;
        }
    }
    return true;
}

//if sequences are not equal, fire incorrectSequence(). If they are equal, fire newRound().
function areSequencesEqual() {
    if (compareSequences() === false) {
        incorrectSequence();
    } else if (userSequenceArray.length === compSequenceArray.length) {
        setTimeout(function() {
            newRound();
        },  1000);
    }
}

//If the user got it correct, then start a new round.
function newRound() {
    active = true;
    incRound(); //increment the round
    userSequenceArray = []; //empty the user array
    generateCompSequence(); //add a key to the computer's sequence
    showCompSequence(); //display the computer sequence
}

//if the user got it wrong, then reset the game.
function incorrectSequence() {
    round = 0;
    active = false;
    $('.round').html('Round: ' + round);
    userSequenceArray = [];
    compSequenceArray = [];
    setTimeout(function() {
        $('#audioKeyAll').get(0).play(); //play 'wrong' sound
    }, 10);
}
