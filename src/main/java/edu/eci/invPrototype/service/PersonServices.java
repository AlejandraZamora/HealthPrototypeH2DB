package edu.eci.invPrototype.service;

import edu.eci.invPrototype.model.Person;

import java.util.List;

/**
 * Created by Andrés Felipe on 12/02/2017.
 */
public interface PersonServices {
    public void savePerson(Person p);
    public List<Person> getPersons();
    public void updatePerson(Person p);
    public Person getPerson(String pName);
}
