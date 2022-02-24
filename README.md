# consumption_tracker
A small app that helps to track the consumption manually, from different resources and over different units.

## Getting started
### Docker 

Use Docker for deployment

```docker pull hohin/consumtion_tracker```

To get a full environemnt up and runnign, the following docker-compose example can be used: 

```version: "3"
services:
  consumption_tracker:
    container_name: rc_tracker  
    image: hohin/consumtion_tracker
    environment:
      POSTGRES_URL: jdbc:postgresql://rc_tracker_db:5432/rc_tracker
      POSTGRES_USERNAME: rc_tracker
      POSTGRES_PASSWORD: password
      SERVER_PORT: 80
    ports: 
      - 80:80
   
  db_tracker:
    image: postgres
    container_name: rc_tracker_db
    ports:
      - 5432:5432
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_USER: rc_tracker
      POSTGRES_DB: rc_tracker
```

