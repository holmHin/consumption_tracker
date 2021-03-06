package de.holm.consumptionTracker.controller;

import de.holm.consumptionTracker.jpa.ResourceRepository;
import de.holm.consumptionTracker.jpa.Resources;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("api/resources")
public class ResourceController {

    private final ResourceRepository repository;
    private static final Logger log = LoggerFactory.getLogger(ResourceController.class);

    public ResourceController(ResourceRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Resources> all() {
        log.info("Requesting all resources");
        return repository.findAll();
    }


    @GetMapping("/find/{name}")
    public List<Resources> findResource(@PathVariable String name) {
        log.info("Search for resource with name {}", name);
        try {
            return repository.findByName(name);
        } catch (Exception e) {
            log.error(e.getMessage());
            e.printStackTrace();
            return null;
        }
    }

    @PostMapping
    public Resources newResource(@RequestBody Resources newResource) {
        log.info("Store new resource {}, having {} as unit", newResource.getName(), newResource.getUnit());
        newResource.setCreated(LocalDateTime.now());
        return repository.save(newResource);
    }

    @PostMapping("/delete")
    public void deleteResource(@RequestBody Resources deleteResource){
        log.info("Delete Entry {}", deleteResource.getId());
        repository.delete(deleteResource);
    }


}
