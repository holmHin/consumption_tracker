package de.holm.consumptionTracker.controller;

import de.holm.consumptionTracker.jpa.ConsumptionRepository;
import de.holm.consumptionTracker.jpa.ConsumptionRepositoryImpl;
import de.holm.consumptionTracker.jpa.Consumptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("api/consumptions")
public class ConsumptionController {

    private static final Logger log = LoggerFactory.getLogger(ConsumptionRepository.class);
    private final ConsumptionRepository repository;
    private final ConsumptionRepositoryImpl repoImpl;

    public ConsumptionController(ConsumptionRepository repository, ConsumptionRepositoryImpl repoImpl) {
        this.repository = repository;
        this.repoImpl = repoImpl;
    }

    @CrossOrigin
    @GetMapping
    public List<Consumptions> all() {
        log.info("All resources are requested");
        return repository.findAll();
    }

    @PostMapping
    public Consumptions newConsumption(@RequestBody Consumptions newConsumption){
        log.info("Store new Value");
        newConsumption.setCreated(LocalDateTime.now());
        return repository.save(newConsumption);
    }

    @GetMapping("/byResourceName/{resourceName}")
    public List<Consumptions> byResourceName(@PathVariable String resourceName) {
        log.info("Get all consumptions by resource Name {}", resourceName);
        return repository.findAllByResourceNameOrderedByDate(resourceName);
    }

    @GetMapping("/byResource/{resourceId}")
    public List<Consumptions> byResource(@PathVariable int resourceId) {
        log.info("Get all consumptions by resource Id {}", resourceId);
        return repository.findAllByResourceId(resourceId);
    }

    @GetMapping("/byResource/{resourceId}/latest")
    public List<Consumptions> latestByResource(@PathVariable int resourceId) {
        log.info("Get latest consumptions by resource Id {}", resourceId);
        return repoImpl.LatestByResource(resourceId);
    }


}
