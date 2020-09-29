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

The elements that interest us are :

- instance
- job
- quantile
- slice

that will be used in the json template file in the list **filtered**

## Add background image

![background](../../screenshots/demo/tutorial14/display.png)

Adding a background image can be done from the menu `display`.

The selected image will be [demo14-background.svg](../../resource/demo14-background.svg).

To do this, we download it in base64 with the `Copy image address` function, or with the direct link to the repository:

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo14-background.svg

```

It is possible to have more details with the [display](../editor/display.md) page.

## Advanced gabarit

In the tab **Gabarit**

![](../../screenshots/demo/tutorial14/demo14-0.png)

you add the default file

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo14-default.json

```

then 1 click that the **finish** button

![](../../screenshots/demo/tutorial14/demo14-1.png)

you add the link of the json file

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo14-svg.json

```

then 1 click that the button **Add** followed by **finish**.

the link will be displayed in the second part of the screen

![](../../screenshots/demo/tutorial14/demo14-2.png)

it must be assigned a query

then 1 click **load**

## Resultat

![](../../screenshots/demo/tutorial14/result.png)

## Structure gabarit files

the `template` file will use : 

- A variable color in lowerlimit
- Each SVG ID will be determined as a region
- In an SVG background, each SVG ID will display the color of the request according to the defined limits
- Displays a Meta data when you hover the mouse over one of the regions
- Addition of a region of coordinates with the result of the query filter


### default gabarit : demo14-default.json

for the good functioning of the demo 14, the structure of the file will be : 



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

for the good functioning of the demo 14, the structure of the file will be : 

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
