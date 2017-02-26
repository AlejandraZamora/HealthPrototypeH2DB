package edu.eci.invPrototype.model;

import java.util.Date;

/**
 * Created by alejandra on 26/02/17.
 */
public class Comment {
    private Date date;
    private String description;
    private String title;

    public Comment(){}

    public Comment(Date date, String description, String title) {
        this.date = date;
        this.description = description;
        this.title = title;
    }

    public Comment(String description, String title) {
        this.description = description;
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
