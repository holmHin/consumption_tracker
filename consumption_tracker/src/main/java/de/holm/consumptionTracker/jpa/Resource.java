package de.holm.consumptionTracker.jpa;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class Resource {


    @Id
    private int id;
    private String name;
    private String unit;
    private int fraction;
    private LocalDateTime created;

    public Resource(){}
}
