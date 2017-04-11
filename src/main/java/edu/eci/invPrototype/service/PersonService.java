package edu.eci.invPrototype.service;

import edu.eci.invPrototype.jpa.PersonRepository;
import edu.eci.invPrototype.model.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

/**
 * Created by alejandra on 10/04/17.
 */
@Service
public class PersonService implements GenericService<Person, Long> {

    private final PersonRepository personRepository;

    public PersonService(final PersonRepository personRepository) {
        this.personRepository=personRepository;
    }

    @Override
    public Long getId(Person entity) {
        return entity.getId();
    }

    @Override
    public CrudRepository<Person, Long> getRepository() {
        return this.personRepository;
    }

    @Override
    public Person save(Person entity) {
        return GenericService.super.save(entity);
    }
}
