# Gabarit file

[![](../../screenshots/other/Go-back.png)](README.md)


Le script complet [gabarit-point.json](../../resource/sampleJson/gabarit-point.json) est disponible, dont les détails de construction se trouvent ci-dessous.


## structure

Le fichier **gabarit point** doit être déclaré comme un fichier JSON comme ceci :


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
        "rotateArrow": {},
        "positionShapeX": "",
        "positionShapeY": "",
        "color": "green",
        "assiciateOrientedLinksIn": [],
        "associateOrientedLinksOut": []
      },
```



## Type

- **type** : point


```
        "type": "point",
```


## Label

- **Label** - **label** est le label de point

```
        "label": "label",
```

## Name

- **Name** est le nom du point

```
        "Name": "point1",
```




## Filter

- **filtered** un ou plusieurs filtres construisent des clés/valeurs : key|value[#key|value][#key|value]

```
        "filtered": "quantile|0.5#slice|inner_eval",
```


## Position point


Il y a deux façons de créer une région :

- Position Variable label
- Position Fixe label


### Position variable label

- **labelfix** à false
- **xylabel** coordonné avec : x|<labelName>#y|<labelName>


```
    "xylabel": "x|labelName#y|labelName",

```


### Position fixe label

- **labelfix** à true
- **xylabelfix** coordonné avec : x|<value>#y|<value>


```
    "xylabelfix": "x|243#y|57"

```


## meta

- **meta** message
- **colorText**: Choisir la couleur du texte en rgba. Exemple : rgba(0, 0, 0, 1)
- **colorBack**: Choisissez la couleur de fond du texte dans rgba. Exemple: rgba(255, 255, 255, 0)
- **bold** Ajoutez un gras au texte. "true ou "false"
- **italic** Ajoutez une italique au texte. "true ou "false"
- **underline** Ajouter un soulignement au texte. "true ou "false"


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


## positionParameter

- **positionParameter**

  - **xylabelA** : Choisissez la position horizontale X et Y de l'étiquette A
  - **xylabelB** : Choisissez la position horizontale X et Y de l'étiquette B
  - **tooltipA** : Tooltip A position
  - **tooltipB** : Tooltip B position

```
        "positionParameter": {
          "xylabelA": "x|0#y|0",
          "xylabelB": "x|0#y|0",
          "tooltipA": "Bottom",
          "tooltipB": "Bottom"
        },
```


## mainMetric

  - **format** "" (Laisser vide)
  - **key** : Correspond à une clef associée à la métrique
  - **keyValue** : Vous permet de filtrer les données reçues par la Query en renseignant la valeur de la clef associée à la métrique
  - **manageValue** : Vous avez le choix entre "sum", "avg" ou "err"

```
        "mainMetric": {
          "format": "",
          "key": "",
          "keyValue": "",
          "manageValue": "avg"
        },
```

## Metrics

Vide

## linkURL

  - **followLink** : Vous permet une redirection vers le lien renseigné en cliquant sur la région
  - **hoveringTooltipLink** : Vous permet une redirection vers le lien renseigné dans le tool type en cliquant sur le lien
  - **hoveringTooltipText** : Affiche le lien dans le tool type qui apparaît quand on passe le curseur sur la région


```
"linkURL": {
  "followLink": "",
  "hoveringTooltipLink": "",
  "hoveringTooltipText": ""
},

```

## ValueMetric

Vide

## drawGraphicMarker

- **drawGraphicMarker**
  - **label** : Choisir un label.
  - **value**: Choisir une une valeur. "true" ou "false"

```
    "drawGraphicMarker": {
                "label": "Yes",
                "value": "true"
            },

```

## Shape

- **shape**: Permet de définir une forme pour le point
  - **label** : Choisissez un label pour la forme
  - **value**: Choisissez une valeur pour la forme

```
    "shape": {
                "label": "Circle",
                "value": "circle"
            },

```


## sizeWidth

- **sizeWidth** : Choisissez une valeur pour la taille de la largeur

```
 "sizeWidth": "12",

```

## rotateArrow

- **rotateArrow** : Choisissez la rotation de la flèche

```
    "rotateArrow": {
        "label": "",
        "value": ""
      },
```

## positionShape X/Y

- **positionShapeX** et **positionShapeY** : Position de la forme du point

```
    "positionShapeX": "100",
    "positionShapeY": "60",
```

## color

- **color** : Vous permet de choisir une couleur pour le point

```
    "color": "red",
```


## associateOrientedLinks In/Out

- **associateOrientedLinksIn/Out** : Remplissez le lien qui commence / se termine à ce stade
   - label: vous pouvez choisir un label pour cette association
   - nom: choisissez le nom unique de cette association

```
      "associateOrientedLinksOut": [
        {
          "label": "lien device",
          "name": "orientedLink2"
        }
      ],
      "associateOrientedLinksOut": [
        {
          "label": "lien device",
          "name": "orientedLink1"
        }
      ]
```

      
      
