$('#Booking_Payment_PaymentMethod').on('change', function(){
		if (this.value=="Smileycoin"){
			$("#korthafi").hide();
			$("#Booking_Payment_CardHolder").hide();
			$("#kortanumer").hide();
			$("#Booking_Payment_CardNumber").hide();
			$("#gildistimi").hide();
			$("#Booking_Payment_ExpirationDateMonth").hide();
			$("#Booking_Payment_ExpirationDateYear").hide();
			$("#cvcnumer").hide();
			$("#Booking_Payment_CVCode").hide();
			$(".asterisk").hide();
			$("#smileyamount").fadeIn("fast");
			$("#payWithSMLY").fadeIn("fast");
			$("#qrcode").fadeIn("fast");
			getAddress();
			
			 
		}
		else {
			$("#korthafi").fadeIn("fast");
			$("#Booking_Payment_CardHolder").fadeIn("fast");
			$("#kortanumer").fadeIn("fast");
			$("#Booking_Payment_CardNumber").fadeIn("fast");
			$("#gildistimi").fadeIn("fast");
			$("#Booking_Payment_ExpirationDateMonth").fadeIn("fast");
			$("#Booking_Payment_ExpirationDateYear").fadeIn("fast");
			$("#cvcnumer").fadeIn("fast");
			$("#Booking_Payment_CVCode").fadeIn("fast");
			$(".asterisk").fadeIn("fast");
			$("#smileyamount").hide();
			$("#payWithSMLY").hide();
			$("#qrcode").hide("fast");
		}
}).trigger('change');

