package edu.eci.invPrototype.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;

/**
 * Created by Andrés Felipe on 12/02/2017.
 */
@Embeddable
public class Address {
    public Address(){

    }
    public Address(String street,String zip,String city){
        this.street=street;
        this.city=city;
        this.zip=zip;
    }

    @Column(name = "street")
    private String street;

    public String getStreet() {
        return this.street;
    }

    public void setStreet(final String street) {
        this.street = street;
    }

    @Column(name="zip")
    private String zip;

    public String getZip() {
        return this.zip;
    }

    public void setZip(final String zip) {
        this.zip = zip;
    }

    @Column(name = "city")
    private String city;

    public String getCity() {
        return this.city;
    }

    public void setCity(final String city) {
        this.city = city;
    }
}
