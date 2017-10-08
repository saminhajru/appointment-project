package project.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "appointment")
public class Appointment {

	@Temporal(TemporalType.DATE)
	private Date date;
	@Temporal(TemporalType.TIME)
	private Date timeFrom;
	@Temporal(TemporalType.TIME)
	private Date timeTo;
	private String patientName;
	@Id
	private String email;
	private String phone;
	private String organization;
	private String comments;
	private String remindMe;

	public Appointment() {
	}

	public Appointment(Date date, Date timeFrom, Date timeTo, String patientName, String email, String phone,
			String organization, String comments, String remindMe) {
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

	public Date getTimeFrom() {
		return timeFrom;
	}

	public void setTimeFrom(Date timeFrom) {
		this.timeFrom = timeFrom;
	}

	public Date getTimeTo() {
		return timeTo;
	}

	public void setTimeTo(Date timeTo) {
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
