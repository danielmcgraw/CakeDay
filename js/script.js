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
				url: "http://www.reddit.com/user/" + uname + "/about.json?jsonp=?",
				dataType: "jsonp",
				error: function(data) {
					alert('DANGER DANGER WILL ROBINSON!');
					console.log(data);
				},
				success: function(data) {
					alert("Callback!");
					console.log(data);
					//var result = "<p>Data \"<strong>" + json + "</strong>\"</p>";
					//$("#result").html(result);
				}
			});
		}
	return false;
});

function hollaBack(json) {
	console.logging(json);
}