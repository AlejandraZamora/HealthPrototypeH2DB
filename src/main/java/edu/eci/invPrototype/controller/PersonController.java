package edu.eci.invPrototype.controller;

import edu.eci.invPrototype.model.Person;
import edu.eci.invPrototype.service.GenericService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

/**
 * Created by Andrés Felipe on 12/02/2017.
 */
@RestController
@RequestMapping(value = "/person")
public class PersonController {


    @Autowired
    private GenericService ps;

    public PersonController(final GenericService gs){this.ps=gs;}

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getPersons(){
        return new ResponseEntity<>(ps.findAll(), HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{personId}")
    public ResponseEntity<?> getPerson(@PathVariable Long personId) {
        return new ResponseEntity<>(ps.get(personId), HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> postPerson(@RequestBody Person p) {
        ps.save(p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> updatePerson(@RequestBody Person p) {
        ps.update(p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

}
