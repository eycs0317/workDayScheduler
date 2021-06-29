var today = moment()

$('#currentDay').text(today.format('dddd, MMMM Do'))
$("textarea").addClass('present');


var currentHrs = Number(today.format('HH'))
console.log(typeof currentHrs)