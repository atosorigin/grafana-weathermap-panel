# Gabarit file

[![](../../screenshots/other/Go-back.png)](README.md)

http://localhost/demo/sampleJson/gabarit-default-new.json

The complete [gabarit-default.json](../../resource/sampleJson/gabarit-default.json) script is available, the construction details of which can be found below.

The **gabarit** file must be declared as a JSON file like this:

```
{
  "global": {
  },
  "default": {
    "templates": [
      { 
        // point 
      },
      { 
        // link 
      },
      { 
        // region 
      },  
    ]
  }
}

```

## Global

```
  "global": {
    "lowerLimit": [
      {
        "id": 0,
        "lowerLimitMin": "leMinimum",
        "lowerLimitMax": "leMaxmum",
        "backColor": "black",
        "borderColor": "black",
        "sizeBorder": "2"
      }
    ],
    "textObject": {
      "value": "",
      "isTextTooltip": false,
      "colorBack": "black",
      "colorText": "white",
      "style": {
        "bold": true,
        "italic": false,
        "underline": false
      },
      "generateObjectText": true,
      "valueGenerateObjectText": {
        "legendElement": "uneLegend",
        "numericFormatElement": "2",
        "unit": "Hz",
        "displayObjectInTooltip": true,
        "addColorTextElement": false,
        "addColorBackElement": false,
        "colorTextElement": "",
        "colorBackElement": ""
      },
      "generateAuxiliaryElement": {
        "legendElement": "uneLegend",
        "numericFormatElement": "?",
        "unit": "Hz",
        "displayObjectInTooltip": true,
        "addColorTextElement": true,
        "addColorBackElement": true,
        "colorTextElement": "#000000",
        "colorBackElement": "#FFFFFF"
      }
    },
    "colorMode": true,
    "traceBack": false,
    "traceBorder": false
  },
```
  
## Default templates

```
  "default": {
    "templates": [
      { 
        // point 
      },
      { 
        // link 
      },
      { 
        // region 
      },  
    ]

```

### point

```
{
        "filtered": "",
        "labelfix": true,
        "xylabel": "x|labelName#y|labelName",
        "xylabelfix": "x|90#y|90",
        "type": "point",
        "name": "unPoint",
        "meta": "uneMeta",
        "label": "mtu ens3",
        "positionParameter": {
          "xylabelA": "x|0#y|0",
          "xylabelB": "x|labelName#y|labelName",
          "tooltipA": "Bottom",
          "tooltipB": "Bottom"
        },
        "mainMetric": {
          "key": "",
          "unit": "",
          "format": "",
          "keyValue": "",
          "filter": [],
          "refId": "",
          "expr": "",
          "returnQuery": [],
          "manageValue": "avg"
        },
        "metrics": [],
        "linkURL": {
          "followLink": "defaulFiletpass",
          "hoveringTooltipLink": "defaultFilepass",
          "hoveringTooltipText": "defaultFilepass"
        },
        "valueMetric": "",
        "drawGraphicMarker": {
          "label": "Yes",
          "value": "true"
        },
        "shape": {
          "label": "circle",
          "value": "circle"
        },
        "sizeWidth": "12",
        "sizeHeight": {
          "label": "",
          "value": ""
        },
        "rotateArrow": {
          "label": "",
          "value": ""
        },
        "positionShapeX": "",
        "positionShapeY": "",
        "color": "green",
        "assiciateOrientedLinksIn": [],
        "associateOrientedLinksOut": []
  }

```
  
### link

```
     {
        "filtered": "device|ens3",
        "labelfix": true,
        "xylabelA": "x|quantile#y|quantile",
        "xylabelB": "x|quantile#y|quantile",
        "xylabelC": "x|quantile#y|quantile",
        "xylabelfixA": "x|-70#y|66",
        "xylabelfixB": "x|10#y|60",
        "xylabelfixC": "x|0#y|0",
        "type": "link",
        "name": "unLink",
        "meta": "uneMeta",
        "label": "lien device",
        "positionParameter": {
          "xylabelA": "x|0#y|0",
          "xylabelB": "x|0#y|0",
          "tooltipA": "Bottom",
          "tooltipB": "Bottom"
        },
        "mainMetric": {
          "key": "",
          "unit": "",
          "format": "",
          "keyValue": "",
          "filter": [],
          "refId": "",
          "expr": "",
          "returnQuery": [],
          "manageValue": "avg"
        },
        "metrics": [],
        "mainMetricB": {
          "key": "",
          "unit": "",
          "format": "",
          "keyValue": "",
          "filter": [],
          "refId": "",
          "expr": "",
          "returnQuery": [],
          "manageValue": "avg"
        },
        "metricsB": [],
        "linkURL": {
          "followLink": "",
          "hoveringTooltipLink": "",
          "hoveringTooltipText": ""
        },
        "orientationLink": {
          "label": "Monodirectional",
          "value": "AB"
        },
        "size": "9",
        "colorCoordinateA": "#5794F2",
        "colorCoordinateB": "#E54658",
        "valueMainMetricA": "",
        "valueMainMetricB": "",
        "pointIn": "",
        "pointOut": "",
        "regionIn": "",
        "regionOut": "",
        "isIncurved": {
          "label": "No",
          "value": false
        },
        "zIndex": "2",
        "color": "black"
      },
      
```

### region

    {
        "filtered": "quantile|0.5#slice|inner_eval",
        "labelfix": false,
        "xylabel": "xMin|labelName#xMax|labelName#yMin|labelName#yMax|labelName",
        "xylabelfix": "xMin|labelName#xMax|labelName#yMin|labelName#yMax|labelName",
        "type": "region",
        "meta": "uneMeta",
        "label": "0.5-inner_eval",
        "positionParameter": {
          "xylabelA": "x|0#y|0",
          "xylabelB": "x|0#y|0",
          "tooltipA": "Bottom",
          "tooltipB": "Bottom"
        },
        "mainMetric": {
          "key": "",
          "unit": "",
          "format": "",
          "keyValue": "",
          "filter": [],
          "refId": "",
          "expr": "",
          "returnQuery": [],
          "manageValue": "avg"
        },
        "metrics": [],
        "linkURL": {
          "followLink": "",
          "hoveringTooltipLink": "",
          "hoveringTooltipText": ""
        },
        "idSVG": "",
        "mode": true,
        "img": "",
        "orientedLink": [],
        "color": "black"
      }
      
      
