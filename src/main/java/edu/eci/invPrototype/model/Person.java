package edu.eci.invPrototype.model;

/**
 * Created by Andrés Felipe on 12/02/2017.
 */
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@SuppressWarnings("all")

@Entity
@Table(name = "persons", schema = "application")
public class Person {
    public Person(){

    }

    public Person(Long id, String name, String firstName, Address address, String role) {
        this.id = id;
        this.name = name;
        this.firstName = firstName;
        this.address = address;
        this.role=role;
    }

    @Column(name="role")
    private String role;

    public String getRole() { return role; }

    public void setRole(String role) { this.role = role; }

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumns(
            {
                    @JoinColumn(name = "comment",referencedColumnName = "id", nullable = false),
            }
    )
    private Set<Comment> comments;

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

    @Id
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "name")
    private String name;

    public String getName() {
        return this.name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    @Column(name = "first_name")
    private String firstName;

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(final String firstName) {
        this.firstName = firstName;
    }

    @Embedded
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

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumns(
            {
                    @JoinColumn(name = "diagnostic",referencedColumnName = "id", nullable = false),
            }
    )
    private Set<Diagnostic> diagnostics;

    public Set<Diagnostic> getDiagnostics() {
        return diagnostics;
    }

    public void setDiagnostics(Set<Diagnostic> diagnostics) {
        this.diagnostics = diagnostics;
    }
}
