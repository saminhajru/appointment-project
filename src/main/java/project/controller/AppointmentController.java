package project.controller;


import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import project.model.Appointment;
import project.model.DateRange;
import project.service.AppointmentService;


@Controller
public class AppointmentController {
	
	@Autowired
	private AppointmentService appointmentService;
	
	DateFormat dateFormat = new SimpleDateFormat("MM/dd/yy");
	DateFormat timeFormat = new SimpleDateFormat("HH:mm");
	
	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String homePage() {
		return "home";
	}
	
	@RequestMapping(value = "/appointmentForm", method = RequestMethod.GET)
	public String appointmentFormPage() {
		return "appointmentForm";
	}
	
	@RequestMapping(value = "/therapiePlan", method = RequestMethod.GET)
	public String therapiePlanPage() {					
		return "therapiePlan";
	}
	
	@RequestMapping(value = "/therapiePlanDateRange", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody List<Appointment> therapiePlanPage(@RequestBody HashMap<String, String> dateRangeProp) throws ParseException {	
		
		String fromDateString = dateRangeProp.get("fromDate");
		String toDateString = dateRangeProp.get("toDate");
		Date fromDate = dateFormat.parse(fromDateString);
		Date toDate = dateFormat.parse(toDateString);
		DateRange dateRange = new DateRange(fromDate, toDate);
		
		List<Appointment> appointmentsForCurrentWeek = appointmentService.findByDateBetween(fromDate, toDate);
		System.out.println(appointmentsForCurrentWeek);
		
		return appointmentsForCurrentWeek;
	}
	
	
	@RequestMapping(value = "/tableHead", method = RequestMethod.GET)
	public String tableHeadPage() {
		return "tableHead";
	}
	
	@RequestMapping(value = "/appoinmentData", method = RequestMethod.POST, consumes = "application/json")
	public String appoinmentDataPage(@RequestBody HashMap<String, String> appointmentData) throws ParseException {
		
		String dateString = appointmentData.get("date");
		String timeFromString = appointmentData.get("timeFrom");
		String timeToString = appointmentData.get("timeTo");
	
		Date date = null;
		Date timeFrom = null;
		Date timeTo = null;
		
		if(timeFromString != null && !timeFromString.isEmpty() && timeToString != null 
				&& !timeToString.isEmpty() && dateString != null && !dateString.isEmpty()) {
			timeFrom = timeFormat.parse(timeFromString);
			timeTo = timeFormat.parse(timeToString);	
			date = dateFormat.parse(dateString);
		}

		String patientName = appointmentData.get("patientName");
		String email = appointmentData.get("email");
		String phone = appointmentData.get("phone");
		String organisation = appointmentData.get("organisation");
		String notesComments = appointmentData.get("notesComments");
		String remindsme = appointmentData.get("remindsme");
		
	Appointment app = new Appointment(date, timeFrom, timeTo, patientName,email, phone, organisation, notesComments, remindsme);
	System.out.println(app);
		appointmentService.saveAppointment(app);
		
		return "appointmentForm";
	}

}
