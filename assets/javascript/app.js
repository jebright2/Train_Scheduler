var config = {
 
};


$(document).ready(function () {
  firebase.initializeApp(config);
  var database = firebase.database();

  $("#submit").on("click", function () {
    event.preventDefault();
    var trainInput = $("#train-name-input").val();
    var destinationAny = $("#destination").val();
    var trainTime = $("#train-start-time").val();
    var frequencyMins = $("#frequency").val();
    

    database.ref("train-schedule").push({
      trainName: trainInput,
      destination: destinationAny,
      time: trainTime,
      frequency: frequencyMins,
      
    });

    trainInput = "";
    destinationAny = "";
    trainTime = "";
    frequencyMins = "";
  

  });

  var arrivalTime;
  var x;

  database.ref("train-schedule").on("child_added", function (childSnapshot) {


    var row = $('<tr>')
    row.appendTo("#table-body");

    var row1 = $('<td>');
    row1.text(childSnapshot.child("trainName").val())
    row1.appendTo(row);

    var row2 = $("<td>");
    row2.text(childSnapshot.child("destination").val())
    row2.appendTo(row);

    var row3 = $("<td>");
    row3.text(childSnapshot.child("frequency").val())
    row3.appendTo(row);

    var row4 = $("<td>");
    row4.text(childSnapshot.child("time").val());
    row4.appendTo(row);

     /* var convertedTime = moment(time, );
    var arrivalTime = convertedTime.diff(moment(), "minutes"); */

    /* var row5 = $("<td>");
    row5.text(childSnapshot.child("time???").val())
    row5.appendTo(row);

    var row6 = $("<td>");
    x = childSnapshot.child("time???").val()
    row6.text();
    row6.appendTo(row); */

  }) 

})