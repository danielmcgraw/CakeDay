/* Author:

*/

$("#getRedditUNameForm").submit(function(){
	var uname = $("#uname").val();
		if (uname.length == 0) {
			$("#uname").focus();
		} else {
			//$("#result").html(ajax_load);
			$.getJSON(
				"http://www.reddit.com/user/" + uname + "/about.json",
//				"q="+q,
				{uname: uname},
				function(json) {
					var result = "<p>Data \"<strong>" + json.responseData.data + "</strong>\"</p>";
					$("#result").html(result);
				}
			);
		}
		return false;
	});



$(document).ready(function() {
	$.ajax({
	  url: "http://www.reddit.com/user/man_in_the_mirra/about.json",
	  success: function() {
		alert("success");
	  },
	  dataType: "json"
	});
});
