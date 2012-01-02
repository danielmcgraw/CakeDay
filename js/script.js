/* Author:

*/

$(document).ready(function() {
	$("#uname").focus();
});

$("#getRedditCakeDayForm").submit(function(){
	var uname = $("#uname").val();
		if (uname.length == 0) {
			$("#uname").focus();
		} else {
			$.ajax({
				url: "http://www.reddit.com/user/" + uname + "/about.json?jsonp=?",
				dataType: "jsonp",
				timeout: 1500,
				success: function(response) {
					dt = new Date(response.data.created_utc * 1000);
					$("#result").slideUp("slow", function() {
						$("#result").html(dt.toString());
						$("#result").slideDown("slow");
					});
				},
				error: function(response) {
					$("#result").slideUp("slow", function() {
						$("#result").html("No Reddit user with that name was found");
						$("#result").slideDown("slow");
					});
				},
				complete: function(xhr, response) {
						console.log(xhr);
						console.log(response);
				        //if (xhr.status == 0)
				        //    alert('fail');
				        //else
				        //    alert('success');
				    }
			});
		}
	return false;
});
