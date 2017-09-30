$(document).ready(function() {

	var today = new Date().getDay();

	function createCalendar() {
		var weekDays = getDaysInCurrentWeek();

		tableHead(weekDays);

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
					"date" : weekDays[day]
				});
				$($td).addClass("tableTdStyle");
				
				if (isWeekendDay(weekDays[day].getDay())) {
					$($td).addClass("weekend");
					$($td).addClass("pattern");
					$($td).attr("id", "stripes12");
				} else if (isCurrentDay(weekDays[day].getDay(), today)) {
					$($td).addClass("activeDay");
				}

				$($tr).append($td);
			}
		}
	}
	createCalendar();
});

function isWeekendDay(day) {
	return day == 0 || day == 6;
}

function isCurrentDay(day, today) {
	return day == today;
}

function tableHead(weekDays) {
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
		$($td).html("<p> " + days[day] + " " + $($td).attr("date") + "</p>");
		$($td).addClass("dateHead");
	}
}
