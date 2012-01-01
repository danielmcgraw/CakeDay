/* Author:

*/

$(document).ready(function() {
	$.ajax({
	  url: "http://www.reddit.com/user/man_in_the_mirra/about.json",
	  success: alert(data),
	  dataType: "json"
	});
});
