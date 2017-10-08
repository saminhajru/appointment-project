package project.repository;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import project.model.Appointment;

@Repository
public class AppointmentRepositoryHibernate {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}
	
	public List<Appointment> getAppointmentsForCurrentWeek(String startDate, String endDate) {
		
		Query query = getSession().createQuery("from Appointment where Date between :startDate and :endDate");
		query.setParameter("startDate", startDate);
		query.setParameter("endDate", endDate);
		
		return query.list();
		
	}

}
