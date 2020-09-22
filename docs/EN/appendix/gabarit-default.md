# Gabarit default file

[![](../../screenshots/other/Go-back.png)](README.md)

The complete [gabarit-default.json](../../resource/sampleJson/gabarit-default.json) script is available, the construction details of which can be found below.

The **gabarit** file must be declared as a JSON file like this:

```
{
  "global": {
     // global
  },
  "default": {
    "templates": [
      {
        // Point and/or Link and/or Region
      }
    ]
  }
}

```

This structure is fixed. The default template must imperatively have a region, a point and a link.

## Global

The **global** format consists of a list of intercepts of values.

The list of elements is described in the dedicated part.[gabarit global](gabarit-json-global.md)

## Point

The **point** format consists of a list of ordinates of values and sets of pairs (key/value).

The list of elements is described in the dedicated part [gabarit point](gabarit-json-point.md)

## Link

The **liens** format consists of a list of ordinates of values and sets of pairs (key/value).

The list of elements is described in the dedicated part [gabarit link](gabarit-json-link.md)

## Region

The **region** format consists of a list of ordinates of values and sets of pairs (key/value).

The list of elements is described in the dedicated part [gabarit region](gabarit-json-region.md)

# See too

- [tutorial 13 : Dynamic gabarit](../demo/tutorial13.md)
- [tutorial 14 : Advanced dynamic template](../demo/tutorial14.md)
- [tutorial 15 : Multiple gabarit loading](../demo/tutorial15.md)
