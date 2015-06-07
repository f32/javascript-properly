// -- A --
// Test foe jokes

var joke = "Javascript walked into a bar...";   // single/double quotes issue;
var toldJoke = false;                           // boolean values must be written without quotation;
var $punchline =                                // it is better not to use '$' symbol at the beginning of the variable name;
    "Better watch out for whose semi-colons.";  // missing semicolon;
var entage = 20;                                // incorrect variable name. must begin with a letter, underscore or dollar sign ($);
var result                                      // missing semicolon;

if (toldJoke == true) {
  Alert($punchline);                            // wrong name of the built-in function;
  } else                                        // opening bracket missing
  alert(joke);
}



// -- B --
\\ Movie Night                                // комментарий пишется с обратным слешем;

var zip code = 98104;                         // имя переменной не должно содержать пробелы;
var joe'sFavouriteMovie = Forbidden Planet;   // имя переменной не должно содержать кавычки; строка должна быть заключена в кавычки;
var movieTicket$     =     9;                 // всё правильно, но лучше обходитсья без специальных символов в именах переменных

if (movieTicket$ >= 9) {
  alert("Too much!");
} else {
  alert("We're going to see " + joe'sFavouriteMovie); // не отработает из-за некорректного имени переменной.
}



/* ================================================
   sources:
   ================================================ */

// // -- A --
// // Test foe jokes
//
// var joke = "Javascript walked into a bar...';
// var toldJoke = "false";
// var $punchline =
//    "Better watch out for whose semi-colons."
// var %entage = 20;
// var result
//
// if (toldJoke == true) {
//  Alert($punchline);
// } else
//  alert(joke);
// }
//
//
//
// // -- B --
// \\ Movie Night
//
// var zip code = 98104;
// var joe'sFavouriteMovie = Forbidden Planet;
// var movieTicket$     =     9;
//
// if (movieTicket$ >= 9) {
//   alert("Too much!");
// } else {
//   alert("We're going to see " + joe'sFavouriteMovie);
// }
