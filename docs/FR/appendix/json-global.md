# Global file

[![](../../screenshots/other/Go-back.png)](README.md)

Le script complet [sample-global.json](../../../../demo/sample-global.json) est disponible, avec les détails de construction ci-dessous.

Le fichier **global** doit être déclaré comme un fichier JSON comme ceci :

```

{

}

```

## Structure

```
{
    "coordinateSpaceInitial": {},
    "texteSettings": {},
    "baseMap": {},
    "regions": [],
    "points": [],
    "links": []
}

```

## coordinateSpaceInitial

- **coordinateSpaceInitial**
  - **coordinate** : Vous permet de redimensionner votre espace de travail. Les axes X et Y allant de -100% à plus 100%.
  - **displayArea** : Saisir "true" ou "false" pour afficher l'espace de travail

```
    "coordinateSpaceInitial": {
        "coordinate": {
            "xMin": "-100",
            "xMax": "100",
            "yMin": "-100",
            "yMax": "100"
        },
        "displayArea": false
    },

```

## texteSettings

- **textSettings**
  - **font** : Choix de la police du texte entre "Helvetica", "Arial", "sans-serif", "mono".
  - **size** : Choix de la taille du texte en "em". Exemple : "1em" ou "4em".
  - **style**
    - **bold** : "true" ou "false" pour mettre le texte en gras
    - **italic** : "true" ou "false" pour mettre le texte en italique
    - **underline** : "true" ou "false" pour mettre le texte en évidence

```
    "texteSettings": {
        "police": "Helvetica",
        "size": "1em",
        "style": {
            "bold": true,
            "italic": false,
            "underline": true
        }
    },

```

## baseMap

- **baseMap**
  - **image** : permet de remplir le lien de l'image, en base 64 ou avec une URL
  - **layerImage** : ""
  - **SVG mode** : "True" ou "false" si vous utilisez une image SVG
  - **width** : Choix de la largeur si vous n'avez pas d'image SVG. Si vous en avez une, laissez vide
  - **height** : Choix de la hauteur si vous n'avez pas d'image SVG. Si vous en avez une, laissez vide
  - **idSVG** ""
  - **isUploaded** : False

```
   "baseMap": {
        "image": "https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo1-background.svg",
        "layerImage": "",
        "modeSVG": true,
        "width": "",
        "height": "",
        "idSVG": "",
        "isUploaded": false
    },

```

## regions

- **regions**
  - **0** : Lien vers le fichier .json des régions [Cliquez ici pour savoir comment les remplir](json-region.md)

```

   "regions": [
        "https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo1-svgRegion.json"
    ],


```

## points

- **points**
  - **0** : Lien vers le fichier .json des points [Cliquez ici pour savoir comment les remplir](json-point.md)

```
    "points": [
        "https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo1-point.json"
    ],


```

## links

- **links**
  - **0** : Lien vers le fichier .json links [Cliquez ici pour savoir comment les remplir](json-links.md)

```
    "links": [
        "https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo1-link.json"
    ]

```

# Voir aussi

- [Tutorial 10 : Comment ajouter un fichier json global](../demo/tutorial10.md)
