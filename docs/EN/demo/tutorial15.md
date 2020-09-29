# Multiple gabarit loading

[![](../../screenshots/other/Go-back.png)](README.md)

Demo 15 will position a variable element in an X and Y space, and display its value at the point defined by an element in a query.

In the example, it will display a certain number of points in relation to the return of the filtred query.

## Add a query

The example shows how to use query filters to obtain precise metrics

![fileselect background](../../screenshots/demo/tutorial15/query.jpg)

In a query, we want to analyze what the network card receives

```
prometheus_http_request_duration_seconds_bucket
```

The result shows several possible outcomes

```
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",instance="localhost:9090",job="prometheus",le="+Inf"}
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",instance="localhost:9090",job="prometheus",le="0.1"}
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",instance="localhost:9090",job="prometheus",le="0.2"}
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",instance="localhost:9090",job="prometheus",le="0.4"}
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",instance="localhost:9090",job="prometheus",le="1"}
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",instance="localhost:9090",job="prometheus",le="120"}
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",instance="localhost:9090",job="prometheus",le="20"}
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",instance="localhost:9090",job="prometheus",le="3"}
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",instance="localhost:9090",job="prometheus",le="60"}
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",instance="localhost:9090",job="prometheus",le="8"}
...
```

The elements that interest us are :

- handler
- instance
- job
- le

that will be used in the json template file in the list **filtered**

we will use the element `le` of the query which will be used as the position of the point (X, Y) 

## Determining a space

![](../../screenshots/demo/tutorial15/display.png)

The creation of a background space is done from the `display' menu.

It requires

- Uncheck `use svg`
- Enter the width (ex : 400)
- Enter height (ex : 400)

It is possible to have more details with the [display](../editor/display.md) page.

## Advanced gabarit

In the tab **Gabarit**

![](../../screenshots/demo/tutorial15/demo15-0.png)

you add the default file

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo15-default.json

```
then 1 click that the button **finish**


![](../../screenshots/demo/tutorial15/demo15-1.png)

you add the link of the `json` file in the tab `url list`

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo15-point-multi.json

```

then 1 click that the button **Add** followed by **finish**.

the link will be displayed in the second part of the screen

![](../../screenshots/demo/tutorial15/demo15-2.png)

this file must be associated to a query

then 1 click **load**

## Result

![](../../screenshots/demo/tutorial15/result.png)

## Structure gabarit files

the `template` file will use : 

 - a fixed color in lowerlimit
 - the position of the points in X and Y will be variable and defined by the name of the element
 - the result of the query is displayed in a tooltip. The value appears when the mouse passes over the point
 - Position parameter

### default gabarit : demo15-default.json

for the good functioning of the demo 15, the structure of the file will be : 

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

### Template gabarit : demo15-point-multi.json

for the good functioning of the demo 15, the structure of the file will be : 

```
{
  "global": {
    // global
  },
  "default": {
    "templates": [
      {
        // Point
      }
    ]
  },
  "templates": [
      {
        // Point
      }
   ]
}

```

# See too

- [Gabarit default](../appendix/gabarit-default.md)
- [Gabarit template](../appendix/gabarit-template.md)
