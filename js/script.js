/* Author:

*/

$("#getRedditUNameForm").submit(function(){
	alert("Form Submit!");
	var uname = $("#uname").val();
		if (uname.length == 0) {
			$("#uname").focus();
		} else {
			alert("Get me some ajax");
			$.ajax({
				url: "http://www.reddit.com/user/" + uname + "/about.json",
				dataType: "jsonp",
				error: function() {
					alert('DANGER DANGER WILL ROBINSON!');
				},
				success: function(json) {
					alert("Callback!");
					console.log(json);
					//var result = "<p>Data \"<strong>" + json + "</strong>\"</p>";
					//$("#result").html(result);
				}
			});
		}
	return false;
});
