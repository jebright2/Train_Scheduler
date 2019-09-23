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
      var minsAway = 
  
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
    var nextTrain;
    var x;
  
    database.ref("train-schedule").on("child_added", function (childSnapshot) {
  
  
      var row = $('<tr>')
      row.appendTo("#table-body");
  
      var cell1 = $('<td>');
      cell1.text(childSnapshot.child("trainName").val())
      cell1.appendTo(row);
      var cell2 = $("<td>");
      cell2.text(childSnapshot.child("destination").val())
      cell2.appendTo(row);
      var cell3 = $("<td>");
      cell3.text(childSnapshot.child("time").val())
      cell3.appendTo(row);
  
  
     /* var cell4 = $("<td>");
      var date1 = childSnapshot.child("start").val();
      var convertedDate = moment(date1, );
      arrivalTime = convertedDate.diff(moment(), "months");
      var z = monthsWorked * -1;
      cell4.text(z + " Months");
      cell4.appendTo(row);
  
      var cell5 = $("<td>");
      cell5.text(childSnapshot.child("rate").val())
      cell5.appendTo(row);
  
      var cell6 = $("<td>");
      x = childSnapshot.child("rate").val()
      var y = z * x;
      cell6.text("$" + y);
      cell6.appendTo(row); */

    }) 

})