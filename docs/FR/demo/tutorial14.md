# construire un dashboard par les Query

[![](../../screenshots/other/Go-back.png)](README.md)

## Add a query

The example shows how to use query filters to obtain precise metrics

![fileselect background](../../screenshots/demo/tutorial14/query.jpg)

In a query, we want to analyze what the network card receives

```
prometheus_engine_query_duration_seconds
```

The result shows several possible outcomes

```
prometheus_engine_query_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.5",slice="inner_eval"}
prometheus_engine_query_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.5",slice="prepare_time"}
prometheus_engine_query_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.5",slice="queue_time"}
prometheus_engine_query_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.5",slice="result_sort"}
prometheus_engine_query_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.9",slice="inner_eval"}
prometheus_engine_query_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.9",slice="prepare_time"}
prometheus_engine_query_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.9",slice="queue_time"}
prometheus_engine_query_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.9",slice="result_sort"}
prometheus_engine_query_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.99",slice="inner_eval"}
prometheus_engine_query_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.99",slice="prepare_time"}
prometheus_engine_query_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.99",slice="queue_time"}
prometheus_engine_query_duration_seconds{instance="localhost:9090",job="prometheus",quantile="0.99",slice="result_sort"}

```

Les elements qui nous interressent sont :

- instance
- job
- quantile
- slice

qui seront utilisés dans le fichier json de gabarit dans la liste **filtered**

## Add background image

![fileselect background](../../screenshots/demo/tutorial14/background.jpg)

Adding a background image can be done from the menu `display`.

The selected image will be [demo14-background.svg](../../resource/demo14-background.svg).

To do this, we download it in base64 with the `Copy image address` function, or with the direct link to the repository:

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo14-background.svg

```

It is possible to have more details with the [display](../editor/display.md) page.

## Advanced gabarit

Dans l'onglet **Gabarit**

![](../../screenshots/demo/tutorial14/demo14-1.png)

vous ajoutez le lien du fichier json

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo14-svg.json

```

puis 1 clic que le bouton **Add** suivi de **finish**

le lien s'affichera dans la deuxième partie de l'écran

![](../../screenshots/demo/tutorial14/demo14-2.png)

il faut lui attribuer une query

puis 1 clic **load**

## Resultat

![](../../screenshots/demo/tutorial14/result.png)
