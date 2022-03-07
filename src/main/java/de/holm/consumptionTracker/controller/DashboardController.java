package de.holm.consumptionTracker.controller;

import de.holm.consumptionTracker.jpa.ConsumptionRepository;
import de.holm.consumptionTracker.jpa.Dashboard;
import de.holm.consumptionTracker.jpa.DashboardRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/dashboard")
public class DashboardController {

    private static final Logger log = LoggerFactory.getLogger(ConsumptionRepository.class);
    private final DashboardRepository repository;


    public DashboardController(DashboardRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Dashboard> all(){
        log.info("Load all Dashboards");
        return repository.findAll();
    }
}
