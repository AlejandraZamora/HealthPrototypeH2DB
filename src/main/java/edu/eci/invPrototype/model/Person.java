package edu.eci.invPrototype.model;

/**
 * Created by Andrés Felipe on 12/02/2017.
 */
import java.util.List;

@SuppressWarnings("all")
public class Person {
    public Person(){

    }

    public Person(String name,String firstName,Address address){
        this.name=name;
        this.firstName=firstName;
        this.address=address;
    }

    private String name;

    public String getName() {
        return this.name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    private String firstName;

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(final String firstName) {
        this.firstName = firstName;
    }

    private List<Person> friends;

    public List<Person> getFriends() {
        return this.friends;
    }

    public void setFriends(final List<Person> friends) {
        this.friends = friends;
    }

    private Address address;

    public Address getAddress() {
        return this.address;
    }

    public void setAddress(final Address address) {
        this.address = address;
    }

    public String getFullName() {
        return ((this.firstName + " ") + this.name);
    }

    public List<Person> getFriendsSortedByFullName() {
        return friends;
    }
}
