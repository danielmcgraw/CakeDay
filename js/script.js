/* Author:

*/

$(document).ready(function() {
	//$("#uname").focus();
	$("label.inlined + .input-text").each(function (type) {
		$(this).focus(function () {
			$(this).prev("label.inlined").addClass("focus");
		});
		$(this).keypress(function () {
			$(this).prev("label.inlined").addClass("has-text").removeClass("focus");
		});
		$(this).blur(function () {
			if($(this).val() == "") {
				$(this).prev("label.inlined").removeClass("has-text").removeClass("focus");
			}
		});
	});
});

$("#getRedditCakeDayForm").submit(function(){
	var uname = $("#uname").val();
		if (uname.length == 0) {
			$("#uname").focus();
		} else {
			$.ajax({
				url: "http://www.reddit.com/user/" + uname + "/about.json?jsonp=?",
				dataType: "jsonp",
				timeout: 8000,
				success: function(response) {
					dt = new Date(response.data.created_utc * 1000);
					$("#result").slideUp("slow", function() {
						$("#result").html("You were born " + jQuery.timeago(dt) + " on " + dt.toLocaleDateString());
						$("#result").slideDown("slow");
					});
				},
				error: function(response) {
					$("#result").slideUp("slow", function() {
						$("#result").html("No Reddit user with that name was found");
						$("#result").slideDown("slow");
					});
				}
			});
		}
	return false;
});
