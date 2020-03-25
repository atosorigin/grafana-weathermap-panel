# Création des fichiers json


## Structure d'un fichier JSON




## Fichier `region`

Le fichier **region** doit être déclaré sous la forme d'un fichier JSON comme ceci:

```

{ "regions": [

]}

```


### Region SVG

La définition d'une région à partir d'un élément SVG doit contenir obligatoirement les valeurs suivantes

- **ID** est un compteur
- **mode** à true
- **idSVG** à nom de l'ID de l'événement

```

{ "regions": [
    {
      "id": 1,
      "mode": true,
      "label": "NameLabel",
      "coords": {},
      "idSVG": "idSVG",
      "img": "",
      "linkURL": {},
      "colorMode": false,
      "lowerLimit": [],
      "mainMetric": {},
      "meta": "",
      "metrics": [],
      "orientedLink": [],
      "positionParameter": {},
      "textObj": {},
      "traceBack": true,
      "traceBorder": false
    }
  ]
}

```


### Region coordonnées

La définition d'une région à partir de coordonnées doit contenir obligatoirement les valeurs suivantes

- **ID** est un compteur
- **mode** à false
- **idSVG** à vide
- **coords** les coordonnées


```
{ "regions": [
    {
      "id": 1,
      "mode": false,
      "label": "zone1",
      "coords": {
          "xMax": "0",
          "xMin": "0",
          "yMax": "0",
          "yMin": "0"
      },
      "idSVG": "",
      "img": "",
      "linkURL": {},
      "colorMode": false,
      "lowerLimit": [],
      "mainMetric": {},
      "meta": "",
      "metrics": [],
      "orientedLink": [],
      "positionParameter": {},
      "textObj": {},
      "traceBack": true,
      "traceBorder": false
    }
  ]}
```

### clé


#### lowerLimit (Champ obligatoire)


##### Couleur fixe


Si `colorMode` est à False

```
"colorMode": false,
```

Alors La couleur sera définit comme ceci

```
"lowerLimit": [
  "borderColor": "",
  {
    "backColor": "#FF0000",
    "id": 0,
    "lowerLimitMax": "",
    "lowerLimitMin": "",
    "sizeBorder": "1"
  }
],

```

##### Couleur variable

les couleurs variables permettent de changer la couleur suivant des tranches définis.

Si `colorMode` est à True

```
"colorMode": true,
```

Alors La couleur sera définit comme ceci

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



#### img

```
      "img": "",
```

#### linkURL

```
"linkURL": {
  "followLink": "",
  "hoveringTooltipLink": "",
  "hoveringTooltipText": ""
},

```




#### mainMetric

```

```

#### meta

```

```

#### metrics

```

```

#### orientedLink

```

```

#### positionParameter

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

#### textObj

```
"textObj": {
   "addColorBackElement": false,
   "addColorTextElement": false,
   "colorBack": "rgba(255, 255, 255, 0)",
   "colorBackElement": "",
   "colorText": "rgba(0, 0, 0, 1)",
   "colorTextElement": "",
   "displayObjectInText": false,
   "displayObjectPermanently": false,
   "generateObjectText": false,
   "isTextRegion": false,
   "legend": "",
   "legendElement": "",
   "numericFormatElement": "",
   "styleText": "",
   "unit": "",
   "unityMesureElement": "",
   "value": ""
 },
```

#### traceBack

```
     "traceBack": true,

```

#### traceBorder


```
      "traceBorder": false
```






## Fichier `point`

Le fichier **point** doit être déclaré sous la forme d'un fichier JSON comme ceci:

```
{  "points": [

]}

```

### Structure


```
{
    "points": [{
            "id":1,
            "name":"point1",            
            "linkURL": {},
            "label":"",  
            "meta":"",
            "lowerLimit":[],
            "textObj": {},
            "mainMetric": {},
            "metrics":[],
            "colorMode":false,
            "traceBack":false,
            "traceBorder":false,
            "positionParameter": {},
            "valueMetric":"",
            "coordinateSpace": {},
            "drawGraphicMarker": {},
            "shape": {}
        ]
}
```

### clef


#### meta

```
"meta":"",
```

#### textObj

```
"textObj": {
    "legend":"",
    "value":"",
    "unit":"",
    "isTextRegion":false,
    "colorBack":"",
    "colorText":"",
    "styleText":"",
    "generateObjectText":false,
    "legendElement":"",
    "numericFormatElement":"",
    "unityMesureElement":"",
    "displayObjectInText":false,
    "displayObjectPermanently":false,
    "addColorTextElement":false,
    "colorTextElement":"",
    "addColorBackElement":false,
    "colorBackElement":""
},
```

#### mainMetric

```
"mainMetric": {
    "key":"",
    "unit":"",
    "format":"",
    "keyValue":"",
    "refId":"",
    "returnQuery": {
        "fields":[],
        "length":0
    }
},
```

#### positionParameter

```
"positionParameter": {
    "labelPositionX":"0",
    "labelPositionY":"0",
    "tooltipPositionA": {},
    "tooltipPositionB":{}
},
```


#### lowerLimit

```
"lowerLimit":[],
```

#### linkURL

```
"linkURL": {
    "followLink":"",
    "hoveringTooltipLink":"",
    "hoveringTooltipText":""
},
```

#### drawGraphicMarker

```
"drawGraphicMarker": {
    "label":"Yes",
    "value":"true"
},
```

#### Shape

```
"shape": {
    "label":"Circle",
    "value":"circle"},
    "sizeWidth": {
        "label":"Small",
        "value":"small"
    },
    "sizeHeight": {
        "label":"Small",
        "value":"small"
    },
    "rotateArrow":"0",
    "positionShapeX":"-68",
    "positionShapeY":"76",
    "color":"black",
    "associateLinkIn":[],
    "associateLinkOut":[],
    "associateOrientedLinksIn":[],
    "associateOrientedLinksOut":[]
}

```




## création d'un fichier `liens`

```
{
    "points": [
      ]
}

```


### Structure


```


```



### clef


```


```
