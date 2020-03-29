 
 
## Fichier `Global`

il s'agit du fichier de configuration de l'extension

Le fichier **global** est unique par rapport aux autres fichiers de configuration. Il est au format JSON et est structuré de la manière suivante :

```


{
    "coordinateSpaceInitial": {
        "xMin": "-100",
        "xMax": "100",
        "yMin": "-100",
        "yMax": "100"
    },
    "imageUrl": "http://localhost/demo/demo2-background.svg",
    "texteSettings": {
        "police": "Helvetica",
        "size": "1em",
        "styleText": "normal"
    },
    "regions": ["http://localhost/demo/demo2-svgRegion.json"],
    "points": ["http://localhost/demo/demo2-coordPoint.json"],
    "links": ["http://localhost/demo/demo2-coordLink.json"]
}


```



