/* Author:

*/

$("#getRedditUNameForm").submit(function(){
	alert("Form Submit!")
	var uname = $("#uname").val();
		if (uname.length == 0) {
			$("#uname").focus();
		} else {
			alert("Get me some ajax")
			$.ajax(
				"http://www.reddit.com/user/" + uname + "/about.json",
				function(json) {
					alert("Callback!")
					var result = "<p>Data \"<strong>" + json.responseData.data + "</strong>\"</p>";
					$("#result").html(result);
				});
		}
	return false;
});
