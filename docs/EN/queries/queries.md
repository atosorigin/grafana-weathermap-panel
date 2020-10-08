# Query

[![](../../screenshots/other/Go-back.png)](README.md)


# Choose your request

You can choose a query like this


![](../../screenshots/queries/choose-request.png)


Depending on the query you choose, you can manipulate the result in the plugin.

>
> For example: if you select `prometheus_target_reload_length_seconds`, you can with the same query displayed 3 different objects in the` MainMetric`.
>

The query is the important element because it provides the result and the elements to position the displayed object.


# Generate

![](../../screenshots/queries/continu.png)


If you choose a generic query, this provides the delta of the result you can get like this:


![](../../screenshots/queries/continu-result.png)





# Instant

![](../../screenshots/queries/instant.png)

When you check the ʻInstant` box, it means that Grafana provides the value of the query at time T.

This choice makes it possible to refine the result. You can in the plugin define in the `Manipulate` line of` MainMetric` its behavior, for example the sum of the values to obtain the following result:

![](../../screenshots/queries/instant-result.png)



# See too

- [Tutorial 01 : Add a dashboard SVG](../demo/tutorial01.md)
- [Tutorial 03 : Create dashboard Avanced with link directionnel](../demo/tutorial03.md)
- [Tutorial 05 : Create a customizable query](../demo/tutorial05.md)
