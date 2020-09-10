# Gabarit file

[![](../../screenshots/other/Go-back.png)](README.md)

The complete [sample-gabarit.json](../../resource/sampleJson/sample-gabarit.json) script is available, the construction details of which can be found below.

The **gabarit** file must be declared as a JSON file like this:

```
{
  "global": {
  },
  "templates": [
  ]
}
```

## Global

```
  "global": {
    "lowerLimit": {
      "lowerLimitMin": "leMinimum",
      "lowerLimitMax": "leMaxmum",
      "backColor": "white",
      "borderColor": "black",
      "sizeBorder": "20px"
    },
    "textObject": {
      "value": "",
      "isTextTooltip": "false",
      "colorBack": "red",
      "colorText": "yellow",
      "style": {
        "bold": "true",
          "italic": "false",
        "underline": "true"
      },
      "generateObjectText": "true",
      "valueGenerateObjectText": {
          "legendElement": "uneLegend",
          "numericFormatElement": "",
          "unit": "Hz",
        "displayObjectInTooltip": "true",
          "addColorTextElement": "true",
          "colorTextElement": "blue",
          "addColorBackElement": "black",
          "colorBackElement": "white"
      },
      "generateAuxiliaryElement": {
          "legendElement": "uneLegend",
          "numericFormatElement": "?",
          "unit": "Hz",
        "displayObjectInTooltip": "true",
          "addColorTextElement": "true",
          "colorTextElement": "blue",
          "addColorBackElement": "black",
          "colorBackElement": "white"
      }
    },
    "colorMode": "true",
    "traceBack": "true",
    "traceBorder": "true"
  }
```

## templates

The creation of a region from an SVG element must contain the following values

- **filtered** : key|value[#key|value][#key|value]
- **Labelfix** is the name of the region
- **xylabel**
- **xylabelfix**

### points

```
    {
      "filtered": "device|eno0",
      "labelfix": "false",
      "xylabel": "x|labelName#y|labelName",
      "xylabelfix": "",
      "type": "point",
      "name": "unPoint",
      "meta": "uneMeta",
      "label": "unLabel",
      "positionParameter": "",
      "mainMetric": {},
      "metrics": [],
      "linkURL": {},
      "valueMetric": "",
      "drawGraphicMarker": { "label": "", "value": "" },
      "shape": { "label": "?", "value": "?" },
      "sizeWidth": { "label": "200px", "value": "200px" },
      "sizeHeight": { "label": "200px", "value": "200px" },
      "rotateArrow": { "label": "", "value": "" },
      "positionShapeX": "",
      "positionShapeY": "",
      "color": "blue",
      "assiciateOrientedLinksIn": [],
      "associateOrientedLinksOut": []
    },

```

### OrientedLink

```
    {
      "filtered": "quantile|0.5#slice|inner_eval",
      "labelfix": "false",
      "xylabelA": "x|labelName#y|labelName",
      "xylabelB": "x|labelName#y|labelName",
      "xylabelC": "x|labelName#y|labelName",
      "xylabelAfix": "x|labelName#y|labelName",
      "xylabelBfix": "x|labelName#y|labelName",
      "xylabelCfix": "x|labelName#y|labelName",
      "type": "link",
      "name": "unLink",
      "meta": "uneMeta",
      "label": "unLabel",
      "positionParameter": "",
      "mainMetric": {},
            "metrics": [],
            "mainMetricB": {},
      "metricsB": [],
      "linkURL": {},
      "orientationLink": { "label": "", "value": "" },
      "size": { "label": "20px", "value": "20px"},
      "colorCoordinateA": "",
      "colorCoordinateB": "",
      "valueMainMetricA": "",
      "valueMainMetricB": "",
      "pointIn": "",
      "pointOut": "",
      "regionIn": "",
      "regionOut": "",
      "zIndex": "2",
      "isIncurved": { "label": "true", "value": "true" }
    }


### Region
    {
      "filtered": "quantile|0.5#slice|inner_eval",
      "labelfix": "true",
      "xylabel": "x|labelName#y|labelName",
      "xylabel0": "x|labelName#y|labelName",
      "xylabelfix": "x|10#y|20",
      "xylabelfix0": "x|10#y|20",
      "type": "region",
      "meta": "uneMeta",
      "label": "unLabel",
      "positionParameter": "",
      "mainMetric": {},
      "metrics": [],
      "linkURL": {},
      "idSVG": "path 117",
      "mode": "true",
      "img": ""
    }
```
