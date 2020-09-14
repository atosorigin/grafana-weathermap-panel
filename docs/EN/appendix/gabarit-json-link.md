# Gabarit file

[![](../../screenshots/other/Go-back.png)](README.md)

The complete [sample-gabarit.json](../../resource/sampleJson/sample-gabarit.json) script is available, the construction details of which can be found below.

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
        "meta": "uneMeta",
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


  
## mainMetric et mainMetricB

- **expr** : Expression in PrompQL
- **format** "" (Leaves blank)
- **key**: Allows you to filter the data received by the Query to keep only what is important to you.
- **keyValue** : Allows you to filter the data received by the Query to keep only what is important to you.
- **manageValue** : You can choose between "sum", "avg" or "err".
- **refId**: Metric reference associated with this region
- **returnQuery**: (Leave blank)
- **unit** : (Leave blank)

```
        "mainMetric": {
          "key": "",
          "unit": "",
          "format": "",
          "keyValue": "",
          "filter": [],
          "refId": "",
          "expr": "",
          "returnQuery": [],
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

       
## positionParameter

- **positionParameter**

  - **labelAPosition** : Choose the horizontal position of label A
  - **labelAPosition** : Choose the vertical position of label A
  - **labelBPosition** : Choose the horizontal position of label B 
  - **labelBPosition** : Choose the vertical position of label B
  - **tooltipPositionA**: Tooltip A position
  - **tooltipPositionB**: Tooltip B position

```
        "positionParameter": {
          "xylabelA": "x|0#y|0",
          "xylabelB": "x|0#y|0",
          "tooltipA": "Bottom",
          "tooltipB": "Bottom"
        },
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
