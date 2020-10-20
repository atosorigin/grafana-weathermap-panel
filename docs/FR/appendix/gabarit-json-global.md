# Gabarit file

[![](../../screenshots/other/Go-back.png)](README.md)


Le script complet [gabarit-default.json](../../resource/sampleJson/gabarit-default.json) est disponible, dont les détails de construction se trouvent ci-dessous.

## global

la structure de la partie **global** se décompose de la manière suivante :

```
  "global": {
    "lowerLimit": [],
    "textObject": {},
      "generateObjectText": "true",
      "valueGenerateObjectText": {},
      "generateAuxiliaryElement": {}
    },
    "colorMode": "false",
    "traceBack": "true",
    "traceBorder": "true"
}
```

## lowerLimit

Il est possible de choisir entre 2 méthodes de couleurs :

- couleur fixe
- couleur variable

### fixed color

Si `colorMode` est à false

```
"colorMode": false,
```

Alors La couleur sera définit comme ceci

```
"lowerLimit": [
        {
        "id": 0,
        "lowerLimitMin": "",
        "lowerLimitMax": "",
        "backColor": "black",
        "borderColor": "black",
        "sizeBorder": "2"
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

- **backColor**: Choisissez une couleur pour le background sous la forme #7FFF00 par exemple
- **borderColor** : Choisissez une couleur pour la bordure sous la forme #7FFF00 par exemple
- **id** : id de la couleur
- **lowerLimitMax** : Valeur maximale de la métrique pour cette couleur
- **lowerLimitMin**: Valeur minimale de la métrique pour cette couleur
- **sizeBorder** : Épaisseur de la frontière

## textObject

- **colorBack** : Choisir la couleur du background du texte en rgba. Exemple : rgba(255, 255, 255, 0)
- **colorText** : Choisir la couleur du texte en rgba. Exemple : rgba(0, 0, 0, 1)
- **generateAuxiliaryElement** : Permet de générer un élément auxiliaire
  - **addColorBackElement** : Ajouter une couleur au background. "true" ou "false"
  - **addColorTextElement** : Ajouter une couleur au texte. "true ou "false"
  - **colorBackElement** : Choisir la couleur du background
  - **colorTextElement** : Choisir la couleur du texte
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
  - **underline** : "True" ou "False" pour mettre le texte en sousligné
- **unit** : Permet d'afficher une unité de mesure
- **value** : Valeur de l'objet
- **valueGenerateObjectText** : A utiliser et remplir si generateObjectText est true lors de l'utilisation de la variable pour stocker des données
  - **addColorBackElement** : Ajouter une couleur au background. "true" ou "false"
  - **addColorTextElement** : Ajouter une couleur au texte. "true ou "false"
  - **colorBackElement** : Choisir la couleur du background
  - **colorTextElement** : Choisir la couleur du texte
  - **displayObjectInText** : Afficher l'objet dans le texte. "true" ou "false"
  - **displayObjectPermanently** : Afficher l'objet de façon permanente. "true" ou false"
  - **legendElement** : Associer une légende à votre élément
  - **numericFormatElement** : Permet d'arrondir le résultat de la query
  - **unityMesureElement**: Affiche une unité de mesure

```  
  "textObject": {
      "value": "",
      "isTextTooltip": "false",
      "colorBack": "red",
      "colorText": "white",
      "style": {
        "bold": "true",
        "italic": "false",
        "underline": "false"
      },
      "generateObjectText": "true",
      "valueGenerateObjectText": {
        "legendElement": "uneLegend",
        "numericFormatElement": "2",
        "unit": "Hz",
        "displayObjectInTooltip": "true",
        "addColorTextElement": "false",
        "addColorBackElement": "false",
        "colorTextElement": "",
        "colorBackElement": ""
      },
      "generateAuxiliaryElement": {
        "legendElement": "uneLegend",
        "numericFormatElement": "?",
        "unit": "Hz",
        "displayObjectInTooltip": "true",
        "addColorTextElement": "true",
        "addColorBackElement": "true",
        "colorTextElement": "#000000",
        "colorBackElement": "#FFFFFF"
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
