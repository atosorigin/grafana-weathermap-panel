# Fichier `point`
[![](../../screenshots/other/Go-back.png)](README.md)

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


## associateOrientedLinks In/Out

- **associateOrientedLinksIn/Out** : Renseignez le lien qui commence/termine à ce point
  - label : Vous pouvez choisir un label pour cette association
  - nom : Choisissez le nom unique de cette association


```
"associateOrientedLinksIn":{ 
    "label": "A", 
    "name":"orientedLink1"
}
"associateOrientedLinksOut":{ 
    "label": "B", 
    "name":"orientedLink2"
}
```
## color

- **color** : Vous permet de choisir une couleur pour le point

```
    "color": "red",
```

## colorMode

- **colorMode** : "true" si vous voulez utiliser différentes couleurs pour ce point. "false" si vous voulez une couleur unique.

```
    "colorMode": false,
```


## drawGraphicMarker

- **drawGraphicMarker**	
    - **label** : Choisissez un label
    - **value**: Choisissez une valeur. "true" ou "false"

``` 
"drawGraphicMarker": {
                "label": "Yes",
                "value": "true"
            },

```

## id

- **id** : Choisissez l'id de votre point
```
    "id": 1,
```


## label

- **id** : Choisissez le label de votre point

```
    "label": "label1",
```

## linkURL

 - **linkURL** : Permet de rendre les régions cliquables 
    - **followLink** : Permet une redirection vers le lien renseigné en cliquant sur la région
    - **hoveringTooltipLink** : Permet une redirection vers le lien renseigné dans le tool type en cliquant sur le lien
    - **hoveringTooltipText** : Affiche le lien dans le tool type qui apparaît quand on passe le curseur sur la zone ou sur le point


```
"linkURL": {
  "followLink": "",
  "hoveringTooltipLink": "",
  "hoveringTooltipText": ""
},

```

## lowerLimit


Il est possible de choisir entre 2 méthodes de couleur : 

- Couleur fixe
- Couleur variable

### Couleur fixe


Si "colorMode" est "false"

```
"colorMode": false,
```

La couleur sera alors définie comme suit

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

Avec :

  - **backColor**: Choisissez une couleur pour le background sous la forme #7FFF00 par exemple
  - **borderColor** : Choisissez une couleur pour la bordure sous la forme #7FFF00 par exemple
  - **id** : id de la couleur
  - **lowerLimitMax** : Valeur maximale de la métrique pour cette couleur
  - **lowerLimitMin**: Valeur minimale de la métrique pour cette couleur
  - **sizeBorder** : Épaisseur de la frontière

### Couleur variable

Les couleurs variables vous permettent de changer la couleur en fonction de plages définies.

Si `colorMode` est "true"

```
"colorMode": true,
```

La couleur sera alors définie comme suit

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
Avec de même :

  - **backColor**: Choisissez une couleur pour le background sous la forme #7FFF00 par exemple
  - **borderColor** : Choisissez une couleur pour la bordure sous la forme #7FFF00 par exemple
  - **id** : id de la couleur
  - **lowerLimitMax** : Valeur maximale de la métrique pour cette couleur
  - **lowerLimitMin**: Valeur minimale de la métrique pour cette couleur
  - **sizeBorder** : Épaisseur de la frontière

## mainMetric

 - **mainMetric**	
    - **expr** : Expresison en PrompQL
    - **format** "" (Laisser vide)
    - **key** : Correspond à une clef associée à la métrique
    - **keyValue** : Permet de filtrer les données reçues par la Query en renseignant la valeur de la clef associée à la métrique
    - **manageValue** : Vous avez le choix entre "sum", "avg" ou "err"
    - **refId** : Référence de la métrique associé à cette région
    - **returnQuery** : Ne pas renseigner.      
    - **unit** : (Laisser vide)

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

pas de valeurs

## metrics

 - **metrics** : Il s'agit d'un tableau de métrique pour ajouter des métriques auxilières
    - **0**
        - **expr** : Expresison en PrompQL
        - **format** "" (Laisser vide)
        - **key** : Correspond à une clef associée à la métrique
        - **keyValue** : Vous permet de filtrer les données reçues par la Query en renseignant la valeur de la clef associée à la métrique
        - **manageValue** : Vous avez le choix entre "sum", "avg" ou "err"
        - **refId** : Référence de la métrique associé à cette région
        - **returnQuery** : Ne pas renseigner.      
        - **unit** : (Laisser vide)
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

- **name** : Choisissez le nom de votre point
```
    "name": "point1",
```
## positionParameter

- **positionParameter**
    - **labelAPositionX** : Choisir la position horizontal du label A entre "-100" et "100"
    - **labelAPositionY** : Choisir la position vertical du label A entre "-100" et "100"
    - **labelBPositionX** : Choisir la position horizontal du label B entre "-100" et "100"
    - **labelBPositionY** : Choisir la position vertical du label B entre "-100" et "100"
    - **tooltipPositionA** : Position du tooltip A
    - **tooltipPositionB** : Position du tooltip B

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

- **positionShape X** et **positionShapeY** : Choisissez où vous voulez placer le point sur le tableau

```
    "positionShapeX": "-60",
    "positionShapeY": "60",
```




## rotateArrow

- **rotateArrow** : Choisissez la rotation de la flèche
```
    "rotateArrow": "0",
```

## Shape

- **shape**: Permet de définir une forme pour le point	
    - **label** : Choisissez un label pour la forme
    - **value**: Choisissez une valeur pour la forme
    

```
"shape": {
                "label": "circle",
                "value": "circle"
            },
    
```

## sizeHeight

- **sizeHeight**	
    - **label** : Choisissez un label pour la taille de la hauteur
    - **value**: Choisissez une valeur pour la taille de la hauteur
  

```
     "sizeHeight": {
                "label": "Medium",
                "value": "medium"
            },  

```

## sizeWidth

- **sizeWidth**	
    - **label** : Choisissez un label pour la taille de la largeur
    - **value**: Choisissez une valeur pour la taille de la largeur

```
 "sizeWidth": {
                "label": "Medium",
                "value": "medium"
            },
    
```
## textObj

 - **textObj**
  - **colorBack** : Choisir la couleur du background du texte en rgba. Exemple : rgba(255, 255, 255, 0)
  - **colorText** : Choisir la couleur du texte en rgba. Exemple : rgba(0, 0, 0, 1)
  - **generateAuxiliaryElement** : Permet de générer un élément auxiliaire 
      - **addColorBackElement** : Ajouter une couleur au background. "true" ou "false"
      - **addColorTextElement** : Ajouter une couleur au texte. "true ou "false"
      - **colorBackElement** : Choisir la couleur du background
      - **colorTextElement** :  Choisir la couleur du texte 
      - **displayObjectInText** : Afficher l'objet dans le texte. "true" ou "false"
      - **displayObjectPermanently** : Afficher l'objet de facon permanente. "true" ou false"
      - **legendElement** : Associer une légende à votre élément 
      - **numericFormatElement** : Permet d'arrondir le résultat de la query
      - **unityMesureElement** : Affiche une unité de mesure
  - **generateObjectText** : Généré un objet texte. "true" ou "false"
  - **isTextRegion** : Affichage du texte dans l'élément ou l'infobulle
  - **legend** : Permet d'ajouter une légende
  - **style**	
      - **bold** : "True" ou "False" pour mettre le texte en gras
      - **italic** : "True" ou "False" pour mettre le texte en italique
      - **underline** : "True" ou "False" pour mettre le texte en souligné
  - **unit** : Permet d'afficher une unité de mesure
  - **value**	: Valeur de l'objet
  - **valueGenerateObjectText** : A utiliser et remplir si generateObjectText est true lors de l'utilisation de la variable pour stocker des données
      - **addColorBackElement** : Ajouter une couleur au background. "true" ou "false"
      - **addColorTextElement** : Ajouter une couleur au texte. "true ou "false"
      - **colorBackElement** : Choisir la couleur du background
      - **colorTextElement** :  Choisir la couleur du texte 
      - **displayObjectInText** : Afficher l'objet dans le texte. "true" ou "false"
      - **displayObjectPermanently** : Afficher l'objet de façon permanente. "true" ou false"
      - **legendElement**	: Associer une légende à votre élément 
      - **numericFormatElement** : Permet d'arrondir le résultat de la query
      - **unityMesureElement**: Affiche une unité de mesure

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

 - **traceBack** : Permet d'associer une couleur au background. "true" ou "false"


```
     "traceBack": true,

```

## traceBorder

  - **traceBorder** : Permet d'associer une couleur à la bordure. "true" ou "false"

```
      "traceBorder": false
```




## valueMetric

- **valueMetric** : Définir la valeur de la métrique

```
"valueMetric": ""

```
