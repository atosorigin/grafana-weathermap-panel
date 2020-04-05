# Fichier `Global`

le script complet [sample-global.json](../../../demo/sample-global.json) est disponible, dont le détail de construction se trouve ci-dessous.



Le fichier **global** doit être déclaré sous la forme d'un fichier JSON comme ceci:

```

{ 

}

```

## coordinateSpaceInitial


```
{
    "coordinateSpaceInitial": {
        "coordinate": {
            "xMin": "-100",
            "xMax": "100",
            "yMin": "-100",
            "yMax": "100"
        },
        "displayArea": false
    },
}


```






## texteSettings


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


```
   "baseMap": {
        "image": "http://localhost/demo/sample-global.json",
        "layerImage": "",
        "modeSVG": true,
        "width": "",
        "height": "",
        "idSVG": ""
    },
 


```


## regions


```

   "regions": [
        "http://localhost/demo/sample-region.json"
    ],
    

```


## points

```    
    "points": [
        "http://localhost/demo/sample-point.json"
    ],
    
    
```


## links


```
    "links": [
        "http://localhost/demo/sample-link.json"
    ]



