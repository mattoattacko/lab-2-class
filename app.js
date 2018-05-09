
'use strict';

var userPoints = 0;
//check if the user's answer is correct
//what is correct?
//find out wha the answer is
//toLowerCase or toUpperCase
//use a confirm box?

console.log('Aloha kakahiaka!');

alert('Aloooooha! My name is Matt!');

alert('Let\'s get to know eachother by playing a quick game. You get 1 pinapple point for each question you guess correctly');

var user = prompt('So if I\'m Matt, who might you be?');

alert('Howzit ' + user + '! Nice to meet you!');

var answer = prompt('Does it sound like I\'m from Hawaii?' , 'type yes or no').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    //There are no winners and losers in my game. Free donuts for everyone! I would hope with all my "Alohas" people realize I'm from Hawaii. If they guess yes, give them a point.
    userPoints++;
} else {
    //If user guesses incorrectly, shame them. 
    alert('I mean, I guess I could be from some other Pacific island...');
}

alert('You have ' + userPoints + ' pineapple points');

var answer = prompt('Do you think I like to surf?', 'type yes or no').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    //Surely they said yes
    userPoints++;
} else {
    //If user guesses incorrectly, shame them again. 
    alert('Yah, I do. I\'m a walking stereo type.');
}

alert('You have ' + userPoints + ' pineapple points');

var answer = prompt('I\'ve only just started learning to code. Have you coded before ' + user + '?') ('type yes or no').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    //I'm assuming I am probably the only one that is new to all this.
    userPoints++;
    alert('Cool! I hope you don\'t mind all the questions I\'ll be asking.');
} else {
    //Is this even a good question? 
    alert('No? Well let\'s do our best to learn together!');
}

alert('What are you gonna do with ' + userPoints + ' pineapple points? Don\'t spend them all in one place!');