# Gabarit Region file

[![](../../screenshots/other/Go-back.png)](README.md)

The complete [gabarit-region.json](../../resource/sampleJson/gabarit-region.json) script is available, the construction details of which can be found below.


## Structure

The **gabarit region** file must be declared as a JSON file like this:


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

- **Label** is the name of the region

```
        "label": "0.5-inner_eval",
```



## Filter

- **filtered** one or more filters build key|value[#key|value][#key|value]

```
        "filtered": "quantile|0.5#slice|inner_eval",
```


## Region

There are 2 ways to create a region:

- SVG Region
- Coordinated region


### SVG Region

The creation of a region from an SVG element must contain the following values


- **labelfix** to false
- **xylabel** coordinates with : xMin|<value>#xMax|<value>#yMin|<value>#yMax|<value>
- **idSVG** is the id of the desired SVG area as region
- **mode** to true

```
    "xylabel": "xMin|labelName#xMax|labelName#yMin|labelName#yMax|labelName",

```

### Coordinated region

The creation of a region from coordinates must necessarily contain the following values

- **labelfix** to true
- **idSVG** empty
- **xylabelfix** coordinates with : xMin|<value>#xMax|<value>#yMin|<value>#yMax|<value>
- **mode** to false

```
    "xylabelfix": "xMin|labelName#xMax|labelName#yMin|labelName#yMax|labelName"

```


## Meta


- **meta** is the name of the message
- **colorText**: Choose the color of the text in rgba. Example : rgba(0, 0, 0, 1)
- **colorBack**: Choose the background color of the text in rgba. Example: rgba(255, 255, 255, 0)
- **bold** Add a bold to the text. "true or "false"
- **italic** Add a italic to the text. "true or "false"
- **underline** Add a underline to the text. "true or "false"


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

  - **xylabelA** : Choose the horizontal position X and Y of label A
  - **xylabelB** : Choose the horizontal position X and Y of label B
  - **tooltipA**: Tooltip A position
  - **tooltipB**: Tooltip B position

```
        "positionParameter": {
          "xylabelA": "x|0#y|0",
          "xylabelB": "x|0#y|0",
          "tooltipA": "Bottom",
          "tooltipB": "Bottom"
        },
```


## mainMetric

- **format** "" (Leaves blank)
- **key**: Allows you to filter the data received by the Query to keep only what is important to you.
- **keyValue** : Allows you to filter the data received by the Query to keep only what is important to you.
- **manageValue** : You can choose between "sum", "avg" or "err".

```
        "mainMetric": {
          "format": "",
          "key": "",
          "keyValue": "",
          "manageValue": "avg"
        },
```

## metrics

Empty


## linkURL

- **followLink**: Allows a redirection to the link by clicking on the region.
- **hoveringTooltipLink** : Allows a redirection to the link filled in the tool type by clicking on the link.
- **hoveringTooltipText** : Displays the link in the tool type that appears when the cursor is passed over the area or point.

```
"linkURL": {
  "followLink": "",
  "hoveringTooltipLink": "",
  "hoveringTooltipText": ""
},

```

## img

This is the path representing a graphical representation

Compatible format is JPG / PNG / GIF / SVG

```
      "img": "",
```

## orientedLink

Fill in the link that starts at this region

  - label : You can choose a label for this association
  - name : choose the unique name of this association

```
        {
          "label": "lien device",
          "name": "orientedLink1"
        }
```

