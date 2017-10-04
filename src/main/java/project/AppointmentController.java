package project;


import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class AppointmentController {
	
	DateFormat dateFormat = new SimpleDateFormat("mm/dd/yy");
	
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
	@RequestMapping(value = "/tableHead", method = RequestMethod.GET)
	public String tableHeadPage() {
		return "tableHead";
	}
	
	@RequestMapping(value = "/appoinmentData", method = RequestMethod.POST, consumes = "application/json")
	public String appoinmentDataPage(@RequestBody HashMap<String, String> appointmentData) throws ParseException {
		
		String dateString = appointmentData.get("date");
		Date date = null;
		System.out.println(dateString);
		
		if(dateString != null) {
			date = dateFormat.parse(dateString);
		}
		
		String patientName = appointmentData.get("patientName");
		String timeFrom = appointmentData.get("timeFrom");
		String timeTo = appointmentData.get("timeTo");
		String email = appointmentData.get("email");
		String phone = appointmentData.get("phone");
		String organisation = appointmentData.get("organisation");
		String notesComments = appointmentData.get("notesComments");
		String remindsme = appointmentData.get("remindsme");
		
		Appointment app = new Appointment(date, timeFrom, timeTo, patientName,email, phone, organisation, notesComments, remindsme);
		System.out.println(app);
		
		return "appointmentForm";
	}

}
