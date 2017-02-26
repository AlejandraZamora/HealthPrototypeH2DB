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
