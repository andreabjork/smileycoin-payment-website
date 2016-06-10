$(function() {
	// Fire the request to the server once as the page loads
	// to start the smileycoin daemon.
	// This is a temporary fix to accommodate some bugs at the server.
	getAddress();
});



$("#addressbtn").click(function(){
	getAddress();
}


var getAddress = function() {
	$.ajax({
		url:"https://smileyservice.herokuapp.com/generateAddress",
		async:true,
		type:"GET",
		dataType:"json",
		success: function(result){
			alert(result);
		},
		error: function(xhr,ajaxOptions, thrownError){
			console.log(xhr);
		}
	});
}
