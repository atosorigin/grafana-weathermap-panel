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
## colorCoordinate A et B

- **colorCoordinateA** et **colorCoordinateB** : Choisissez la couleur des coordonnées A et B

```

    "colorCoordinateA": "black",
    "colorCoordinateB": "black",

```

## colorMode

- **colorMode** : TO DO

```
    "colorMode": false,

```

## id

- **id** : Choisissez l'id de votre lien

```
    "id": "1",

```
## mainMetric et mainMetricB

- **mainMetric**	
    - **format** "" (Laisser vide)
    - **key** : permet de filtrer les données réçues par la Query pour ne garder que ce qui vous importe.
    - **keyValue** : permet de filtrer les données réçues par la Query pour ne garder que ce qui vous importe.
    - **manageValue** : Vous avez le choix entre "sum", "avg" ou "err"
    - **refId** : Référence de la metric associé a cette région
    - **returnQuery** : Ne pas renseigner.      
    - **unit** : (Laisser vide)

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

## isIncurved

- **isIncurved** : Permettra de définir sur il y aura un troisième point pour faire une courbure	
    - **label** : Saisissez un label
    - **value** : Choisir si vous voulez une courbure ou non. "true" ou "false"

```

  "isIncurved": {
            "label": "No",
            "value": false
        },

```

## label/name

- **label** : Donne un label au lien
- **name** : DOnne un nom au lien

```

    "label": "lien1",
    "name": "réseau",
            
```

## linkURL

 - **linkURL**
    - **followLink** : Permet une redirection vers le lien renseigné en cliquant sur la region
    - **hoveringTooltipLink** : Permet une redirection vers le lien renseigné dans le tool type en cliquant sur le lien
    - **hoveringTooltipText** : Affiche le lien dans le tool type qui apparait quand on passe le curseur sur la zone ou sur le point

```
 "linkURL": {
            "followLink": "",
            "hoveringTooltipLink": "",
            "hoveringTooltipText": ""
        },
    
```
    
## lowerLimit


Il est possible de choisir entre 2 méthodes de couleur : 

- couleur fixe
- couleur variable

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


## meta

- **meta** : TO DO, Laisser vide pour le moment

```
    "meta": TO DO
```

## metrics et metricsB

 - **metrics** : Il s'agit d'un tableau de metric pour ajouter des metrics auxilières
    - **0**
        - **expr** : Expresison en PrompQL
        - **format** "" (Laisser vide)
        - **key** : permet de filtrer les données réçues par la Query pour ne garder que ce qui vous importe.
        - **keyValue** : permet de filtrer les données réçues par la Query pour ne garder que ce qui vous importe.
        - **manageValue** : Vous avez le choix entre "sum", "avg" ou "err"
        - **refId** : Référence de la metric associé a cette région
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

## orientationLink

  - **orientationLink**	
    - **label** : Choisissez un label pour l'orientation. (monodirectionel ou bidirectionel)
    - **value**	: Choisissez la valeur de l'orientation. Par exemple "AB".

```


 "orientationLink": {
            "label": "Monodirectional",
            "value": "AB"
        },
          
```

## point A/B/C Position X/Y

- **pointAPositionX** etc.. : Vous permet de placer vos points sur le tableau

```
    "pointAPositionX": "-14",
    "pointAPositionX": "-50",
    "pointBPositionX": "85",
    "pointBPositionX": "12",
    "pointCPositionX": "4",
    "pointCPositionX": "-24",

```

## pointIn / point Out

- **pointIn**: Indiquez le nom du point d'entrée. Par exemple "point2".
- **pointOut**: Indiquez le nom du point de sortie. Par exemple "point1".

```

    "pointIn": "point2",
    "pointOut": "point1",
        
        
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

## regionIn / regionOut

- **regionIn**: Indiquez le nom de la région d'entrée. Par exemple "région2".
- **regionOut**: Indiquez le nom de la région de sortie. Par exemple "région1".

```

    "pointIn": "region2",
    "pointOut": "region1",
        
```

## textObj

- **colorBack** : Choisir la couleur du background du texte en rgba. Exemple : rgba(255, 255, 255, 0)
    - **colorText** : Choisir la couleur du texte en rgba. Exemple : rgba(0, 0, 0, 1)
    - **generateAuxiliaryElement** : Permet de générer un élément auxiliaire 
        - **addColorBackElement** : Ajouter une couleur au background. "true" ou "false"
        - **addColorTextElement** : Ajouter une couleur au texte. "true ou "false"
        - **colorBackElement** : Choisir la couleur du background
        - **colorTextElement** :  Choisir la couelur du texte 
        - **displayObjectInText** : Afficher l'object dans le texte. "true" ou "false"
        - **legendElement** : Associer une légende à votre élément 
        - **numericFormatElement** : Permet d'arrondir le résultat de la query
        - **unit** : Affiche une unité de mesure
    - **generateObjectText** : Généré un objet texte. "true" ou "false"
    - **isTextRegion** : affichage du texte dans l'élément ou l'infobulle
    - **style**	
        - **bold** : "True" ou "False" pour mettre le texte en gras
        - **italic** : "True" ou "False" pour mettre le texte en italique
        - **underline** : "True" ou "False" pour mettre le texte en sousligné
    - **value**	: Valeur de l'objet
    - **valueGenerateObjectText**	
        - **addColorBackElement** : Ajouter une couleur au background. "true" ou "false"
        - **addColorTextElement** : Ajouter une couleur au texte. "true ou "false"
        - **colorBackElement** : Choisir la couleur du background
        - **colorTextElement** :  Choisir la couelur du texte 
        - **displayObjectInText** : Afficher l'object dans le texte. "true" ou "false"
        - **legendElement** : Associer une légende à votre élément 
        - **numericFormatElement** : Permet d'arrondir le résultat de la query
        - **unit** : Affiche une unité de mesure

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

 - **traceBack** : Permet d'associer une couleur au background. "true" ou "false"


```
     "traceBack": true,

```

## traceBorder

  - **traceBorder** : Permet d'associer une couleur à la bordure. "true" ou "false"

```
      "traceBorder": false
```


## valueMainMetric A/B

- **valueMainMetricA** et **valueMainMetricB** : Valeur de la Metric principale des points A et B

```
    "valueMainMetricA": TO DO,
    "valueMainMetricA": TO DO,

```

## zIndex

 - **zIndex**: Plus le nombre est grand, plus le lien sera mis en évidence sur l'image en termes de couche.

 ```
    "zIndex": "5",

```
