# Dynamic gabarit

[![](../../screenshots/other/Go-back.png)](README.md)

Demo 13 shows the way to display several points, coming from several requests, of which 2 points will be linked with a link.

## Add the queries

The example shows how to use query filters to obtain precise metrics

![fileselect background](../../screenshots/demo/tutorial13/query.png)

In a query, we want to analyze what the network card receives

Query refID A

```
node_network_name_assign_type

```

The result shows several possible outcomes

```
node_network_name_assign_type{device="ens3",instance="localhost:9100",job="node_exporter"}

```

and the Query RefID B

```
node_network_flags
```

The result shows several possible outcomes

```
node_network_flags{device="ens3",instance="localhost:9100",job="node_exporter"}
node_network_flags{device="lo",instance="localhost:9100",job="node_exporter"}

```

to get a number at the moment, you have to tick the **instant** box for each query

To associate refined query elements to a template, we will focus on the :

- device

which will be used in the json template file in the list **filtered**

## Step 2: Determining a space

![step 02](../../screenshots/demo/tutorial13/display.png)

The creation of a background space is done from the `display' menu.

It requires

- Uncheck `use svg`
- Enter the width (ex : 400)
- Enter height (ex : 400)

It is possible to have more details with the [display](../editor/display.md) page.

## Gabarit

In the **Gabarit** tab

![](../../screenshots/demo/tutorial13/demo13-0.png)

vous ajoutez le fichier par défaut

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo13-default.json

```

puis 1 clic que le bouton **Add**

![](../../screenshots/demo/tutorial13/demo13-1.png)

you add the link to the json file

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo13-point.json

```

then 1 click that the button **Add** followed by **finish**

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo13-point-link.json

```

then 1 click that the button **Add** followed by **finish**

the link will be displayed in the second part of the screen

![](../../screenshots/demo/tutorial13/demo13-2.png)

he must be given a query for

- A for the first file
- B for the second file



In **Text Object** you uncheck the line **Object display in text or tooltip**.

## Result

![](../../screenshots/demo/tutorial13/result.png)

You will see a dot appear and all the settings will be available in the editor.

## Structure gabarit files

the `template` file will use : 

 - a fixed color in lowerlimit
 - several requests
 - point and link
 - Position parameter
 - Meta data
 
 
### default gabarit : demo13-default.json

```
{
  "global": {
     // global
  },
  "default": {
    "templates": [
      {
        // Point
      },
      {
        // Link
      }
    ]
  }
}

```

### Template gabarit : demo13-point.json

```
{
  "global": {
    // global
  },
  "default": {
    "templates": [
      {
        // Point
      }
    ]
  },
  "templates": [
      {
        // Point
      }
   ]
}

```

### Template gabarit : demo13-point-link.json

```
{
  "global": {
    // global
  },
  "default": {
    "templates": [
      {
        // Point
      },
      {
        // Link
      }
    ]
  },
  "templates": [
      {
        // Point
      },
      {
        // second Point
      },
      {
        // Link
      },
   ]
}

```

# See too

- [Gabarit default](../appendix/gabarit-default.md)
- [Gabarit template](../appendix/gabarit-template.md)
