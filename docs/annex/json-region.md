# Fichier `region`

Le fichier **region** doit être déclaré sous la forme d'un fichier JSON comme ceci:

```

{ "regions": [

]}

```


## Region SVG

La création d'une région à partir d'un élément SVG doit contenir obligatoirement les valeurs suivantes

- **ID** est un compteur
- **Label** est nom de la région
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


## Region coordonnées

La création d'une région à partir de coordonnées doit contenir obligatoirement les valeurs suivantes

- **ID** est un compteur
- **mode** à false
- **Label** est nom de la région
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

## ID

La valeur **ID** est un compteur



## lowerLimit (Champ obligatoire)

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
      "refId": "A",
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
      "colorBack": "#5794F2",
      "colorText": "rgba(0, 0, 0, 1)",
      "generateAuxiliaryElement": {
        "addColorBackElement": true,
        "addColorTextElement": true,
        "colorBackElement": "#8F3BB8",
        "colorTextElement": "#FF9830",
        "displayObjectInText": true,
        "legendElement": "other legend",
        "numericFormatElement": "10",
        "unit": "er"
      },
      "generateObjectText": true,
      "isTextRegion": false,
      "styleText": "italic",
      "value": "",
      "valueGenerateObjectText": {
        "addColorBackElement": true,
        "addColorTextElement": true,
        "colorBackElement": "#1F60C4",
        "colorTextElement": "#F2495C",
        "displayObjectInText": true,
        "legendElement": "une légende",
        "numericFormatElement": "",
        "unit": "em"
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




