saveMyProfile("krissy", 1991, 3.81, false);

function saveMyProfile(name, birthday, GPA, newuser) {
  if (birthday >= 2004) {
    // for those who was born after 2003
  }
  // rest code
}



var student = "krissy";
var year = 1991;
var GPA = 381/100;
var status = "existinguser";
var isNewUser = (status == "newuser");
saveMyProfile(student, year, GPA, isNewUser);

saveMyProfile(student, year, 381/100, status == "newuser");
