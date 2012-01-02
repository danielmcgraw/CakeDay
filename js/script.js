/* Author:

*/

$("#getRedditUNameForm").submit(function(){
	alert("Form Submit!");
	var uname = $("#uname").val();
		if (uname.length == 0) {
			$("#uname").focus();
		} else {
			alert("Get me some ajax");
			$.getJSON("http://www.reddit.com/user/" + uname + "/about.json?callback=parseData");
		}
	return false;
});

function parseData(json) {
	alert("Callback!");
	console.log(json);
	//var result = "<p>Data \"<strong>" + json + "</strong>\"</p>";
	//$("#result").html(result);
}