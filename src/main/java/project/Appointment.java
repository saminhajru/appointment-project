package project;

import java.util.Date;

public class Appointment {

	private Date date;
	private String timeFrom;
	private String timeTo;
	private String patientName;
	private String email;
	private String phone;
	private String organization;
	private String comments;
	private String remindMe;

	public Appointment() {
	}

	public Appointment(Date date,String timeFrom, String timeTo, String patientName, String email, String phone, String organization, String comments,
			String remindMe) {
		super();
		this.date = date;
		this.timeFrom = timeFrom;
		this.timeTo = timeTo;
		this.patientName = patientName;
		this.email = email;
		this.phone = phone;
		this.organization = organization;
		this.comments = comments;
		this.remindMe = remindMe;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getTimeFrom() {
		return timeFrom;
	}

	public void setTimeFrom(String timeFrom) {
		this.timeFrom = timeFrom;
	}

	public String getTimeTo() {
		return timeTo;
	}

	public void setTimeTo(String timeTo) {
		this.timeTo = timeTo;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getRemindMe() {
		return remindMe;
	}

	public void setRemindMe(String remindMe) {
		this.remindMe = remindMe;
	}

	@Override
	public String toString() {
		return "Appointment [date=" + date + ", timeFrom=" + timeFrom + ", timeTo=" + timeTo + ", patientName="
				+ patientName + ", email=" + email + ", phone=" + phone + ", organization=" + organization
				+ ", comments=" + comments + ", remindMe=" + remindMe + "]";
	}

}
