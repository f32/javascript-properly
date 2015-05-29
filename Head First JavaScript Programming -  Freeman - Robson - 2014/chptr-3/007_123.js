saveMyProfile("krissy", 1991, 3.81,  false);

function saveMyProfile(name, birthday, GPA, newuser) {
  if (birthday >= 2004) {
    // для родившихся в 2004 году и позже...
  }
  // остальной код функции
}



var student = "krissy";
var year = 1991;
var GPA = 381/100;
var status = "existinguser";

var isNewUser = (status == "newuser");
saveMyProfile(student, year, GPA, status);



var student = "krissy";
var status = "existinguser";
var year = 1991;
saveMyProfile(student, year, 381/100, status == "newuser");
