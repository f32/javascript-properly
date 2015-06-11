try {
  alert("This is code inside the try clause");
  ablert("No Errors so catch code will not execute");
} catch (exception) {
  alert("The error is " + exception.message);
}
