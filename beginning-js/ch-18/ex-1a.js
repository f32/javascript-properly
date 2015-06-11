try {
  alert("This is code inside try clause");
  alert("No Errors so catch will not execute");
} catch (e) {
  alert("The error is " + e.message);
}
