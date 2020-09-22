# Gabarit file

[![](../../screenshots/other/Go-back.png)](README.md)

The complete [gabarit-default.json](../../resource/sampleJson/gabarit-default.json) script is available, the construction details of which can be found below.

## global

la structure de la partie **global** se décompose de la manière suivante :

```
  "global": {
    "lowerLimit": [],
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

## lowerLimit

It is possible to choose between 2 color methods :

- fixed color
- variable colour

### fixed color

If `colorMode` is in false

```
"colorMode": false,
```

Then the color will be defined like this

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

With:

- **backColor** Fill in a color for the background under the form #7FFF00 for example
- **borderColor** Fill in a color for the border under the form #7FFF00 for example.
- **id** color id
- **lowerLimitMax** Maximum value of the metric for this colour
- **lowerLimitMin** Minimum metric value for this colour
- **sizeBorder** thickness of the border

### Variable colors

Variable colors allow you to change the color according to defined ranges.

If `colorMode` is set to True

```
"colorMode": true,
```

Then the color will be defined like this

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

With similarly:

- **backColor**: Fill in a color for the background under the form #7FFF00 for example
- **borderColor** : Fill in a color for the border under the form #7FFF00 for example.
- **id** : color id
- **lowerLimitMax** : Maximum value of the metric for this colour
- **lowerLimitMin**: Minimum metric value for this colour
- **sizeBorder** : thickness of the border

## textObject

- **value**: Value of the object
- **isTextToolip**: display text in the element or tooltip
- **colorBack**: Choose the background color of the text in rgba. Example: rgba(255, 255, 255, 0)
- **colorText**: Choose the color of the text in rgba. Example: rgba(0, 0, 0, 1)
- **style**
  - **bold** : "True" or "False" to put the text in bold.
  - **italic**: "True" or "False" to italicize text
  - **underline**: "True" or "False" to put the text in underline
- **generateObjectText**: Generate a text object. "true" or "false"
- **valueGenerateObjectText**
  - **legendElement** : Associate a legend to your element
  - **numericFormatElement**: Allows to round the result of the Query
  - **unit**: Displays a unit of measure
  - **displayObjectInText**: Display the object in the text. "true" or "false"
  - **addColorTextElement**: Add a color to the text. "true or "false"
  - **addColorBackElement**: Add a color to the background. "true" or "false"
  - **colorBackElement**: Choose the background color
  - **colorTextElement** : Choose the color of the text
- **generateAuxiliaryElement**: Allows to generate an auxiliary element
  - **legendElement** : Associate a legend to your element
  - **numericFormatElement**: Allows to round the result of the Query
  - **unit**: Displays a unit of measure
  - **displayObjectInText**: Display the object in the text. "true" or "false"
  - **addColorTextElement**: Add a color to the text. "true or "false"
  - **addColorBackElement**: Add a color to the background. "true" or "false"
  - **colorTextElement** : Choose the color of the text
  - **colorBackElement**: Choose the background color

## traceBack

- **traceBack**: Allow you to associate a color to the background. "true" or "false"

```
     "traceBack": true,

```

## traceBorder

- **traceBorder**: Allow you to associate a color to the border. "true" or "false"

```
      "traceBorder": false
```
