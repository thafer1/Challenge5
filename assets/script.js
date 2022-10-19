// Displays current day in header
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

// Pulls saved events from local storage and prints them into the appropraite time blocks
var refresh9 = JSON.parse(localStorage.getItem("9AM"));
nineAm.val(refresh9);
      
var refresh10 = JSON.parse(localStorage.getItem("10AM"));
tenAm.val(refresh10);
        
var refresh11 = JSON.parse(localStorage.getItem("11AM"));
elevenAm.val(refresh11);
        
var refresh12 = JSON.parse(localStorage.getItem("12PM"));
twelvePm.val(refresh12);
        
var refresh1 = JSON.parse(localStorage.getItem("1PM"));
onePm.val(refresh1);
        
var refresh2 = JSON.parse(localStorage.getItem("2PM"));
twoPm.val(refresh2);
        
var refresh3 = JSON.parse(localStorage.getItem("3PM"));
threePm.val(refresh3);
       
var refresh4 = JSON.parse(localStorage.getItem("4PM"));
fourPm.val(refresh4);
        
var refresh5 = JSON.parse(localStorage.getItem("5PM"));
fivePm.val(refresh5);

// Functionality for save buttons
$(".saveBtn").on("click", function() {
    userInput = $(this).siblings(".form-control").val();
    selectedHour = $(this).siblings(".input-group-text").text();
    localStorage.setItem(selectedHour, JSON.stringify(userInput));
});