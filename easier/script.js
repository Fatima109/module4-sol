// STEP 1: Wrap the entire contents of script.js inside of an IIFE
(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10: Loop over the names array and call the appropriate function
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 12: Call 'byeSpeaker.speak()' if the name starts with 'J', otherwise call 'helloSpeaker.speak()'
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
