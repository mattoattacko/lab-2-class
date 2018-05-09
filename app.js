
'use strict';

var userPoints = 0;
//check if the user's answer is correct
//what is correct?
//find out wha the answer is
//toLowerCase or toUpperCase
//use a confirm box?

console.log('Aloha kakahiaka!');

alert('Aloooooha! My name is Matt, and this is my site. Let\'s get to know eachother by playing a quick guessing game, ok?);

var user = prompt('So if I\'m Matt, who might you be?');

alert('Howzit ' + user + '! What else can I learn about you...');

var answer = prompt('Does it sound like I\'m from Hawaii? , 'type yes or no').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    //There are no winners and losers in my game. Free donuts for everyone! I would hope with all my "Alohas" people realize I'm from Hawaii. If they guess yes, give them a point.
    userPoints++;
} else {
    //If user guesses incorrectly, shame them. 
    alert('I mean, I guess I could be from some other Pacific island...');
}

alert('you have ' + userPoints + ' points');