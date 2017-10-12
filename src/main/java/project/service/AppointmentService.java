package project.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.model.Appointment;
import project.repository.AppointmentRepository;

@Service
public class AppointmentService {

	@Autowired
	private AppointmentRepository appointmentRepository;

	public void saveAppointment(Appointment appointment) {
		appointmentRepository.save(appointment);
	}

	public List<Appointment> findByDateBetween(Date fromDate, Date toDate) {
		return appointmentRepository.findByDateBetween(fromDate, toDate);
	}

}
