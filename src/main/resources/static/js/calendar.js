Date.prototype.getMonthWeek = function(){
	var firstDay = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
	return Math.ceil((this.getDate() + firstDay)/7);
}

$(document).ready(function() {
	
	var today = new Date().getDay();
	var todayDate = new Date();
	var fromDate = firstDayInWeek(todayDate);
	var toDate = lastDayInWeek(todayDate);
	
function getRangeDate(fromDate, toDate) {
	
$.ajax({
	url : "/therapiePlanDateRange",
	type : "POST",
	contentType : "application/json",
	data : JSON.stringify({"fromDate" : fromDate, "toDate" : toDate}), 
	success : function(data) {
		
		for(var i = 0; i < data.length; i++) {
			var onlyDate = data[i].date;
			var fullDate = new Date(onlyDate);
			var dayFromDate = new Date(onlyDate).getDay();
			var dateLocalFormat = new Date(onlyDate).toLocaleDateString();
			var time = data[i].timeFrom;
			var appointmentDate = new Date(dateLocalFormat + " " + time);
			
			var appointmentDateWithRoundMinutes = roundMinutes(appointmentDate);
			var getCurretHourFromDate = appointmentDateWithRoundMinutes.getHours();
			
			var dateHours = appointmentDate.toLocaleString('en-US', { hour: 'numeric', hour12: true });
			
			var currentTD = "td[hour='" + getCurretHourFromDate + "'][date='" + dateLocalFormat + "']";
			
			// This is dummy text because there is no appointment type on the form
			var dummyText = "Appointment";
				
		$(currentTD)
			.html("<div class='btn center-block displayingAppointmentForNotActiveDay' id='displayingAppointment'><span>" + dateHours + "</span><br/><span>" + dummyText + "</span></div>");
		
		if (isWeekendDay(dayFromDate)) {
			$("#displayingAppointment").empty();
		} else if (isCurrentDate(fullDate)) {
			$("#displayingAppointment").removeClass("displayingAppointmentForNotActiveDay");
			$("#displayingAppointment").addClass("displayingAppointmentForActiveDay");
		}
		}
	
	},
	error : function() {
		alert("error");
	}
	
});
}
	
getRangeDate(fromDate, toDate);
	
function createCalendar(weekDays) {
				
		tableHead(todayDate);
		tableTimeHead(weekDays);

		for (var hour = 8; hour < 17; hour++) {
			
			var $tr = $("<tr>", {
				"hour" : hour
			});
			$("#appointmentTable").append($tr);

			var $currentHour = $("<td>", {
				"hour" : hour
			});
			$($tr).append($currentHour);
			$($currentHour).html("<p>" + hour + "</p>");
			$($currentHour).addClass("currentHour");

			for (var day = 0; day < weekDays.length; day++) {
				var $td = $("<td>", {
					"hour" : hour,
					"date" : weekDays[day].toLocaleDateString()
				});
				$($td).addClass("tableTdStyle");
				
				if (isWeekendDay(weekDays[day].getDay())) {
					$($td).addClass("weekend");
					$($td).addClass("pattern");
					$($td).attr("id", "stripes12");
				} else if (isCurrentDay(weekDays[day].getDay(), today)) {
					$($td).addClass("activeDay");
					$($td).attr("id", "activeDay");
				}

				$($tr).append($td);
			}
		}
	}
	createCalendar(getDaysInCurrentWeek(todayDate));

function isWeekendDay(day) {
	return day == 0 || day == 6;
}

function isCurrentDay(day, today) {
	return day == today;
}

function isCurrentDate(dayDate) {
	var today = new Date();
	today.setHours(0,0,0,0);
	
	dayDate.setHours(0,0,0,0);
	
	return today - dayDate === 0;

}

function firstDayInWeek(today) {
	var weekDays = getDaysInCurrentWeek(today);
	return weekDays[0].toLocaleDateString();
}

function lastDayInWeek(today) {
	var weekDays = getDaysInCurrentWeek(today);
	return weekDays[6].toLocaleDateString();
}

function tableTimeHead(weekDays) {
	var days = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];
	var $dateHead = $("<tr>", {});
	
	$("#appointmentTable").append($dateHead);
	
	var $td = $("<td>", {});
	$($dateHead).append($td);
	$($td).addClass("currentHour");
	
	for (var day = 0; day < weekDays.length; day++) {
		var $td = $("<td>", {
			"date" : weekDays[day].getDate()
		});

		$($dateHead).append($td);
		$($td).html("<div> " + days[day] + " " + "<span class='circleNumber'>" + $($td).attr("date") + "</span>" + "</div>");
		$($td).addClass("dateTimeHead");
		
		if (isCurrentDay(weekDays[day].getDay(), today)) {
			$($td).addClass("activeDay");
			$($td).attr("id", "activeDay");
		}
	}
}

function tableHead(date) {
	
	var monthName = getCurrentMonthYear(date);
	var yearName = date.getFullYear();
	var weekInMonthNumber = date.getMonthWeek();
	
	$("#monthInYear").html(monthName);
	$("#year").html(yearName);
	$("#weekInMonth").html(weekInMonthNumber - 1);
	
}

function getCurrentMonthYear(date) {
	var monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];
	return monthNames[date.getMonth()];
}

$("#btnForPreviousWeek").click(function() {
	var weekDays = getDaysInPreviousWeek(todayDate);
	todayDate.setDate(todayDate.getDate() - 7);
	$("#appointmentTable").empty();
	createCalendar(weekDays);
	
	addOrRemoveClass(weekDays);
	
	fromDate = firstDayInWeek(todayDate);
	toDate = lastDayInWeek(todayDate);
	
	getRangeDate(fromDate, toDate);
	
});

$("#btnForNextWeek").click(function() {
	var weekDays =  getDaysInNextWeek(todayDate);
	todayDate.setDate(todayDate.getDate() + 7);
	$("#appointmentTable").empty();
	createCalendar(weekDays);
	
	addOrRemoveClass(weekDays);
	
	fromDate = firstDayInWeek(todayDate);
	toDate = lastDayInWeek(todayDate);
	
	getRangeDate(fromDate, toDate);
});

function addOrRemoveClass(weekDays) {
	var today = new Date();
	today.setHours(0,0,0,0);
	
	for(var i = 0; i < weekDays.length; i++) {
		var weekDay = weekDays[i];
		weekDay.setHours(0,0,0,0);
		
		if(today - weekDay > 0 || today - weekDay < 0) {
			$("#appointmentTable #activeDay").removeClass("activeDay");
		} else if (today - weekDay === 0) {
			$("#appointmentTable #activeDay").addClass("activeDay");
			break;
		}
	}
}

function roundMinutes(date) {
    date.setHours(date.getHours() + Math.round(date.getMinutes()/60));
    date.setMinutes(0);
    return date;
}

});