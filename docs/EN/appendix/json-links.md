# File `links`

The complete [sample-link.json](../../resource/sampleJson/sample-link.json) script is available, the construction details of which can be found below.


The **link** file must be declared as a JSON file like this:

```
{  "links": [

]}

```

## Structure


```
{
    "links": [{
        "colorCoordinateA": "#5794F2",
        "colorCoordinateB": "#E54658",
        "colorMode": false,
        "id": 1,
        "mainMetric": {},
        "isIncurved": {},
        "label": "",
        "linkURL": {},
        "lowerLimit": [],
        "meta": "",
        "metrics": [],
        "name": "orientedLink1",
        "orientationLink": {},
        "pointAPositionX": "-14",
        "pointAPositionY": "88",
        "pointBPositionX": "72",
        "pointBPositionY": "70",
        "pointCPositionX": "29",
        "pointCPositionY": "79",
        "pointIn": "point2",
        "pointOut": "point1",
        "positionParameter": {},
        "regionIn": "",
        "regionOut": "",
        "textObj": {},
        "traceBack": false,
        "traceBorder": false,
        "valueMainMetricA": "-",
        "valueMainMetricB": "-",
        "zIndex": "5",
        "mainMetricB": {},
        "metricsB": []
    }]
}



```
## colorCoordinate A and B

- **colorCoordinateA** and **colorCoordinateB** : Choose the color of the coordinate A and B

```

    "colorCoordinateA": "black",
    "colorCoordinateB": "black",

```

## colorMode

- **colorMode** : "true" if you want to use differents colors for this point. "false" if you want a unique color.

```
    "colorMode": false,

```

## id

- **id** : Choose the id of your link

```
    "id": "1",

```

## mainMetric et mainMetricB

- **mainMetric**	
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
            "expr": "",
            "format": "",
            "key": "",
            "keyValue": "",
            "manageValue": "avg",
            "refId": "",
            "returnQuery": [],
            "unit": ""
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
## label/name

- **label** : Give a label to the link
- **name** : Give a name to the link

```

    "label": "link1",
    "name": "network",
        
        
```

## linkURL

 - **linkURL**
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
      
## lowerLimit


It is possible to choose between 2 color methods : 

- fixed color
- variable color

### Fixed color


If `colorMode` is in false

```
"colorMode": false,
```

Then the color will be defined like this

```
"lowerLimit": [
  {
    "backColor": "#FF00FF",
    "borderColor": "#7FFF00",
    "id": 0,
    "lowerLimitMax": "",
    "lowerLimitMin": "",
    "sizeBorder": "3"
  }
],

```

With:
  - **backColor**: Fill in a color for the background under the form #7FFF00 for example
  - **borderColor** : Fill in a color for the border under the form #7FFF00 for example. 
  - **id** : color id
  - **lowerLimitMax** : Maximum value of the metric for this colour
  - **lowerLimitMin**: Minimum metric value for this colour
  - **sizeBorder** : thickness of the border

### Variable color

Variable colors allow you to change the color according to defined ranges.

If `colorMode` is set to True

```
"colorMode": true,
```

Then the color will be defined like this

```
"lowerLimit": [
   {
     "id": 0,
     "lowerLimitMin": "",
     "lowerLimitMax": "1000",
     "backColor": "#37872D",
     "borderColor": "",
     "sizeBorder": ""
   },
   {
     "id": 1,
     "lowerLimitMin": ">1000",
     "lowerLimitMax": "2000",
     "backColor": "#FA6400",
     "borderColor": "",
     "sizeBorder": ""
   },
   {
     "id": 2,
     "lowerLimitMin": ">2000",
     "lowerLimitMax": "",
     "backColor": "#C4162A",
     "borderColor": "",
     "sizeBorder": ""
   }
 ],

```
With similarly:
  - **backColor**: Fill in a color for the background under the form #7FFF00 for example
  - **borderColor** : Fill in a color for the border under the form #7FFF00 for example. 
  - **id** : color id
  - **lowerLimitMax** : Maximum value of the metric for this colour
  - **lowerLimitMin**: Minimum metric value for this colour
  - **sizeBorder** : thickness of the border



## meta

TO DO , Laisser vide pour le moment

```

```

## metrics et metricsB

 - **metrics** : This is a metric table to add auxilary metrics.
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


## orientationLink

  - **Link orientation**	
    - **label** : Choose a label for orientation. (monodirectional or bidirectional)
    - **value**: Choose the value of the orientation. For example "AB".

```


 "orientationLink": {
            "label": "Monodirectional",
            "value": "AB"
        },
          
```


## point A/B/C Position X/Y

- **pointAPositionX** etc.. : Allow you to place yours point on the board

```
    "pointAPositionX": "-14",
    "pointAPositionX": "-50",
    "pointBPositionX": "85",
    "pointBPositionX": "12",
    "pointCPositionX": "4",
    "pointCPositionX": "-24",

```

## pointIn / point Out

- **pointIn**: Fill in the name of the incoming point. For example "point2".
- **pointOut**: Fill in the name of the outgoing point. For example "point1".

```

    "pointIn": "point2",
    "pointOut": "point1",
        
        
```

## positionParameter

- **Parameter position**
    - **labelAPositionX** : Choose the horizontal position of label A between "-100" and "100".
    - **labelAPositionY** : Choose the vertical position of label A between "-100" and "100".
    - **labelBPositionX** : Choose the horizontal position of label B between "-100" and "100".
    - **labelBPositionY** : Choose the vertical position of label B between "-100" and "100".
    - **tooltipPositionA**: Tooltip A position
    - **tooltipPositionB**: Tooltip B position 

```
 "positionParameter": {
            "labelAPositionX": "0",
            "labelAPositionY": "0",
            "labelBPositionX": "0",
            "labelBPositionY": "0",
            "tooltipPositionA": {},
            "tooltipPositionB": {}
        },

```

## regionIn / regionOut

- **regionIn**: Fill in the name of the incoming region. For example "region2".
- **regionOut**: Fill in the name of the outgoing region. For example "region1".

```

    "regionIn": "region2",
    "regionOut": "region1",
        
```

## textObj

- **colorBack**: Choose the background color of the text in rgba. Example: rgba(255, 255, 255, 0)
- **colorText**: Choose the color of the text in rgba. Example: rgba(0, 0, 0, 1)
- **generateAuxiliaryElement**: Allows to generate an auxiliary element
    - **addColorBackElement**: Add a color to the background. "true" or "false"
    - **addColorTextElement**: Add a color to the text. "true or "false"
    - **colorBackElement**: Choose the background color
    - **colorTextElement** : Choose the color of the text 
    - **displayObjectInText**: Display the object in the text. "true" or "false"
    - **legendElement** : Associate a legend to your element 
    - **numericFormatElement**: Allows to round the result of the Query
    - **unit**: Displays a unit of measure
- **generateObjectText**: Generate a text object. "true" or "false"
- **isTextRegion**: display text in the element or tooltip
- **style**	
    - **bold** : "True" or "False" to put the text in bold.
    - **italic**: "True" or "False" to italicize text
    - **underline**: "True" or "False" to put the text in underline
- **value**: Value of the object
- **valueGenerateObjectText**	
    - **addColorBackElement**: Add a color to the background. "true" or "false"
    - **addColorTextElement**: Add a color to the text. "true or "false"
    - **colorBackElement**: Choose the background color
    - **colorTextElement** : Choose the color of the text 
    - **displayObjectInText**: Display the object in the text. "true" or "false"
    - **legendElement** : Associate a legend to your element 
    - **numericFormatElement**: Allows to round the result of the Query
    - **unit**: Displays a unit of measure

```

"textObj": {
            "colorBack": "",
            "colorText": "",
            "generateAuxiliaryElement": {
                "addColorBackElement": false,
                "addColorTextElement": false,
                "colorBackElement": "black",
                "colorTextElement": "white",
                "displayObjectInText": false,
                "legendElement": "",
                "numericFormatElement": "",
                "unit": ""
            },
            "generateObjectText": false,
            "isTextRegion": false,
            "style": {
                "bold": true,
                "italic": false,
                "underline": true
            },
            "value": "",
            "valueGenerateObjectText": {
                "addColorBackElement": false,
                "addColorTextElement": false,
                "colorBackElement": "black",
                "colorTextElement": "white",
                "displayObjectInText": false,
                "legendElement": "",
                "numericFormatElement": "",
                "unit": ""
            }
        },
        
        
```
      

## traceBack

 - **traceBack**: Allows to associate a color to the background. "true" or "false"


```
     "traceBack": true,

```

## traceBorder

  - **traceBorder**: Allows to associate a color to the border. "true" or "false"

```
      "traceBorder": false
```



## valueMainMetric A/B

- **valueMainMetricA** and **valueMainMetricB** : Value of the main Metric of point A and B

```
    "valueMainMetricA": "50",
    "valueMainMetricB": "30",

```

## zIndex

 - **zIndex**: The larger the number, the more the link will be highlighted on the image in terms of layer.

 ```
    "zIndex": "5",

```

