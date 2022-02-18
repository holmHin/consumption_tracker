CREATE TABLE consumptions (
                                 id serial NOT NULL,
                                 resource int NOT NULL,
                                 "date" date NOT NULL,
                                 value decimal NOT NULL,
                                 created time with time zone NOT NULL,
                                 CONSTRAINT consumptions_resources FOREIGN KEY (resource) REFERENCES public.resources(id),
                                 CONSTRAINT consumption_pk PRIMARY KEY (id)
);
