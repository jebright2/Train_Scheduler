var config = {
  apiKey: "AIzaSyBKZOHrc4JYi5EG0wBu6815k38Y_HpsxKo",
  authDomain: "fir-1-eaeaf.firebaseapp.com",
  databaseURL: "https://fir-1-eaeaf.firebaseio.com",
  projectId: "fir-1-eaeaf",
  storageBucket: "",
  messagingSenderId: "247460823980",
  appId: "1:247460823980:web:9b0a2b8102321c6dd67009"
};
//---------------------------------------------------------------------

firebase.initializeApp(config);
var database = firebase.database();
//---------------------------------------------------------------------

var trainName = "";
var destination = "";
var trainTime = "";
var frequency = "";
//---------------------------------------------------------------------

$("#submit").on("click", function(event){
event.preventDefault(); 

trainName = $("#train-input").val().trim();
destination = $("#destination").val().trim();
trainTime = $("#train-start-time").val().trim();
frequency = $("#frequency").val().trim();

$("#train-input").val("");
$("#destination").val("");
$("#train-start-time").val("");
$("#frequency").val("");

//---------------------------------------------------------------------

database.ref().push({
  trainName: trainName,
  destination: destination,
  trainTime: trainTime,
  frequency: frequency
});
});


database.ref().on("child_added", function(childSnapshot) {
  
  trainName = childSnapshot.val().trainName;
  destination = childSnapshot.val().destination
  trainTime = childSnapshot.val().trainTime;
  frequency = childSnapshot.val().frequency;

  var trainTimeMoment = moment(trainTime, "HH:mm").subtract(1, "years");
  var currentTime = moment();
  var minuteArrival = currentTime.diff(trainTimeMoment, 'minutes');
  var minuteLast = minuteArrival % frequency;
  var awayTrain = frequency - minuteLast;
  var nextArrival = currentTime.add(awayTrain, 'minutes');
  var arrivaltime = nextArrival.format("HH:mm");
//---------------------------------------------------------------------
  $("#table-body").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + arrivaltime + "</td><td>" + awayTrain + "</td>");
  // $("#table-body").css('color', 'white');

  // $(".table").css('opacity:0.9%');

  }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
});