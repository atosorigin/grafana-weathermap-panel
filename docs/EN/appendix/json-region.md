# File `region`

The full [sample-region.json](../../resource/sampleJson/sample-region.json) script is available, with construction details below.


The **region** file must be declared as a JSON file like this:

```

{ "regions": [

]}

```
## Structure 

```
{
  "points": 
  [
    {
      "colorMode"	:false,
      "coords":	{},
      "id": 1,
      "idSVG": "path147",
      "img": "",
      "label": "PC",
      "linkURL": {},
      "lowerLimit": [],
      "mainMetric": {},
      "meta": "",
      "metrics": [],
      "mode": true,
      "orientedLink": [],
      "positionParameter": {},
      "textObj": {},
      "traceBack": true,
      "traceBorder": true,
    }
  ]
}
```
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

```

{ "regions": [
    {
      "colorMode": false,
      "coords": {
        "xMax": "0",
        "xMin": "0",
        "yMax": "0",
        "yMin": "0"
      },
      "id": 1,
      "idSVG": "path147",
      "img": "",
      "label": "PC",
      "linkURL": {},
      "lowerLimit": [],
      "mainMetric": {},
      "meta": "",
      "metrics": [],
      "mode": true,
      "orientedLink": [],
      "positionParameter": {},
      "textObj": {}
    }
  ]
}

```


### Region coordonnées

The creation of a region from coordinates must necessarily contain the following values

- **id** is the id of the region. Working as a counter
- **mode** to false
- **Label** is the name of the region
- **idSVG** empty
- **coords** coordinates


```
{ "regions": [
    {
      "id": 1,
      "idSVG": "",
      "label": "PC",
      "colorMode": false,
      "coords": {
        "xMax": "50",
        "xMin": "-20",
        "yMax": "30",
        "yMin": "10"
      },
      "img": "",
      "linkURL": {},
      "lowerLimit": [],
      "mainMetric": {},
      "meta": "",
      "metrics": [],
      "mode": true,
      "orientedLink": [],
      "positionParameter": {},
      "textObj": {}
    }
  ]}

```



## lowerLimit


It is possible to choose between 2 color methods : 

- fixed color
- variable colour

### fixed color


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

  - **backColor** Fill in a color for the background under the form #7FFF00 for example
  - **borderColor**  Fill in a color for the border under the form #7FFF00 for example. 
  - **id**  color id
  - **lowerLimitMax**  Maximum value of the metric for this colour
  - **lowerLimitMin** Minimum metric value for this colour
  - **sizeBorder**  thickness of the border

### Variable colors

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

## img

This is the path representing a graphical representation 

Compatible format is JPG / PNG / GIF / SVG

```
      "img": "",
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


```

```

## metrics

 This is a metric table to add auxilary metrics.
 
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

## orientedLink

 - **orientedLink** :
      - **0**
        - **name** : Corresponds to the label or the name of the link
        - **Link orientation**: Choose "monodirectional" or "bidirectional".
        - **pointAPositionX** : Choose the horizontal position of point A between "-100" and "100".
        - **pointAPositionY** : Choose the vertical position of point A between "-100" and "100".
        - **colorCoordinateA**: Choose the color of the coordinate A
        - **pointBPositionX** : Choose the horizontal position of point B between "-100" and "100".
        - **pointBPositionY** : Choose the vertical position of point B between "-100" and "100".
        - **colorCoordinateB**: Choose the color of the coordinate B
        - **valueMainMetricA**: Value of the main Metric of point A
        - **valueMainMetricB**: Value of the main Metric of point B
        - **pointIn** : Name of the incoming point
        - **pointOut** : Name of the outgoing point
        - **regionIn** : Name of the incoming region 
        - **regionOut** : Name of the outgoing region
        - **zIndex**: The larger the number, the more the link will be highlighted on the image in terms of layer.
        - **pointCPositionX**: Choose the horizontal position of point A between "-100" and "100";
        - **pointCPpositionY** : Choose the horizontal position of point A between "-100" and "100";
        - **isIncurved** : Enter "true" if your link is curved. Otherwise, enter "false".
        - **mainMetricB** : Inform the metric of B
        - **metricsB**: Inform the metrics auxilière of B

```

```

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

## textObj

 - **textObj**
    - **colorBack**: Choose the background color of the text in rgba. Example: rgba(255, 255, 255, 0)
    - **colorText**: Choose the color of the text in rgba. Example : rgba(0, 0, 0, 1)
    - **generateAuxiliaryElement**: Allows to generate an auxiliary element 
        - **addColorBackElement**: Add a color to the background. "true" or "false"
        - **addColorTextElement**: Add a color to the text. "true or "false"
        - **colorBackElement**: Choose the background color
        - **colorTextElement** : Choose the color of the text 
        - **displayObjectInText**: Display the object in the text. "true" or "false"
        - **displayObjectPermanently**: Display the object permanently. "true" or false"
        - **legendElement** : Associate a legend to your element 
        - **numericFormatElement**: Allows to round the result of the Query
        - **unityMesureElement**: Displays a unit of measurement
    - **generateObjectText**: Generate a text object. "true" or "false"
    - **isTextRegion**: display text in the element or tooltip
    - **legend** : Allows to add a legend
    - **style**	
        - **bold** : "True" or "False" to put the text in bold.
        - **italic**: "True" or "False" to italicize text
        - **underline**: "True" or "False" to put the text in underline
    - **unit** : Allows to display a unit of measurement
    - **value**: Value of the object
    - **valueGenerateObjectText**: Use and fill in if generateObjectText is true when using the variable to store data.
        - **addColorBackElement**: Add a color to the background. "true" or "false"
        - **addColorTextElement**: Add a color to the text. "true or "false"
        - **colorBackElement**: Choose the background color
        - **colorTextElement** : Choose the color of the text 
        - **displayObjectInText**: Display the object in the text. "true" or "false"
        - **displayObjectPermanently**: Display the object permanently. "true" or false"
        - **legendElement** : Associate a legend to your element 
        - **numericFormatElement**: Allows to round the result of the Query
        - **unityMesureElement**: Displays a unit of measurement

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
