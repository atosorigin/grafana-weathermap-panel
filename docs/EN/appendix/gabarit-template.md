# template file

[![](../../screenshots/other/Go-back.png)](README.md)

The **template** file must be declared as a JSON file like this:

```
{
  "global": {
    // global
  },
  "default": {
    "templates": [
      {
        // Point and/or Link and/or region
      }
    ]
  },
  "templates": [
      {
        // Point and/or Link and/or region
      },
   ]
}


```

## Global

The **global** format consists of a list of intercepts of values.

The list of elements is described in the dedicated part.[gabarit global](gabarit-json-global.md)

## Default templates

The **default templates** part must have at least one of the following structures :

- [gabarit point](gabarit-json-point.md)
- [gabarit link](gabarit-json-link.md)
- [gabarit region](gabarit-json-region.md)

## Templates

the **template** part consists of one or more of the structures below.

### Point

The **point** format consists of a list of ordinates of values and sets of pairs (key/value).

The list of elements is described in the dedicated part [gabarit point](gabarit-json-point.md)

### Link

The **link** format consists of a list of ordinates of values and sets of pairs (key/value).

The list of elements is described in the dedicated part [gabarit link](gabarit-json-link.md)

### Region

The **region** format consists of a list of ordinates of values and sets of pairs (key/value).

The list of elements is described in the dedicated part [gabarit region](gabarit-json-region.md)

# See too

- [tutorial 13 : Dynamic gabarit](../demo/tutorial13.md)
- [tutorial 14 : Advanced dynamic template](../demo/tutorial14.md)
- [tutorial 15 : Multiple gabarit loading](../demo/tutorial15.md)
