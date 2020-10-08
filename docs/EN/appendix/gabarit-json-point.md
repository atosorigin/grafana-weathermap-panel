# Gabarit file

[![](../../screenshots/other/Go-back.png)](README.md)


The complete [gabarit-point.json](../../resource/sampleJson/gabarit-point.json) script is available, the construction details of which can be found below.

The **gabarit** file must be declared as a JSON file like this:

### points

```
      {
        "filtered": "",
        "labelfix": true,
        "xylabel": "x|labelName#y|labelName",
        "xylabelfix": "x|90#y|90",
        "type": "point",
        "name": "unPoint",
        "meta": [],
        "label": "label",
        "positionParameter": {},
        "mainMetric": {},
        "metrics": [],
        "linkURL": {},
        "valueMetric": "",
        "drawGraphicMarker": {},
        "shape": {},
        "sizeWidth": "12",
        "rotateArrow": {},
        "positionShapeX": "",
        "positionShapeY": "",
        "color": "green",
        "assiciateOrientedLinksIn": [],
        "associateOrientedLinksOut": []
      },
```



## Type

- **type** : point


```
        "type": "point",
```


## Label

- **Label** is the name of the point

```
        "label": "label",
```

## Name

- **Name** is the name of the point

```
        "Name": "point1",
```




## Filter

- **filtered** one or more filters build key|value[#key|value][#key|value]

```
        "filtered": "quantile|0.5#slice|inner_eval",
```


## Point position

There are 2 ways to create point label :

### variable label position

- **labelfix** to false
- **xylabel** coordinates with : x|<labelName>#y|<labelName>


```
    "xylabel": "x|labelName#y|labelName",

```


### fixed label position

- **labelfix** to true
- **xylabelfix** coordinates with : x|<value>#y|<value>


```
    "xylabelfix": "x|243#y|57"

```


## meta

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
          "colorText": "string",
          "colorBack": "string",
          "bold": true,
          "italic": true,
          "underline": true
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


## mainMetric

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

## Metrics

TODO

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

## ValueMetric

TODO

## drawGraphicMarker

- **drawGraphicMarker**
  - **label** : Choose a label
  - **value**: Choose a value. "true" or "false"

```
    "drawGraphicMarker": {
                "label": "Yes",
                "value": "true"
            },

```

## Shape

- **shape**: Allows you to define a shape for the point
  - **label** : Choose a label for the shape
  - **value**: Choose a value for the shape

```
    "shape": {
                "label": "Circle",
                "value": "circle"
            },

```


## sizeWidth

- **sizeWidth** : Choose a value for the width size

```
 "sizeWidth": "12",

```

## rotateArrow

- **rotateArrow** : Choose the rotation of the arrow

```
    "rotateArrow": {
        "label": "",
        "value": ""
      },
```

## positionShape X/Y

- **positionShapeX** and **positionShapeY** : Choose to place the shape of the point on the board

```
    "positionShapeX": "100",
    "positionShapeY": "60",
```

## color

- **color** : Allow you to choose a color for the point

```
    "color": "red",
```

## associateOrientedLinksIn

TODO

```
    "associateOrientedLinksIn": [],
```



## associateOrientedLinksOut

TODO
```
      "associateOrientedLinksOut": [
        {
          "label": "lien device",
          "name": "orientedLink1"
        }
      ]
```
      
      
