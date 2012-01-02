/* Author:

*/

$("#getRedditUNameForm").submit(function(){
	alert("Form Submit!")
	var uname = $("#uname").val();
		if (uname.length == 0) {
			$("#uname").focus();
		} else {
			//$("#result").html(ajax_load);
			alert("Get me some ajax")
			$.getJSON(
				"http://www.reddit.com/user/" + uname + "/about.json",
//				"q="+q,
				{uname: uname},
				function(json) {
					alert("Callback!")
					var result = "<p>Data \"<strong>" + json.responseData.data + "</strong>\"</p>";
					$("#result").html(result);
				}
			);
		}
		return false;
	});
