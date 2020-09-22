# Advanced dynamic template

[![](../../screenshots/other/Go-back.png)](README.md)

The SVG file is made up of different ID elements, which will serve as the region ID for the plugin.

Demo 14 will display the value of the same request in a request, with a predefined variable color.

## Add a query

The example shows how to use query filters to obtain precise metrics

![fileselect background](../../screenshots/demo/tutorial14/query.jpg)

In a query, we want to analyze what the network card receives

```
prometheus_engine_query_duration_seconds*100000
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

![background](../../screenshots/demo/tutorial14/background.png)

Adding a background image can be done from the menu `display`.

The selected image will be [demo14-background.svg](../../resource/demo14-background.svg).

To do this, we download it in base64 with the `Copy image address` function, or with the direct link to the repository:

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo14-background.svg

```

It is possible to have more details with the [display](../editor/display.md) page.

## Advanced gabarit

Dans l'onglet **Gabarit**

![](../../screenshots/demo/tutorial14/demo14-0.png)

vous ajoutez le fichier par défaut

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo14-default.json

```

puis 1 clic que le bouton **Add**

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

## Structure gabarit files

### default gabarit : demo14-default.json

```
{
  "global": {
     // global
  },
  "default": {
    "templates": [
      {
        // Point
      },
      {
        // Link
      },
      {
        // Region
      }
    ]
  }
}

```

### Template gabarit : demo14-svg.json

```
{
  "global": {
    // global
  },
  "default": {
    "templates": [
      {
        // Region
      }
    ]
  },
  "templates": [
      {
        // Region 0
      },
      {
        // Region 1
      },
      {
        // Region 2
      },
      {
        // Region 3
      },
      {
        // Region 4
      },
      {
        // Region 5
      },
      {
        // Region 6
      },
      {
        // Region 7
      },
      {
        // Region 8
      },
      {
        // Coordinate Region
      },
   ]
}

```

# See too

- [Gabarit default](../appendix/gabarit-default.md)
- [Gabarit template](../appendix/gabarit-template.md)
