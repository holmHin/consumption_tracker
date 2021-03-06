CREATE TABLE resources
(
    id          SERIAL,
    "name"      varchar(100)             NOT NULL,
    unit        varchar                  NOT NULL,
    fraction    integer                  NOT NULL,
    incremental bool,
    created     timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT type_pk PRIMARY KEY (id),
    CONSTRAINT type_name UNIQUE (name)
);