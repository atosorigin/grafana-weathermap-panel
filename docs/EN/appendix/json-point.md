# File `point`

The full [sample-point.json](../../resource/sampleJson/sample-point.json) script is available, the construction details of which can be found below.


The **point** file must be declared as a JSON file like this:

```
{  "points": [

]}

```

## Structure


```
{
    "points": [
        {
            "associateLinkIn": [],
            "associateLinkOut": [],
            "associateOrientedLinksIn": [],
            "associateOrientedLinksOut": [],
            "color": "black",
            "colorMode": false,
            "coordinateSpace": {},
            "drawGraphicMarker": {},
            "id": 1,
            "label": "label 1",
            "linkURL": {},
            "lowerLimit": [],
            "mainMetric": {},
            "meta": "",
            "metrics": [],
            "name": "point1",
            "positionParameter": {},
            "positionShapeX": "-60",
            "positionShapeY": "60",
            "rotateArrow": "0",
            "shape": {},
            "sizeHeight": {},
            "sizeWidth": {},
            "textObj": {},
            "traceBack": false,
            "traceBorder": false,
            "valueMetric": ""
        }
    ]
}



```

## associateOrientedLinks In/Out

- **associateOrientedLinksIn** and **associateOrientedLinksOut** : TO DO

```
    "associateOrientedLinksIn": 
    "associateOrientedLinksOut" :
```
## color

- **color** : Allow you to choose a color for the point
```
    "color": "red",
```

## colorMode

- **colorMode** : "true" if you want to use differents colors for this point. "false" if you want a unique color.
```
    "colorMode": false,
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

## id

- **id** : Choose the id of your point
```
    "id": 1,
```


## label

- **id** : Choose the label of your point

```
    "label": "label 1",
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
- variable colour

### Fixed colour


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

## meta

- **meta** : TO DO

```
    "meta": TODO
```


## metrics

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
       
## name

- **name** : Choose the name of your point
```
    "name": "point1",
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


## positionShape X/Y

- **positionShape X** and **positionShapeY** : Choose to place the shape of the point on the board

```
    "positionShapeX": "-60",
    "positionShapeY": "60",
```




## rotateArrow

- **rotateArrow** : Choose the rotation of the arrow
```
    "rotateArrow": "0",
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

## sizeHeight

- **sizeHeight**	
    - **label** : Choose a label for the size in height
    - **value**: Choose a value for height
  

```
     "sizeHeight": {
                "label": "Medium",
                "value": "medium"
            },  

```

## sizeWidth

- **sizeWidth**	
    - **label** : Choose a label for the width size
    - **value**: Choose a value for the width size 

```
 "sizeWidth": {
                "label": "Medium",
                "value": "medium"
            },
    
```
## textObj

- **textObj**
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
        "colorBack": "rgba(255, 255, 255, 0)",
        "colorText": "rgba(0, 0, 0, 1)",
        "generateAuxiliaryElement": {
          "addColorBackElement": false,
          "addColorTextElement": false,
          "colorBackElement": "black",
          "colorTextElement": "white",
          "displayObjectInText": false,
          "displayObjectPermanently": false,
          "legendElement": "",
          "numericFormatElement": "",
          "unityMesureElement": ""
        },
        "generateObjectText": false,
        "isTextRegion": false,
        "legend": "",
        "style": {
          "bold": true,
          "italic": false,
          "underline": true
        },
        "unit": "",
        "value": "",
        "valueGenerateObjectText": {
          "addColorBackElement": false,
          "addColorTextElement": false,
          "colorBackElement": "black",
          "colorTextElement": "white",
          "displayObjectInText": false,
          "displayObjectPermanently": false,
          "legendElement": "",
          "numericFormatElement": "",
          "unityMesureElement": ""
        }
      }
      
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




## valueMetric

- **valueMetric**: Set the value of the metric

```
"valueMetric": ""

```



