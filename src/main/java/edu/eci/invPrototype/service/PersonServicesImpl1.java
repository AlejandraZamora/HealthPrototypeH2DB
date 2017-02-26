package edu.eci.invPrototype.service;

import edu.eci.invPrototype.model.Address;
import edu.eci.invPrototype.model.Diagnostic;
import edu.eci.invPrototype.model.Person;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Andrés Felipe on 12/02/2017.
 */
@Service
public class PersonServicesImpl1 implements PersonServices{

    List<Person> personList=new ArrayList<>();

    public PersonServicesImpl1(){
        Person p =new Person(1, "Carlos","Lopez",new Address("Calle 12","55521","Bogota"));
        Diagnostic d1=new Diagnostic(123,456,23,445,new Date());
        Diagnostic d2=new Diagnostic(163,557,273,89,new Date());
        Diagnostic d3=new Diagnostic(345,745,98,68,new Date());
        Diagnostic d4=new Diagnostic(234,123,45,46, new Date());
        ArrayList<Diagnostic> ds=new ArrayList<Diagnostic>();
        ds.add(d1);ds.add(d2);ds.add(d3);ds.add(d4);
        p.setDiagnostics(ds);
        personList.add(p);
        personList.add(new Person(2, "Andrea","Gomez",new Address("Calle 12","55521","Bogota")));
        personList.add(new Person(3, "Felipe","Sanchez",new Address("Calle 12","55521","Bogota")));
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
            if (p.getId()==pe.getId()) {
                personList.add(personList.indexOf(pe), p);
            }
        }
    }


    @Override
    public Person getPerson(Integer pId) {
        Person ans=null;
        for (Person pe :
                personList) {
            if(pe.getId()==pId){
                ans=pe;
                break;
            }
        }
        return ans;
    }

    @Override
    public List<Diagnostic> getPersonDiagnostics(Integer personId) {
        Person p=this.getPerson(personId);
        return p.getDiagnostics();
    }

    @Override
    public void postPersonDiagnostics(Integer personId, Diagnostic d) {
        Person p=this.getPerson(personId);
        ArrayList<Diagnostic> diagnostics=p.getDiagnostics();
        diagnostics.add(d);
        p.setDiagnostics(diagnostics);
        System.out.println(d.getBloodCholesterol()+"  "+p.getDiagnostics().get(0).getBloodCholesterol());
    }
}
