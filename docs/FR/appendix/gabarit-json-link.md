# Gabarit file

[![](../../screenshots/other/Go-back.png)](README.md)

Le script complet [gabarit-link.json](../../resource/sampleJson/gabarit-link.json) est disponible, dont les détails de construction se trouvent ci-dessous.


## Structure

Le fichier **gabarit liens** doit être déclaré comme un fichier JSON comme ceci :


```
     {
        "filtered": "device|ens3",
        "labelfix": true,
        "xylabelA": "x|quantile#y|quantile",
        "xylabelB": "x|quantile#y|quantile",
        "xylabelC": "x|quantile#y|quantile",
        "xylabelfixA": "x|-70#y|66",
        "xylabelfixB": "x|10#y|60",
        "xylabelfixC": "x|0#y|0",
        "type": "link",
        "name": "unLink",
        "meta": [],
        "label": "lien device",
        "positionParameter": {},
        "mainMetric": {},
        "metrics": [],
        "mainMetricB": {},
        "metricsB": [],
        "linkURL": {},
        "orientationLink": {},
        "size": "9",
        "colorCoordinateA": "#5794F2",
        "colorCoordinateB": "#E54658",
        "valueMainMetricA": "",
        "valueMainMetricB": "",
        "pointIn": "",
        "pointOut": "",
        "regionIn": "",
        "regionOut": "",
        "isIncurved": {},
        "zIndex": "2",
        "color": "black"
      },
```



## Type

- **type** : link


```
        "type": "link",
```


## Label

- **Label** - **label** est le label du lien

```
        "label": "label",
```

## Name

- **Name** est le nom du lien

```
        "Name": "orientedLink1",
```




## Filter

- **filtered** un ou plusieurs filtres construisent des clés/valeurs : key|value[#key|value][#key|value]

```
        "filtered": "quantile|0.5",
```


## Link position

Il y a deux façons de créer une région :

- Position Variable label
- Position Fixe label


### variable label position

- **labelfix** à false
- **xylabelA** coordonné avec  : x|<labelName>#y|<labelName>
- **xylabelB** coordonné avec : x|<labelName>#y|<labelName>
- **xylabelC** coordonné avec : x|<labelName>#y|<labelName>


```
    "xylabelA": "x|labelName#y|labelName",
    "xylabelB": "x|labelName#y|labelName",
    "xylabelC": "x|labelName#y|labelName",

```


### fixed label position

- **labelfix** à true
- **xylabelfixA** coordonné avec : x|<value>#y|<value>
- **xylabelfixB** coordonné avec : x|<value>#y|<value>
- **xylabelfixC** coordonné avec : x|<value>#y|<value>

```
      "xylabelfixA": "x|0#y|0",
      "xylabelfixB": "x|250#y|50",
      "xylabelfixC": "x|290#y|290",

```


## Meta


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
          "obj": {
            "colorText": "string",
            "colorBack": "string",
            "bold": true,
            "italic": true,
            "underline": true
            }
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

## Metrics et MetricsB

Vide

## mainMetric et mainMetricB

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

## orientationLink

- **Link orientation**
   - **lavel**: choisissez une étiquette pour l'orientation. (monodirectionnel ou bidirectionnel ou nodirectionnel)
   - **value**: choisissez la valeur de l'orientation. Par exemple "AB".

```


 "orientationLink": {
            "label": "Monodirectional",
            "value": "AB"
        },

```




## size

- **size** : Choisissez une valeur pour la taille de la largeur

```
 "size": "12",

```



## colorCoordinate A and B

- **colorCoordinateA** et **colorCoordinateB** : Choisissez la couleur des coordonnées A et B

```

    "colorCoordinateA": "#5794F2",
    "colorCoordinateB": "#E54658",

```


## valueMainMetric A/B

- **valueMainMetricA** et **valueMainMetricB** : Valeur de la métrique principale des points A et B

```
    "valueMainMetricA": "50",
    "valueMainMetricB": "30",

```

## pointIn / point Out

- **pointIn**: Remplissez le nom du point entrant. Par exemple "point2".
- **pointOut**: Remplissez le nom du point de sortie. Par exemple "point1

```

    "pointIn": "point2",
    "pointOut": "point1",


```


## regionIn / regionOut

- **regionIn**: Remplissez le nom de la région entrante. Par exemple "region2".
- **regionOut**: Remplissez le nom de la région sortante. Par exemple "region1".

```

    "regionIn": "region2",
    "regionOut": "region1",

```


## isIncurved

- **isIncurved** : Permettra de définir sur il y aura un troisième point pour faire une courbure
   - **label**: saisissez un libellé
   - **value**: choisissez si vous voulez une courbure ou non. "true" or "false"
   

```

  "isIncurved": {
            "label": "No",
            "value": false
        },

```

## color

- **color** : Vous permet de choisir une couleur pour le point

```
    "color": "red",
```

