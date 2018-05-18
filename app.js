
'use strict';

var userPoints = 0;
//check if the user's answer is correct
//what is correct?
//find out wha the answer is
//toLowerCase or toUpperCase
//use a confirm box?

console.log('Aloha kakahiaka!');

alert('Aloooooha! My name is Matt!');

alert('Let\'s get to know each other by playing a quick game. You get 1 pineapple point for each question you guess correctly');

var user = prompt('So if I\'m Matt, who might you be?');

alert('Howzit ' + user + '! Nice to meet you!');

var Hawaii = prompt('Does it sound like I\'m from Hawaii?' , 'type yes or no').toLowerCase();

console.log(Hawaii);

if (Hawaii === 'yes' || Hawaii === 'y') {
    //There are no winners and losers in my game. Free donuts for everyone! I would hope with all my "Alohas" people realize I'm from Hawaii. If they guess yes, give them a point.
    alert('Bingo!')
    userPoints++;
} else {
    //If user guesses incorrectly, shame them. 
    alert('I mean, I guess I could be from some other Pacific island...but...no');
}

alert('You have ' + userPoints + ' pineapple points');

var Surf = prompt('Do you think I like to surf?', 'type yes or no').toLowerCase();

console.log(Surf);

if (Surf === 'yes' || Surf === 'y') {
    //Surely they said yes
    userPoints++;
    alert('Right on brah! Another pinapple point for you! You have ' + userPoints + ' pineapple points')
} else {
    //If user guesses incorrectly, shame them again. 
    alert('Yah, I do. I\'m a walking stereo type. You have ' + userPoints + ' pineapple points');
}

var CodeStatus = prompt('I\'ve only just started learning to code. Have you coded before ' + user + '?' , 'type yes or no').toLowerCase();

console.log(CodeStatus);

if (CodeStatus === 'yes' || CodeStatus === 'y') {
    //I'm assuming I am probably the only one that is new to all this
    alert('Nice! You get 1 point for having to put up with all my noob questions ')
    userPoints++;
} else {
   //Is this even a good question? 
    alert('No? Well let\'s do our best to learn together!');
}

alert('What are you gonna do with ' + userPoints + ' pineapple points!? You can trade them in for highfives!');

var Japan = prompt('I\'ve always been really interested in Japan. Have you ever been to Japan ' + user + '?' , 'type yes or no').toLowerCase();

console.log(Japan);

if (Japan === 'yes' || Japan === 'y') {
    //If you've never been, you really should!
    userPoints++;
    alert('Me too! Another point for you for being so cool!')
} else {
   //No really, you should go. 
    alert('No? You really should go! It\'s an amazing country');
}

var LastQuestion = prompt('Ok, last question ' + user + '. You have ' + userPoints + ' pinapple points. Do you want to be my friend?').toLowerCase();

console.log(LastQuestion);

if (LastQuestion === 'yes' || LastQuestion === 'y') {
    //I hope they do...
    userPoints++;
    alert('Yay! Let\'s be coding buddies!')
} else {
   //No really, you should go. 
    alert('No? Oh, ok then. #Sadface');
}

alert('You earned a total of ' + userPoints + ' out of 5 points!');

//question 6 w/ a variable. 
//I want the user to guess how many car's I've owned
//answer is 9
//I want to give the user multiple chances to guess the amount

var carsOwned = ['9'];
var counter = 0;
var isTheirAnswerCorrect = false;

while (counter < 5 && isTheirAnswerCorrect === false) {
   var question6 = prompt('How many cars do you think I have owned in my life?');
       for (var i = 0; i < carsOwned.length; i++) {
        if (question6 === carsOwned[i]) {
           question6 = true;
   };
   console.log(question6);

};

if (!isTheirAnswerCorrect) {
   counter++;
   alert('Not quite ' + user);
   console.log(isTheirAnswerCorrect)
<<<<<<< HEAD
=======

>>>>>>> a39322db5e2b6789cfbc011d7306f66466749161
}

else {alert(user + ' You got it!');
counter += 5;
score++;
<<<<<<< HEAD
}
=======

}

>>>>>>> a39322db5e2b6789cfbc011d7306f66466749161
if (counter === 4) {
   alert(user + 'I have owned 9 cars!');

break;}
<<<<<<< HEAD
}

function question7() {
    var myCarArray = ['Nisssan', 'Mazda', 'Toyota'];
    var attemptsRemain = 6;
    var areTheyCorrect = false;
 
        while (attemptsRemain >= 0 && areTheyCorrect === false) {
        var myCarQuestionAnswer = prompt('So I\'ve owned 9 cars total. Can you name any of my three favorite Japanese car companies?').toLowerCase();

    console.log('Before running the for loop')

        for (var i = 0; i < myCarArray.length; i++) {
            if (myCarQuestionAnswer === myCarArray[i]) {
                areTheyCorrect = true;

    console.log('the for loop')
        };
        };
 
        if (!areTheyCorrect) {
            attemptsRemain--;
            alert('Good guess! However, that is not one of them. ' + userName + '. You have ' + attemptsRemain + ' attempts remaining.');

    console.log(userName + ' incorrect.');

        } else {
            alert(myCarQuestionAnswer + ' is my favorite type of food ' + userName);
            attemptsRemain--;
            score++;
        };

        if (attemptsRemain === 0) {
            alert('There are only 6 or so major car manufactures in Japan. That you didn\'t guess even one correctly makes me sad ' + userName );
            
        };
    };
 }; 
 
=======
//adding note to commit
}
>>>>>>> a39322db5e2b6789cfbc011d7306f66466749161
