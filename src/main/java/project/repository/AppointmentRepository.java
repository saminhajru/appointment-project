package project.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.model.Appointment;


@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, String> {
	
	List<Appointment> findByDateBetween (Date fromDate, Date toDate);
	
}
