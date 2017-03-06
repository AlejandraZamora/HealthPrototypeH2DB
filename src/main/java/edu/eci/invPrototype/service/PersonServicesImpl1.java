package edu.eci.invPrototype.service;

import edu.eci.invPrototype.model.Address;
import edu.eci.invPrototype.model.Comment;
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
        Comment c1=new Comment(new Date(2017,01,24),"Haga ejercicio","Bajo ritmo cardiaco");
        Comment c2=new Comment(new Date(2017,01,29),"Coma menos grasas","Nivel alto de colesterol");
        Comment c3=new Comment(new Date(2017,02,01),"Disminuya la cantida de sal en su dieta","Presión arterial alta");
        Comment c4=new Comment(new Date(2017,02,16),"Aumente el dulce en su dieta","Presión baja");
        ArrayList<Comment> cs=new ArrayList<Comment>();
        cs.add(c1);cs.add(c2);cs.add(c3);cs.add(c4);
        p.setComments(cs);
        personList.add(p);
        Person p1=new Person(2, "Andrea","Gomez",new Address("Calle 12","55521","Bogota"));
        p1.setComments(cs);
        Diagnostic d11=new Diagnostic(67,89,156,456,new Date());
        Diagnostic d22=new Diagnostic(809,122,234,47,new Date());
        Diagnostic d33=new Diagnostic(135,567,23,98,new Date());
        Diagnostic d44=new Diagnostic(165,673,88,667, new Date());
        ArrayList<Diagnostic> ds1=new ArrayList<Diagnostic>();
        ds1.add(d11);ds1.add(d22);ds1.add(d33);ds1.add(d44);
        p1.setDiagnostics(ds1);
        personList.add(p1);
        Person p2=new Person(3, "Felipe","Sanchez",new Address("Calle 12","55521","Bogota"));
        p2.setComments(cs);
        Diagnostic d01=new Diagnostic(76,889,55,12,new Date());
        Diagnostic d02=new Diagnostic(90,132,56,98,new Date());
        Diagnostic d03=new Diagnostic(189,261,76,98,new Date());
        Diagnostic d04=new Diagnostic(450,13,55,69, new Date());
        ArrayList<Diagnostic> ds2=new ArrayList<Diagnostic>();
        ds2.add(d01);ds2.add(d02);ds2.add(d03);ds2.add(d04);
        p2.setDiagnostics(ds2);
        personList.add(p2);
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
        for (Person pe : personList) {
            if (p.getId()==pe.getId()) {
                personList.remove(personList.indexOf(pe));
                personList.add(p);
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

}
