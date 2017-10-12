function getDaysInCurrentWeek(today) {
	var week = [];

	if (today.getDay() == 0) {
		today.setDate(today.getDate() - 6);
	} else {
		today.setDate(today.getDate() - (today.getDay() - 1));
	}

	for (var i = 0; i < 7; i++) {
		var currentDate = new Date(today);
		currentDate.setDate(currentDate.getDate() + i);
		week[i] = currentDate;
	}

	return week;
};

function getDaysInNextWeek(date) {
	
	var lastDayInCurrentWeek = getDaysInCurrentWeek(date)[6];
	lastDayInCurrentWeek.setDate(lastDayInCurrentWeek.getDate() + 1);
	var firstDayInNextWeek = new Date(lastDayInCurrentWeek);
	
	return getDaysInCurrentWeek(firstDayInNextWeek);	
}

function getDaysInPreviousWeek(date) {

	var firstDayInCurrentWeek = getDaysInCurrentWeek(date)[0];
	firstDayInCurrentWeek.setDate(firstDayInCurrentWeek.getDate() - 7);
	var firstDayInPreviousWeek = new Date(firstDayInCurrentWeek);

	return getDaysInCurrentWeek(firstDayInPreviousWeek);
}
