package project;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AppointmentController {
	
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

}
