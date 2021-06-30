var today = moment()

$('#currentDay').text(today.format('dddd, MMMM Do'))





//check current hrs and set the color
function setColorPerHours () {
  //var currentHrs = Number(moment().format('HH'))
  //console.log(currentHrs) //number of 16
  var currentHrs = 13

  $( "h4" ).each(function( index ) {
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

setColorPerHours()