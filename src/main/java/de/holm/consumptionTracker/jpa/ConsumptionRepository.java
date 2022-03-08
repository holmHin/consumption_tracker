package de.holm.consumptionTracker.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ConsumptionRepository extends JpaRepository<Consumptions, Integer> {

    @Query("From Consumptions WHERE resourceId = ?1 ORDER BY date asc")
    List<Consumptions> findAllByResourceId(int resourceId);

    @Query("From Consumptions WHERE resourceId = (SELECT id FROM Resources where name = ?1) ORDER BY date asc")
    List<Consumptions> findAllByResourceNameOrderedByDate(String resourceName);

}
