# Fichier `region`

le script complet [sample-region.json](../../../demo/sample-region.json) est disponible, dont le détail de construction se trouve ci-dessous.


Le fichier **region** doit être déclaré sous la forme d'un fichier JSON comme ceci:

```

{ "regions": [

]}

```


## Région

Il existe 2 façons de créer une région : 

- Région SVG
- Région coordonnées

### Region SVG

La création d'une région à partir d'un élément SVG doit contenir obligatoirement les valeurs suivantes

- **ID** est un compteur
- **Label** est nom de la région
- **mode** à true
- **idSVG** à nom de l'ID de l'événement

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

La création d'une région à partir de coordonnées doit contenir obligatoirement les valeurs suivantes

- **id** est un compteur
- **mode** à false
- **Label** est nom de la région
- **idSVG** à vide
- **coords** les coordonnées


```
{ "regions": [
    {
      "id": 1,
      "idSVG": "",
      "label": "PC",
      "colorMode": false,
      "coords": {
        "xMax": "0",
        "xMin": "0",
        "yMax": "0",
        "yMin": "0"
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

il est possible de changer choisir 2 méthodes de couleurs : 

- couleur fixe
- couleur variable

### Couleur fixe


Si `colorMode` est à False

```
"colorMode": false,
```

Alors La couleur sera définit comme ceci

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

### Couleur variable

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



## img

il s'agit du chemin représentant une représentation graphique 

Le format compatible est JPG / PNG / GIF / SVG

```
      "img": "",
```

## linkURL

Il s'agit de rendre des régions cliquables


```
"linkURL": {
  "followLink": "",
  "hoveringTooltipLink": "",
  "hoveringTooltipText": ""
},

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

## meta

```

```

## metrics

```

```

## orientedLink

```

```

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

## textObj

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

```
     "traceBack": true,

```

## traceBorder


```
      "traceBorder": false
```


