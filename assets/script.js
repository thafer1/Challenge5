// Displays current day
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// Created variables to reference timeblocks
var nineAm = $("#9PM");
var tenAm = $("#10AM");
var elevenAm = $("#11AM");
var twelvePm = $("#12PM");
var onePm = $("#1PM");
var twoPm = $("#2PM");
var threePm = $("#3PM");
var fourPm = $("#4PM");
var fivePm = $("#5PM");

// Created array to store timeblock variables
var timeArray = [
    nineAm,
    tenAm,
    elevenAm,
    twelvePm,
    onePm,
    twoPm,
    threePm,
    fourPm,
    fivePm
];

// Loops through the timeblocks and applies separate styling for past, present, and future blocks
var now = moment().format("HH");

    for (var i = 0; i < timeArray.length; i++) {
        if (now > timeArray[i].attr("data-hour")) {
            timeArray[i].addClass("past");
        } else if (now === timeArray[i].attr("data-hour")) {
            timeArray[i].addClass("present");
        } else {
            timeArray[i].addClass("future");
        }
    }

// Functionality for save buttons
$(".saveBtn").on("click", function() {
    userInput = $(this).siblings(".form-control").val();
    selectedHour = $(this).siblings(".input-group-text").text();
    localStorage.setItem(selectedHour, userInput);
  });