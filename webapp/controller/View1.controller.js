sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	var myPhoneNumber = "+14847447980";
	var myTwilioNumber = "+14848044253";
	
	var g;

	return Controller.extend("TextMeApp.controller.View1", {
		onSmsPress: function(){
			
				$.ajax({
					type: 'POST',
					url: "/twilio/Accounts/ACa3ea8fb65502bd1d4438effafc1d59a8/Messages.json",
					async: true,
					data: {
					    "To": myPhoneNumber,
					    "From": myTwilioNumber,
					    "Body": "This message is a test"
					  }
				}).done(function(results) {
					console.log(results);
				});
		},
		
		onRefresh: function() {
			g.refresh((Math.random() * 100) + 1);	
		},
		
		onAfterRendering: function(){
			  g = new JustGage({
			    id: "__xmlview0--g1",
			    value: 67,
			    min: 0,
			    max: 100,
			    title: "Visitors"
			  });
		}
		
	});
});