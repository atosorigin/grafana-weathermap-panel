# Gabarit file

[![](../../screenshots/other/Go-back.png)](README.md)

The complete [gabarit-link.json](../../resource/sampleJson/gabarit-link.json) script is available, the construction details of which can be found below.

The **gabarit** file must be declared as a JSON file like this:

### OrientedLink

```
     {
        "filtered": "device|ens3",
        "labelfix": true,
        "xylabelA": "x|quantile#y|quantile",
        "xylabelB": "x|quantile#y|quantile",
        "xylabelC": "x|quantile#y|quantile",
        "xylabelfixA": "x|-70#y|66",
        "xylabelfixB": "x|10#y|60",
        "xylabelfixC": "x|0#y|0",
        "type": "link",
        "name": "unLink",
        "meta": [],
        "label": "lien device",
        "positionParameter": {},
        "mainMetric": {},
        "metrics": [],
        "mainMetricB": {},
        "metricsB": [],
        "linkURL": {},
        "orientationLink": {},
        "size": "9",
        "colorCoordinateA": "#5794F2",
        "colorCoordinateB": "#E54658",
        "valueMainMetricA": "",
        "valueMainMetricB": "",
        "pointIn": "",
        "pointOut": "",
        "regionIn": "",
        "regionOut": "",
        "isIncurved": {},
        "zIndex": "2",
        "color": "black"
      },
```



## Type

- **type** : link


```
        "type": "link",
```


## Label

- **Label** is the name of the point

```
        "label": "label",
```

## Name

- **Name** is the name of the point

```
        "Name": "orientedLink1",
```




## Filter

- **filtered** one or more filters build key|value[#key|value][#key|value]

```
        "filtered": "quantile|0.5",
```


## Link position

There are 2 ways to create point label :

### variable label position

- **labelfix** to false
- **xylabelA** coordinates with : x|<labelName>#y|<labelName>
- **xylabelB** coordinates with : x|<labelName>#y|<labelName>
- **xylabelC** coordinates with : x|<labelName>#y|<labelName>


```
    "xylabelA": "x|labelName#y|labelName",
    "xylabelB": "x|labelName#y|labelName",
    "xylabelC": "x|labelName#y|labelName",

```


### fixed label position

- **labelfix** to true
- **xylabelfixA** coordinates with : x|<value>#y|<value>
- **xylabelfixB** coordinates with : x|<value>#y|<value>
- **xylabelfixC** coordinates with : x|<value>#y|<value>

```
      "xylabelfixA": "x|0#y|0",
      "xylabelfixB": "x|250#y|50",
      "xylabelfixC": "x|290#y|290",

```


## Meta


- **meta** message
- **colorText**: Choose the color of the text in rgba. Example : rgba(0, 0, 0, 1)
- **colorBack**: Choose the background color of the text in rgba. Example: rgba(255, 255, 255, 0)
- **bold** Add a bold to the text. "true or "false"
- **italic** Add a italic to the text. "true or "false"
- **underline** Add a underline to the text. "true or "false"


```
"meta": [
         {
          "meta": "string",
          "obj": {
            "colorText": "string",
            "colorBack": "string",
            "bold": true,
            "italic": true,
            "underline": true
            }
         }
      ]
```


## positionParameter

- **positionParameter**

  - **xylabelA** : Choose the horizontal position X and Y of label A
  - **xylabelB** : Choose the horizontal position X and Y of label B
  - **tooltipA**: Tooltip A position
  - **tooltipB**: Tooltip B position

```
        "positionParameter": {
          "xylabelA": "x|0#y|0",
          "xylabelB": "x|0#y|0",
          "tooltipA": "Bottom",
          "tooltipB": "Bottom"
        },
```


## mainMetric et mainMetricB

- **format** "" (Leaves blank)
- **key**: Allows you to filter the data received by the Query to keep only what is important to you.
- **keyValue** : Allows you to filter the data received by the Query to keep only what is important to you.
- **manageValue** : You can choose between "sum", "avg" or "err".

```
        "mainMetric": {
          "format": "",
          "key": "",
          "keyValue": "",
          "manageValue": "avg"
        },
```

## linkURL

- **followLink**: Allows a redirection to the link by clicking on the region.
- **hoveringTooltipLink** : Allows a redirection to the link filled in the tool type by clicking on the link.
- **hoveringTooltipText** : Displays the link in the tool type that appears when the cursor is passed over the area or point.

```
"linkURL": {
  "followLink": "",
  "hoveringTooltipLink": "",
  "hoveringTooltipText": ""
},

```

## orientationLink

- **Link orientation**
  - **label** : Choose a label for orientation. (monodirectional or bidirectional or nodirectional)
  - **value**: Choose the value of the orientation. For example "AB".

```


 "orientationLink": {
            "label": "Monodirectional",
            "value": "AB"
        },

```




## size

- **size** : Choose a value for the width size

```
 "size": "12",

```



## colorCoordinate A and B

- **colorCoordinateA** and **colorCoordinateB** : Choose the color of the coordinate A and B

```

    "colorCoordinateA": "#5794F2",
    "colorCoordinateB": "#E54658",

```


## valueMainMetric A/B

- **valueMainMetricA** and **valueMainMetricB** : Value of the main Metric of point A and B

```
    "valueMainMetricA": "50",
    "valueMainMetricB": "30",

```

## pointIn / point Out

- **pointIn**: Fill in the name of the incoming point. For example "point2".
- **pointOut**: Fill in the name of the outgoing point. For example "point1".

```

    "pointIn": "point2",
    "pointOut": "point1",


```


## regionIn / regionOut

- **regionIn**: Fill in the name of the incoming region. For example "region2".
- **regionOut**: Fill in the name of the outgoing region. For example "region1".

```

    "regionIn": "region2",
    "regionOut": "region1",

```


## isIncurved

- **isIncurved** : Will allow to define on there will be a third point to make a curvature
  - **label** : Enter a label
  - **value**: Choose whether you want a curvature or not. "true" or "false"

```

  "isIncurved": {
            "label": "No",
            "value": false
        },

```

## color

- **color** : Allow you to choose a color for the point

```
    "color": "red",
```

