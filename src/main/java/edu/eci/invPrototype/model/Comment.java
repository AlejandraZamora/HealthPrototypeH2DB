package edu.eci.invPrototype.model;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * Created by alejandra on 26/02/17.
 */
@Entity
@Table(name="comments", schema = "application")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long commentId;
    @Temporal(TemporalType.DATE)
    @Column(name="date")
    private Calendar date;
    @Column(name = "description")
    private String description;
    @Column(name="title")
    private String title;


    public Comment(){}

    public Comment(Calendar date, String description, String title) {
        this.date = date;
        this.description = description;
        this.title = title;
    }

    public Comment(String description, String title) {
        this.description = description;
        this.title = title;
    }

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Calendar getDate() {
        return date;
    }

    public void setDate(Calendar date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
