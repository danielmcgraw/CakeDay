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
			    function(data){
			      $.each(data, function(i,item){            
			        alert(item.x);
			      });
			  });
			/*$.ajax({
				url: "http://www.reddit.com/user/" + uname + "/about.json",
				dataType: "jsonp",
				jsonp: false, 
				jsonpCallback: "hollaBack",
				error: function(data, textStatus, jqXHR) {
					alert('DANGER DANGER WILL ROBINSON!');
					console.log(data);
					console.log(textStatus);
					console.log(jqXHR);
				},
				success: function(data, textStatus, jqXHR) {
					alert("Callback!");
					console.log(data);
					//var result = "<p>Data \"<strong>" + json + "</strong>\"</p>";
					//$("#result").html(result);
				}
			});*/
		}
	return false;
});

function hollaBack(json) {
	console.logging(json);
}