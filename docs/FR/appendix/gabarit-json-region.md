# Gabarit Region

[![](../../screenshots/other/Go-back.png)](README.md)

Le script complet [gabarit-region.json](../../resource/sampleJson/gabarit-region.json) est disponible, dont les détails de construction se trouvent ci-dessous.


## Structure

Le fichier **gabarit region** doit être déclaré comme un fichier JSON comme ceci :


```
      {
        "filtered": "",
        "labelfix": "false",
        "xylabel": "",
        "xylabelfix": "",
        "type": "region",
        "meta": [],
        "label": "",
        "positionParameter": {},
        "mainMetric": {},
        "metrics": [],
        "linkURL": {},
        "idSVG": "",
        "mode": "true",
        "img": "",
        "orientedLink": [],
        "color": "black"
      }
```

## Type

- **type** : region


```
        "type": "region",
```


## Label

- **Label** est le label de la région

```
        "label": "0.5-inner_eval",
```



## Filter

- **filtered** un ou plusieurs filtres construisent des clés/valeurs : key|value[#key|value][#key|value]

```
        "filtered": "quantile|0.5#slice|inner_eval",
```


## Region

Il y a deux façons de créer une région :

- Région SVG
- Région Coordonnée


### Region SVG

La création d'une région à partir d'un élément SVG doit contenir les valeurs suivantes


- **labelfix** à false
- **xylabel** coordonnées avec : xMin|<value>#xMax|<value>#yMin|<value>#yMax|<value>
- **idSVG** est l'identifiant de la zone SVG souhaitée comme région
- **mode** à true

```
    "xylabel": "xMin|labelName#xMax|labelName#yMin|labelName#yMax|labelName",

```

### Région coordonnée

La création d'une région à partir de coordonnées doit nécessairement contenir les valeurs suivantes

- **labelfix** à true
- **idSVG** vide
- **xylabelfix** coordonnées avec : xMin|<value>#xMax|<value>#yMin|<value>#yMax|<value>
- **mode** à false


```
    "xylabelfix": "xMin|labelName#xMax|labelName#yMin|labelName#yMax|labelName"

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
          "colorText": "string",
          "colorBack": "string",
          "bold": "true",
          "italic": "true",
          "underline": "true"
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

## metrics

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

## img

Il s'agit du chemin représentant une représentation graphique

Le format compatible est JPG / PNG / GIF / SVG

```
      "img": "",
```

## orientedLink

Remplissez le lien qui commence à partir de la région

   - label: vous pouvez choisir un label pour cette association
   - nom: choisissez le nom unique de cette association

```
        {
          "label": "lien device",
          "name": "orientedLink1"
        }
```

