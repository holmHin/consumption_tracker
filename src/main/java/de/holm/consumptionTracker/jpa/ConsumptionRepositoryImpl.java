package de.holm.consumptionTracker.jpa;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class ConsumptionRepositoryImpl {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Consumptions> LatestByResource(int resourceId) {
        return entityManager.createQuery("FROM Consumptions c WHERE c.resource = :resourceId ORDER BY c.date DESC",
                Consumptions.class).setParameter("resourceId", resourceId).setMaxResults(1).getResultList();
    }

}
