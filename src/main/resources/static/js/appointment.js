$(document).ready(function() {
//	
//	var token = $("#token_csrf").attr("content");
//
//	$.ajaxSetup({
//		beforeSend : function(xhr) {
//			xhr.setRequestHeader("X-CSRF-TOKEN", token);
//		}
//	});
	
	$("#buttonForCreating").click(function(event) {
		event.preventDefault();
		
		var date = $("#date").val();
		var fromTime = $("#fromTime").val();
		var toTime = $("#toTime").val();
		var patientName = $("#patientName").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var organisation = $("#organisation").val();
		var notesComments = $("#notesComments").val();
		var remindsme = $("#remindsme").val();
			
		$.ajax({
			url: '/appoinmentData',
			type: "POST",
			data: JSON.stringify({"date" : date, "patientName" : patientName, "timeFrom" : fromTime, "timeTo" : toTime,
				"patientName" : patientName, "email" : email, "phone" : phone, "organisation" : organisation, 
				"notesComments" : notesComments, "remindsme" : remindsme}),
			contentType: 'application/json',
			succes: function() {
				alert("succes")
			} ,
			error: function() {
				alert("error")
			},
			
		});
		
	});
	
	
	 $('#date').datepicker();
});