package de.holm.consumptionTracker.jpa;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
public class Consumptions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int resourceId;
    private double value;
    private String unit;
    private Date date;
    private LocalDateTime created;

    public String getUnit() {return unit;}

    public void setUnit(String unit) {this.unit = unit;}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getResourceId() {
        return resourceId;
    }

    public void setResourceId(int resource) {
        this.resourceId = resource;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }
}
