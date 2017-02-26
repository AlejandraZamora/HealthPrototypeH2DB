package edu.eci.invPrototype.service;

import edu.eci.invPrototype.model.Comment;
import edu.eci.invPrototype.model.Diagnostic;
import edu.eci.invPrototype.model.Person;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Andrés Felipe on 12/02/2017.
 */
public interface PersonServices {
    public void savePerson(Person p);
    public List<Person> getPersons();
    public void updatePerson(Person p);
    public Person getPerson(Integer pId);
    public List<Diagnostic> getPersonDiagnostics(Integer personId);
    public void postPersonDiagnostics(Integer personId, Diagnostic d);
    public List<Comment> getPersonComments(Integer personId);
    public void postPersonComment(Integer personId, Comment c);
}
