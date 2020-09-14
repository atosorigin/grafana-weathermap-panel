# Gabarit Region

[![](../../screenshots/other/Go-back.png)](README.md)

The complete [gabarit-region.json](../../resource/sampleJson/gabarit-region.json) script is available, the construction details of which can be found below.

The **gabarit** file must be declared as a JSON file like this:




## Region


```     
      {
        "filtered": "quantile|0.5#slice|inner_eval",
        "labelfix": false,
        "xylabel": "xMin|labelName#xMax|labelName#yMin|labelName#yMax|labelName",
        "xylabelfix": "xMin|labelName#xMax|labelName#yMin|labelName#yMax|labelName",
        "type": "region",
        "meta": "uneMeta",
        "label": "label",
        "positionParameter": {},
        "mainMetric": {},
        "metrics": [],
        "linkURL": {},
        "idSVG": "",
        "mode": true,
        "img": "",
        "orientedLink": [],
        "color": "black"
      }
```







##


        "filtered": "quantile|0.5#slice|inner_eval",
        "labelfix": false,
        "xylabel": "xMin|labelName#xMax|labelName#yMin|labelName#yMax|labelName",
        "xylabelfix": "xMin|labelName#xMax|labelName#yMin|labelName#yMax|labelName",

        
        "type": "region",
        
        
        "meta": "uneMeta",
        "label": "0.5-inner_eval",

        

## Région

There are 2 ways to create a region:

- SVG Region
- Coordinated region

### Region SVG

The creation of a region from an SVG element must contain the following values

- **id** is the id of the region. Working as a counter
- **Label** is the name of the region
- **mode** to true
- **idSVG** is the id of the desired SVG area as region
        
        
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

## metrics

- **metrics** This is a metric table to add auxilary metrics.

  - **0**

    - **expr** : Expression in PrompQL
    - **format** : (Leaves blank)
    - **key**: Allows you to filter the data received by the Query to keep only what is important to you.
    - **keyValue** : Allows you to filter the data received by the Query to keep only what is important to you.
    - **manageValue** : You can choose between "sum", "avg" or "err".
    - **refId**: Metric reference associated with this region
    - **returnQuery**: (Leave blank)
    - **unit** : (Leave blank)

  - **1**
    - ...

```
   "metrics": [
     "0":
        {
            "expr": "",
            "format": "",
            "key": "",
            "keyValue": "",
            "manageValue": "avg",
            "refId": "",
            "returnQuery": [],
            "unit": ""
        }
      "1":
        {
            "expr": "",
            "format": "",
            "key": "",
            "keyValue": "",
            "manageValue": "avg",
            "refId": "",
            "returnQuery": [],
            "unit": ""
        }
   ]

```

          "key": "",
          "unit": "",
          "format": "",
          "keyValue": "",
          "filter": [],
          "refId": "",
          "expr": "",
          "returnQuery": [],
          "manageValue": "avg"
        


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

## orientedLink

```
        {
          "label": "lien device",
          "name": "orientedLink1"
        }
```        
