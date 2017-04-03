package edu.eci.invPrototype.model;

/**
 * Created by Andrés Felipe on 12/02/2017.
 */
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("all")
public class Person {
    public Person(){

    }

    public Person(Integer id, String name, String firstName, Address address, String role) {
        this.id = id;
        this.name = name;
        this.firstName = firstName;
        this.address = address;
        this.role=role;
    }

    private String role;

    public String getRole() { return role; }

    public void setRole(String role) { this.role = role; }

    private ArrayList<Comment> comments;

    public ArrayList<Comment> getComments() {
        return comments;
    }

    public void setComments(ArrayList<Comment> comments) {
        this.comments = comments;
    }

    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    private ArrayList<Diagnostic> diagnostics;

    public ArrayList<Diagnostic> getDiagnostics() {
        return diagnostics;
    }

    public void setDiagnostics(ArrayList<Diagnostic> diagnostics) {
        this.diagnostics = diagnostics;
    }
}
