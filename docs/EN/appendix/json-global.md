# Global file

the full [sample-global.json](../../resource/sampleJson/sample-global.json) script is available, with construction details below.



The **global** file must be declared as a JSON file like this:

```

{ 

}

```

## coordinateSpaceInitial

- coordinateSpaceInitial	
    - coordinate: Allows you to resize your work space. X and Y axes ranging from -100% to 100%. 
    - displayArea: "True" or "False" to show the working space

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

- textSettings	
    - font: Choice of text font between "Helvetica", "Arial", "sans-serif", "mono".
    - size: Choice of text size in "em". Example: "1em" or "4em".
    - style	
        - bold: "True" or "False" to bold the text
        - italic: "True" or "False" to italicize the text
        - underline: "True" or "False" to put the text underline

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

- baseMap	
    - image : allows to fill in the link of the image, in base 64 or with a URL
    - layerImage : ""
    - SVG mode: "True" or "False" if you use an SVG image
    - width: Choice of width if you don't have an SVG image. If you have one, leave blank
    - height : Choice of height if you don't have an SVG image. If you have one, leave blank
    - idSVG ""

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

- regions	
    - 0 : Link to the .json file of the regions [Click here to know how to fill them](json-region.md)


```

   "regions": [
        "http://localhost/demo/sample-region.json"
    ],
    

```


## points

- points	
    - 0 : Link to the .json file of the points [Click here to know how to fill them](json-point.md)

```    
    "points": [
        "http://localhost/demo/sample-point.json"
    ],
    
```


## links

- links	
    - 0 : Link to the .json links file [Click here to know how to fill them](json-links.md)

```
    "links": [
        "http://localhost/demo/sample-link.json"
    ]
    
```


