/* Author:

*/

$(document).ready(function() {
	$("#uname").focus();
	
	$("label.inlined + input.input-text").each(function (type) {
		Event.observe(window, 'load', function () {
			setTimeout(function(){
				if (!input.value.empty()) {
					input.previous().addClassName('has-text');
				}
			}, 200);
		});

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
				timeout: 3000,
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
				}
			});
		}
	return false;
});
