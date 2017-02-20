package edu.eci.invPrototype.model;

/**
 * Created by Andrés Felipe on 12/02/2017.
 */
public class Address {
    public Address(){

    }
    public Address(String street,String zip,String city){
        this.street=street;
        this.city=city;
        this.zip=zip;
    }
    private String street;

    public String getStreet() {
        return this.street;
    }

    public void setStreet(final String street) {
        this.street = street;
    }

    private String zip;

    public String getZip() {
        return this.zip;
    }

    public void setZip(final String zip) {
        this.zip = zip;
    }

    private String city;

    public String getCity() {
        return this.city;
    }

    public void setCity(final String city) {
        this.city = city;
    }
}
