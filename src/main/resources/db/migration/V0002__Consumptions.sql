CREATE TABLE consumptions
(
    id          SERIAL,
    resource_id int                 NOT NULL,
    "date"      date                NOT NULL,
    value       decimal             NOT NULL,
    unit        varchar(20)         NOT NULL,
    created     time with time zone NOT NULL,
    CONSTRAINT consumptions_resources FOREIGN KEY (resource_id) REFERENCES public.resources (id),
    CONSTRAINT consumption_pk PRIMARY KEY (id)
);
