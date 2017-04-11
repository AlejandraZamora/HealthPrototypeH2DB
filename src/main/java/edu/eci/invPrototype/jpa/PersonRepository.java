package edu.eci.invPrototype.jpa;

import edu.eci.invPrototype.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

/**
 * 
 * @author Gaurav Rai Mazra
 * <a href="http://www.gauravbytes.com">Catch me</a>
 */
@Transactional
public interface PersonRepository extends JpaRepository<Person, Long>  {

}
