
$("#currentDay").append(moment().format('dddd, MMMM Do'));
console.log(moment().format('dddd, MMMM Do'));


$(".button-submit").on("submit", function(event) {
	event.preventDefault();
	console.log(event);

	// find out correct syntax for jquery button submit

	// maybe:
	//var rowSiblings = $(this).siblings(".row-details").val();
	//console.log(rowSiblings);

	// grab time
    var whatTime = // this.parent.attr(id)

	var userEntry = $(".user-entry").val();
	// instead of .user-entry: event...
	// ids for each row
	console.log("user entry: " + userEntry);

	// localStorage.setItem(whatTime, userEntry)


});


// for color coding of past hours:
// if smaller than current hour, add class, then attr css for color


// load saved data from localStorage.getItem

//$("#hour-0900 .row-details").val

