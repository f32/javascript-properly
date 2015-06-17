// What you'll be building

var troll = prompt("You're walking thruogh the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch (troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if (strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }

    break;

  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if (money === 'YES' && dollart === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }

    break;

  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if (fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }

    break;

  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!")

}


//
var answer = prompt("Question to the user").toUpperCase();

var user = prompt("Wanna to play?").toLowerCase();


//
var user = prompt("Wanna to play? OK, if so, you should reach another city across the forest by only 2 hours and so because you must chose sutable car for this. Which you'd like to take: BMW, SCANIA or Jeep?").toUpperCase();

switch (user) {
    case 'BWM':
        console.log("You choose BMW, but after the half of the trip you stucked in the forest. Too bad! You can't arrive on time. You fail.");
        break;

    case 'SCANIA':
        console.log("Nice huge car, you crossed the huge forest but it seems that your speed is too low and you can not come on time. Too bad!");
        break;

    case 'jeep':
        console.log("Your speed is quite enough, you crossed a big forest and you arrived exactly oon time. Right choice, nice work! Coungratulations!");
        break;

    default:
        console.log("Erm... you have to choose a car, by which you ought to arrive to another city through big forest in time! Chose between BMW, SCANIA and Jeep, please");
        break;
}
//
