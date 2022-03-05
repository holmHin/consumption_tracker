package de.holm.consumptionTracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.io.IOException;

@SpringBootApplication
public class ConsumptionTrackerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ConsumptionTrackerApplication.class, args);
    }


    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**");
            }
        };
    }

    @Bean
    public WebMvcConfigurer webHandler() {
        return new WebMvcConfigurer() {
            @Override
            public void addResourceHandlers(ResourceHandlerRegistry registry) {
                registry.addResourceHandler("/**")
                        .addResourceLocations("classpath:/public/")
                        .resourceChain(true)
                        .addResolver(new PathResourceResolver(){
                            // Resetting to main to let VUE Js take over routing
                            @Override
                            protected Resource getResource (String resourcePath, Resource location) throws IOException {
                                Resource requestedResource = location.createRelative(resourcePath);

                                return requestedResource.exists() && requestedResource.isReadable() ? requestedResource
                                        : new ClassPathResource("/public/index.html");
                            }
                        });
            }
        };
    }
}
