$(function() {
	// Fire the request to the server once as the page loads
	// to start the smileycoin daemon.
	// This is a temporary fix to accommodate some bugs at the server.
	getAddress();

	$("#addressbtn").click(getAddress);

});

var getAddress = function() {
	$.ajax({
		url:"https://smileyservice.herokuapp.com/generateAddress",
		async:true,
		type:"GET",
		success: function(result){
			var newAddress = extractAddress(result);
			console.log("this is the new address "+newAddress);
			var URL = makeNewUrl(newAddress);
			updatePaymentButton(URL);
			updateQRCode(URL);
		},
		error: function(xhr,ajaxOptions, thrownError){
			console.log(xhr);
		}
	});
}


// Gets the address value from a JSON like {address: <somesmileycoinaddress>}
var extractAddress = function(result) {
	return ($.parseJSON(result)).address;
}

// Generates a new url/uri for the given address with amount 500000 smly:
var makeNewUrl = function(address) {
     return  "smileycoin:"+address+"?amount=500000.0&label=airfare";
}

// updates the payment button of the site with the new url
var updatePaymentButton = function(url) {
	$('#payWithSMLYURL').attr("href", url);
}

// updates the QR code of the site with the new url
var updateQRCode = function(url) {
	$('#qrcode')[0].innerHTML="";
	new QRCode($('#qrcode')[0], url);
}
