var config = {
    apiKey: "AIzaSyBKZOHrc4JYi5EG0wBu6815k38Y_HpsxKo",
    authDomain: "fir-1-eaeaf.firebaseapp.com",
    databaseURL: "https://fir-1-eaeaf.firebaseio.com",
    projectId: "fir-1-eaeaf",
    storageBucket: "",
    messagingSenderId: "247460823980",
    appId: "1:247460823980:web:9b0a2b8102321c6dd67009"
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
      var minsAway = $("#nextTrain").val();
  
      database.ref("train-schedule").push({
        trainName: trainInput,
        destination: destinationAny,
        time: trainTime,
        frequency: frequencyMins,
        nextTrain: minsAway
      });
  
      trainInput = "";
      destinationAny = "";
      trainTime = "";
      frequencyMins = "";
      minsAway = "";
  
    });

    var arrivalTime;
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
      cell3.text(childSnapshot.child("frequency").val())
      cell3.appendTo(row);
  
  
      var cell4 = $("<td>");
      var date1 = childSnapshot.child("time").val();
      var convertedTime = moment(time, );
      var arrivalTime = convertedTime.diff(moment(), "minutes");
      cell4.appendTo(row);
  
      var cell5 = $("<td>");
      cell5.text(childSnapshot.child("rate").val())
      cell5.appendTo(row);
  
      var cell6 = $("<td>");
      x = childSnapshot.child("rate").val()
      cell6.text("$" + y);
      cell6.appendTo(row); 

    }) 

})