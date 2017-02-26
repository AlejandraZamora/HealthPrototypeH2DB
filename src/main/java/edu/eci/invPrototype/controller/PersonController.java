package edu.eci.invPrototype.controller;

import edu.eci.invPrototype.model.Comment;
import edu.eci.invPrototype.model.Diagnostic;
import edu.eci.invPrototype.model.Person;
import edu.eci.invPrototype.service.PersonServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by Andrés Felipe on 12/02/2017.
 */
@RestController
@RequestMapping(value = "/person")
public class PersonController {

    @Autowired
    private PersonServices ps;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getPersons(){
        return new ResponseEntity<>(ps.getPersons(), HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{personId}")
    public ResponseEntity<?> getPerson(@PathVariable Integer personId) {
        return new ResponseEntity<>(ps.getPerson(personId), HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{personId}/diagnostic")
    public ResponseEntity<?> getPersonDiagnostics(@PathVariable Integer personId) {
        return new ResponseEntity<>(ps.getPersonDiagnostics(personId), HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/{personId}/diagnostic")
    public ResponseEntity<?> postPersonDiagnostics(@PathVariable Integer personId, @RequestBody Diagnostic d) {
        ps.postPersonDiagnostics(personId, d);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{personId}/comment")
    public ResponseEntity<?> getPersonComments(@PathVariable Integer personId) {
        return new ResponseEntity<>(ps.getPersonComments(personId), HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/{personId}/comment")
    public ResponseEntity<?> postPersonComment(@PathVariable Integer personId, @RequestBody Comment c) {
        ps.postPersonComment(personId, c);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> postPerson(@RequestBody Person p) {
        ps.savePerson(p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> updatePerson(@RequestBody Person p) {
        ps.updatePerson(p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
