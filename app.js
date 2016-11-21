//global variables
var compSequenceArray = [];
var userSequenceArray = [];
var keys = ['C', 'D', 'E', 'F', 'G'];
var round = 0;

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

//trigger the start of the game
function startGame() {
    $('img').click(function() {
        newRound();
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

//flash key and play sound of generated element
function playStuff(key, audio) {
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
        userClick();
    });
    $('#keyD').click(function() {
        userSequenceArray.push(1);
        userClick();
    });
    $('#keyE').click(function() {
        userSequenceArray.push(2);
        userClick();
    });
    $('#keyF').click(function() {
        userSequenceArray.push(3);
        userClick();
    });
    $('#keyG').click(function() {
        userSequenceArray.push(4);
        userClick();
    });
    return userSequenceArray;
}
logUserSequence();

//compare the user sequence to the computer sequence.
function compareSequences() {
    for (var i = 0; i < userSequenceArray.length; i++) {
        if (userSequenceArray[i] !== compSequenceArray[i]) {
            return false;
        }
    }
    return true;
}

//if sequences are not equal, fire incorrectSequence(). If they are equal, fire newRound().
function userClick() {
    if (compareSequences() === false) {
        incorrectSequence();
    } else if (userSequenceArray.length === compSequenceArray.length) {
        setTimeout(function() {
            newRound();
        }, 1000);
    }
}

//If the user got it correct, then start a new round.
function newRound() {
    incRound(); //increment the round
    userSequenceArray = []; //empty the user array
    generateCompSequence(); //add a key to the computer's sequence
    showCompSequence(); //display the computer sequence
}

//if the user got it wrong, then reset the game.
function incorrectSequence() {
    round = 0;
    $('.round').html('Round: ' + round);
    userSequenceArray = [];
    compSequenceArray = [];
    setTimeout(function() {
        $('#audioKeyAll').get(0).play(); //play 'wrong' sound
    }, 10);
}
