create view dashboard as SELECT
                             r.id,
                             r.name,
                             r.unit,
                             r.fraction,
                             r.incremental,
                             (select value from consumptions where resource_id = r.id order by "date" desc limit 1),
	(select "date"  from consumptions where resource_id = r.id order by "date" desc limit 1)
FROM resources r