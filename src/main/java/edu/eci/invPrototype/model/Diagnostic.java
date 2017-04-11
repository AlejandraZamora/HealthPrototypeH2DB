package edu.eci.invPrototype.model;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * Created by andre on 25/02/2017.
 */
@Entity
@Table(name = "diagnostics", schema = "application")
public class Diagnostic {

    public Diagnostic() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long diagnosticId;
    @Column(name = "systolic_pressure")
    private Integer systolicPressure;
    @Column(name = "diastolic_pressure")
    private Integer diastolicPressure;
    @Column(name = "blood_cholesterol")
    private Integer bloodCholesterol;
    @Column(name = "heart_rate")
    private Integer heartRate;
    @Temporal(TemporalType.DATE)
    @Column(name = "date")
    private Calendar date;

    public Diagnostic(Integer systolicPressure, Integer diastolicPressure, Integer bloodCholesterol, Integer heartRate, Calendar date) {
        this.systolicPressure = systolicPressure;
        this.diastolicPressure = diastolicPressure;
        this.bloodCholesterol = bloodCholesterol;
        this.heartRate = heartRate;
        this.date = date;
    }

    public Long getDiagnosticId() {
        return diagnosticId;
    }

    public void setDiagnosticId(Long diagnosticId) {
        this.diagnosticId = diagnosticId;
    }

    public Integer getSystolicPressure() {
        return systolicPressure;
    }

    public void setSystolicPressure(Integer systolicPressure) {
        this.systolicPressure = systolicPressure;
    }

    public Integer getDiastolicPressure() {
        return diastolicPressure;
    }

    public void setDiastolicPressure(Integer diastolicPressure) {
        this.diastolicPressure = diastolicPressure;
    }

    public Integer getBloodCholesterol() {
        return bloodCholesterol;
    }

    public void setBloodCholesterol(Integer bloodCholesterol) {
        this.bloodCholesterol = bloodCholesterol;
    }

    public Integer getHeartRate() {
        return heartRate;
    }

    public void setHeartRate(Integer heartRate) {
        this.heartRate = heartRate;
    }

    public Calendar getDate() {
        return date;
    }

    public void setDate(Calendar date) {
        this.date = date;
    }

}
