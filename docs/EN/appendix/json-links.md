# Fichier `links`

le script complet [sample-link.json](../../../demo/sample-link.json) est disponible, dont le détail de construction se trouve ci-dessous.


Le fichier **link** doit être déclaré sous la forme d'un fichier JSON comme ceci:

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
        "linkURL": { },
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


## meta

```

```

## metrics

```

```



## textObj

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

## mainMetric

```
"mainMetric": {
            "format": "",
            "key": "",
            "keyValue": "",
            "manageValue": "avg",
            "refId": "",
            "returnQuery": [],
            "unit": ""
        },
  
  
```

## mainMetric B

```
 "mainMetricB": {
            "format": "",
            "key": "",
            "keyValue": "",
            "manageValue": "avg",
            "refId": "",
            "returnQuery": [],
            "unit": ""
        },
        "metricsB": []
        
  
  
```


La refId


La cle `manageValue` peut avoir comme valeur : 

- avg
-
-

La clé `unit` correspond à l'unité


## positionParameter

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


## isIncurved

```

  "isIncurved": {
            "label": "No",
            "value": false
        },

```
        
        
## lowerLimit

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

## linkURL

```
 "linkURL": {
            "followLink": "",
            "hoveringTooltipLink": "",
            "hoveringTooltipText": ""
        },
    
```

## drawGraphicMarker

``` 


```

## Shape

```

    
```

## sizeHeight

```
 

```

## sizeWidth

```

    
```

## textObj

```


            
```

## orientationLink

```


 "orientationLink": {
            "label": "Monodirectional",
            "value": "AB"
        },
          
```


## traceBack

```
     "traceBack": true,

```

## traceBorder


```
      "traceBorder": false
```

## valueMetric


```
"valueMetric": ""

```

## pointIn / point Out

```

  "pointIn": "point2",

        "pointOut": "point1",
        
        
```
