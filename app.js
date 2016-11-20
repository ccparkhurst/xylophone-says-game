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
var keys = ['C', 'D', 'E', 'F', 'G'];
var round = 0;
var active = false;

//initialize board
function initialize() {

}

//trigger the start of the game
function startGame() { //***ADD A BOARD RESET ON START CLICK, otherwise if user played keys before starting game, they will have been pushed to user array
    $('img').click(function() {
        showCompSequence();
        incRound();
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
    $(key).animate({
        opacity: '0.5'
    }, 10);
    window.setTimeout(function() {
        $(key).animate({
            opacity: '1'
        }, 10);
    }, 500); //key flash
    $(audio).get(0).play(); //play sound
}

//display sequence to user with flash & sound
function showCompSequence() {
    for (var i = 0; i < compSequenceArray.length; i++) {
        window.setTimeout(function(i) {
            playStuff('#key' + keys[compSequenceArray[i]], '#audioKey' + keys[compSequenceArray[i]]);
        }, i * 750, i);
    }
}

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

//Compare the user sequence array to the computer array. If it's equal, go to next round. If not, go to incorrect sequence.
function compareSequences() {
    for (var i = 0; i < compSequenceArray.length; i++) {
        if (userSequenceArray[i] === compSequenceArray[i] && userSequenceArray.length === compSequenceArray.length) {
            setTimeout(function() {
                nextRound();
            }, 1000);
            return true;
        } else if (userSequenceArray[i] !== compSequenceArray[i] && userSequenceArray.length === compSequenceArray.length) {
            incorrectSequence();
            return false;
        } else {
            return false;
        }
    }
}
compareSequences();

//If the user got it correct, then...
function nextRound() {
    incRound(); //increment the round
    userSequenceArray = []; //empty the user array
    generateCompSequence(); //have the computer go again
}


//if the user got it wrong, then...
function incorrectSequence() {
    setTimeout(function() {
        $('#audioKeyAll').get(0).play(); //play 'wrong' sound
    }, 500);
    resetGame();
}

//reset the game board
function resetGame() {
    round = 0;
    $('.round').html('Round: ' + round);
    userSequenceArray = [];
    compSequenceArray = [];
}
