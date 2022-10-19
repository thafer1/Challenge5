// Displays current day
var currentDay = moment().format("dddd, MMMM Do")
$("#currentDay").text(currentDay);

// Functionality for save buttons
$(".saveBtn").on("click", function() {
    userInput = $(this).siblings(".form-control").val();
    selectedHour = $(this).siblings(".input-group-text").text();
    localStorage.setItem(selectedHour, userInput);
  });