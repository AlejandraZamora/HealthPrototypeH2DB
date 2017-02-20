package edu.eci.invPrototype.service;

import edu.eci.invPrototype.model.Address;
import edu.eci.invPrototype.model.Person;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Andrés Felipe on 12/02/2017.
 */
@Service
public class PersonServicesImpl1 implements PersonServices{

    List<Person> personList=new ArrayList<>();

    public PersonServicesImpl1(){
        personList.add(new Person("Carlos","Lopez",new Address("Calle 12","55521","Bogota")));
        personList.add(new Person("Andrea","Gomez",new Address("Calle 12","55521","Bogota")));
        personList.add(new Person("Felipe","Sanchez",new Address("Calle 12","55521","Bogota")));
    }

    @Override
    public void savePerson(Person p) {
        personList.add(p);
    }

    @Override
    public List<Person> getPersons() {
        return personList;
    }

    @Override
    public void updatePerson(Person p) {
        for (Person pe :
                personList) {
            if (p.equals(pe)) {
                personList.add(personList.indexOf(pe), p);
            }
        }
    }

    @Override
    public Person getPerson(String pName) {
        Person ans=null;
        for (Person pe :
                personList) {
            if(pe.getName().equals(pName)){
                ans=pe;
                break;
            }
        }
        return ans;
    }
}
