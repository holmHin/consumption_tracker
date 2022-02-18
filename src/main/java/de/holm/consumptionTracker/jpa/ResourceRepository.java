package de.holm.consumptionTracker.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ResourceRepository extends JpaRepository<Resources, Integer> {

    @Query("From Resources  r WHERE r.name LIKE ?1")
    List<Resources> findByName(String name);

}
