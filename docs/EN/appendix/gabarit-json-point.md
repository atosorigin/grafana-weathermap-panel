# Gabarit file

[![](../../screenshots/other/Go-back.png)](README.md)

The complete [sample-gabarit.json](../../resource/sampleJson/sample-gabarit.json) script is available, the construction details of which can be found below.

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
        "sizeHeight": {},
        "rotateArrow": {},
        "positionShapeX": "",
        "positionShapeY": "",
        "color": "green",
        "assiciateOrientedLinksIn": [],
        "associateOrientedLinksOut": []
      },
```

## templates

The creation of a region from an SVG element must contain the following values

- **filtered** : key|value[#key|value][#key|value]
- **Labelfix** is the name of the region
- **xylabel**
- **xylabelfix**
- **type** : point

       "name": "unPoint",
        "meta": "uneMeta",
        "label": "mtu ens3",



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

## mainMetric

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

## meta

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

///////////////////////////////

"metrics": [],

        "valueMetric": "",

        "sizeWidth": "12",
        "sizeHeight": {
          "label": "",
          "value": ""
        },
        "rotateArrow": {
          "label": "",
          "value": ""
        },
        "positionShapeX": "",
        "positionShapeY": "",
        "color": "green",
        "assiciateOrientedLinksIn": [],
        "associateOrientedLinksOut": []
