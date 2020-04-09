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
        "xMax": "50",
        "xMin": "-20",
        "yMax": "30",
        "yMin": "10"
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

Avec :
  - **backColor**	: Renseigner une couleur sous la forme #7FFF00 par exemple pour la background
  - **borderColor** : Renseigner une couleur sous la forme #7FFF00 par exemple pour la bordure
  - **id** : id de la couleur
  - **lowerLimitMax** : Valeur maximume pour cette couleur
  - **lowerLimitMin** : Valeur minimal pour cette couleur
  - **sizeBorder** : epaisseur de la bordure

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
Avec de même :
  - **backColor**	: Renseigner une couleur sous la forme #7FFF00 par exemple pour la background
  - **borderColor** : Renseigner une couleur sous la forme #7FFF00 par exemple pour la bordure
  - **id** : id de la couleur
  - **lowerLimitMax** : Valeur maximume pour cette couleur
  - **lowerLimitMin** : Valeur minimal pour cette couleur
  - **sizeBorder** : epaisseur de la bordure

## img

il s'agit du chemin représentant une représentation graphique 

Le format compatible est JPG / PNG / GIF / SVG

```
      "img": "",
```

## linkURL

 - **linkURL** : Permet de rendre les regions cliquables 
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


## mainMetric

 - **mainMetric**	
    - **expr** : Expresison en PrompQL
    - **format** "" (Laisser vide)
    - **key** : permet de filtrer les données réçues par la Query pour ne garder que ce qui vous importe.
    - **keyValue** : permet de filtrer les données réçues par la Query pour ne garder que ce qui vous importe.
    - **manageValue** : Vous avez le choix entre "sum", "avg" ou "err"
    - **refId** : Référence de la metric associé a cette région
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

A FAIRE, Laisser vide pour le moment

```

```

## metrics

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

## orientedLink

 - **orientedLink** :
      - **0**
        - **name** : string;
        - **orientationLink** : Choisir "monodirectional" ou "bidirectional"
        - **pointAPositionX** : Choisir la position horizontal du point A entre "-100" et "100"
        - **pointAPositionY** : Choisir la position vertical du point A entre "-100" et "100"
        - **colorCoordinateA** : string;
        - **pointBPositionX** : Choisir la position horizontal du point B entre "-100" et "100"
        - **pointBPositionY** : Choisir la position vertical du point B entre "-100" et "100"
        - **colorCoordinateB** : string;
        - **valueMainMetricA** : string;
        - **valueMainMetricB** : string;
        - **pointIn** : string;
        - **pointOut** : string;
        - **regionIn** : string;
        - **regionOut** : string;
        - **zIndex** : number;
        - **pointCPositionX** : Choisir la position horizontal du point A entre "-100" et "100";
        - **pointCPositionY** : Choisir la position horizontal du point A entre "-100" et "100";
        - **isIncurved** : Saisir "true" si votre lien est incurvé. Sinon, saisir "false"
        - **mainMetricB** : Renseigner le metric de B
        - **metricsB** : Renseigner les metrics auxilière de B

```

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

## textObj

 - **textObj**
  - **colorBack** : Choisir la couleur du background du texte en rgba. Exemple : rgba(255, 255, 255, 0)
  - **colorText** : Choisir la couleur du texte en rgba. Exemple : rgba(0, 0, 0, 1)
  - **generateAuxiliaryElement** : Permet d'afficher 
      - **addColorBackElement** : Ajouter une couleur au background. "true" ou "false"
      - **addColorTextElement** : Ajouter une couleur au texte. "true ou "false"
      - **colorBackElement** : Choisir la couleur du background
      - **colorTextElement** :  Choisir la couelur du texte 
      - **displayObjectInText** : Afficher l'object dans le texte. "true" ou "false"
      - **displayObjectPermanently** : Afficher l'objet de facon permanente. "true" ou false"
      - **legendElement** : Associer une légende à votre élément 
      - **numericFormatElement** : élément de format numérique 
      - **unityMesureElement** : Affiche une unité de mesure
  - **generateObjectText** : Généré un objet texte. "true" ou "false"
  - **isTextRegion** : affichage du texte dans l'élément ou l'infobulle
  - **legend** : Permet d'ajouter une légende
  - **style**	
      - **bold** : "True" ou "False" pour mettre le texte en gras
      - **italic** : "True" ou "False" pour mettre le texte en italique
      - **underline** : "True" ou "False" pour mettre le texte en sousligné
  - **unit** : Permet d'afficher une unité de mesure
  - **value**	: Valeur de l'objet
  - **valueGenerateObjectText** : A utiliser et remplir si generateObjectText est true lors de l'utilisation de la variable pour stocker des données
      - **addColorBackElement** : Ajouter une couleur au background. "true" ou "false"
      - **addColorTextElement** : Ajouter une couleur au texte. "true ou "false"
      - **colorBackElement** : Choisir la couleur du background
      - **colorTextElement** :  Choisir la couelur du texte 
      - **displayObjectInText** : Afficher l'object dans le texte. "true" ou "false"
      - **displayObjectPermanently** : Afficher l'objet de facon permanente. "true" ou false"
      - **legendElement**	: Associer une légende à votre élément 
      - **numericFormatElement** : élément de format numérique 
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


