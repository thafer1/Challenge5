// Displays current day
var currentDay = moment().format("dddd, MMMM Do")
$("#currentDay").text(currentDay);

// Created variables to reference timeblocks
var nineAm = $("9AM");
var tenAm = $("10AM");
var elevenAm = $("11AM");
var twelvePm = $("12PM");
var onePm = $("1PM");
var twoPm = $("2PM");
var threePm = $("3PM");
var fourPm = $("4PM");
var fivePm = $("5PM");

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

// Functionality for save buttons
$(".saveBtn").on("click", function() {
    userInput = $(this).siblings(".form-control").val();
    selectedHour = $(this).siblings(".input-group-text").text();
    localStorage.setItem(selectedHour, userInput);
  });