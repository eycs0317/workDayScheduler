var today = moment()

$('#currentDay').text(today.format('dddd, MMMM Do'))





//check current hrs and set the color
function setColorPerHours () {
  var currentHrs = Number(moment().format('HH'));

  // var currentHrs = 13 // for testing only

  $( "h4" ).each(function(index) {
    var hourBlockNum = parseInt($(this).attr('id'))

    if(hourBlockNum < currentHrs) {
      $(this).siblings('textarea').addClass('past')
    } else if (hourBlockNum === currentHrs) {
      console.log('present')
      $(this).siblings('textarea').addClass('present')
    } else {
      $(this).siblings('textarea').addClass('future')
      console.log('future')
    }
  });
}

setColorPerHours() // need a timer on this

//click for the button
$('.saveBtn').click(function() {
  console.log('click')
})