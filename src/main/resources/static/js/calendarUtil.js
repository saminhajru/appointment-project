function getDaysInCurrentWeek() {
	var week = [];
	var today = new Date();
	today.setDate(today.getDate() - (today.getDay() - 1));
	

	for (var i = 0; i < 7; i++) {
		var currentDate = new Date(today);
		currentDate.setDate(currentDate.getDate() + i);
		week[i] = currentDate;
	
	}

	return week;

};

