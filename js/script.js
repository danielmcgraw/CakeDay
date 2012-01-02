/* Author:

*/

$("#getRedditUNameForm").submit(function(){
	alert("Form Submit!");
	var uname = $("#uname").val();
		if (uname.length == 0) {
			$("#uname").focus();
		} else {
			alert("Get me some ajax");
			$.getJSON("http://www.reddit.com/user/" + uname + "/about.json?callback=?",
				function(json) {
					alert("Callback!");
					//$.each(result, function(i, field){
					//      $("div").append(field + " ");
					//    });
					var result = "<p>Data \"<strong>" + json + "</strong>\"</p>";
					$("#result").html(result);
				});
		}
	return false;
});
