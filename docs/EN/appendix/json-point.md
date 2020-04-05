# Fichier `point`

le script complet [sample-point.json](../../../demo/sample-point.json) est disponible, dont le détail de construction se trouve ci-dessous.


Le fichier **point** doit être déclaré sous la forme d'un fichier JSON comme ceci:

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


## meta

```

```

## metrics

```

```



## textObj

```


```

## mainMetric

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
"drawGraphicMarker": {
                "label": "Yes",
                "value": "true"
            },

```

## Shape

```
"shape": {
                "label": "Circle",
                "value": "circle"
            },
    
```

## sizeHeight

```
     "sizeHeight": {
                "label": "Medium",
                "value": "medium"
            },  

```

## sizeWidth

```
 "sizeWidth": {
                "label": "Medium",
                "value": "medium"
            },
    
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
