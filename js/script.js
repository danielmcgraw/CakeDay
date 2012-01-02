/* Author:

*/

$(document).ready(function() {
	$("#uname").focus();
});

$("#getRedditUNameForm").submit(function(){
	var uname = $("#uname").val();
		if (uname.length == 0) {
			$("#uname").focus();
		} else {
			$.ajax({
				url: "http://www.reddit.com/user/" + uname + "/about.json?jsonp=?",
				dataType: "jsonp",
				success: function(response) {
					
					$("#result").html(formatDateTime(response.data.created_utc)).slideToggle("slow");
				}
			});
		}
	return false;
});


function formatDateTime(unixTimestamp) {
    var dt = new Date(unixTimestamp * 1000);
    return dt.toString();
}