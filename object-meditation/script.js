console.log("I'm here, I'm here!!");

function huggableChallenge() {
  $("#huggable").css("display", "block");
  $("#lovable").css("display", "none");
  $("#comical").css("display", "none");
}
function lovableChallenge() {
  $("#huggable").css("display", "none");
  $("#lovable").css("display", "block");
  $("#comical").css("display", "none");
}
function comicalChallenge() {
  $("#huggable").css("display", "none");
  $("#lovable").css("display", "none");
  $("#comical").css("display", "block");
}



$("#clock").click(function()){
// This is some code similar to what I found on w3 schools for a timer
// I changed it up a bit so that it sets a timer a fixed time away instead of just a fixed date
// Set the date we're counting down to
  var endTime = new Date().getTime() +100000;

// Update the count down every 1 second
  var x = setInterval(function() {

  // Get today's date and time
    var now = new Date().getTime();

  // Find the distance between now and the count down date
    var distance = endTime - now;

  // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

  // If the count down is over, write some text (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "";
    }
  }, 1000);
  $("#timer").css("display","block");
}
