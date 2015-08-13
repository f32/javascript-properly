<script src="MyCommonFunctions.js"></script>

// the following would be invalid
<script src="MyCommonFunctions.js">
  var myVariable;
  if (myVariable == 1) {
    // do something
  }
</script>

// therefore, the following is invalid also
<script src="MyCommonFunctions.js" />
