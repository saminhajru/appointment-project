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
			success: function() {
				 window.location.href = '/therapiePlan';
				 return false;
			} ,
			error: function() {
				alert("error")
			},
			
		});
		
	});
		
	$("#exitBtn").click(function() {
	    window.location.href = '/therapiePlan';
	    return false;
	});
	
	 $('#date').datepicker();
	 
	 $('.selectpicker').selectpicker({
	        style: 'btn-default',
	        size: false
	    });
	 
	 $('#fromTime').clockpicker({
		    placement: 'bottom',
		    align: 'left',
		    donetext: 'Done'
		});
	 
	 
	 $('#toTime').clockpicker({
		    placement: 'bottom',
		    align: 'left',
		    donetext: 'Done'
		});
	 

	$(".bs-caret span").removeClass("caret");
	$(".bs-caret span").addClass("glyphicon glyphicon-menu-down");

	$('.selectpicker').selectpicker();
	 
});