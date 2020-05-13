
## Add a dashboard SVG
[![](../../screenshots/other/Go-back.png)](README.md)
 
![step 01](../../screenshots/demo/tutorial01/step01.jpg)


Adding a background image is done from the `display` menu.

The selected image will be [demo1-background.svg](../../resource/demo01-background.svg). To do this, we download it in base64 with the `Copy image address` function.


```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo01-background.svg

```

It is possible to have more details with the [display](../editor/display.md) page.

You have to save and reload the page.


## Creating a dynamic region


### Step 1: Define an SVG region


![step 02](../../screenshots/demo/tutorial01/step02.jpg)


The creation of a region in an SVG image is done from the `Coordinates space`, `region`, and `Add coordinate space` menu.

You have to fill out the form like this: 

- Enter a `label` for example Computer
- Select `SVG label`.
- Choose the `path 147` line from the drop-down list.
- Click on the `load` button


### Step 2: Add color to the SVG element



![step 03](../../screenshots/demo/tutorial01/step03.jpg)


Adding a color to an SVG element is done from the `Coordinates space`, `region`, and `Edit coordinate space` menu.

You select the `Lower limit` line and then complete the form like this: 
 

- Enable `Trace the background` to activate the background color. 
- Select the `green` color in the `Edit background color` line.
- Enable `Trace the border` to activate the border color.
- Select the `red` color in the `Edit border color` line.
- Enter a value to set the size of the border `size border` for example 3
- Click on the `load` button


You get the following result

![step 04](../../screenshots/demo/tutorial01/step04.jpg)


It is possible to define other parameters, referring to the [coordinates lower limit](../editor/coordinates-lower-limit.md) page.



### Step 3: Adding a Query to an SVG element


![step 05](../../screenshots/demo/tutorial01/step05.jpg)


The first step is through the `Queries` tab.

You must:

- Complete the line `metrics` with the following line

```
rate(go_memstats_gc_cpu_fraction[5m]) * 100000
```

The `A` marker will be used to identify this query as you can see below.



![step 06](../../screenshots/demo/tutorial01/step06.jpg)

The second step is from the `Coordinates space`, `region` and `Edit coordinate space` menu of the `visualization` tab.

You select the `Main metric` line to complete the form like this: 

- Enter a `Query` for example A
- Click on the `load` button


The value will be automatically displayed after the page is refreshed.


It is possible to fill in the other fields with the additional settings available on the page [coordinates space region](../editor/coordinates-space-region.md)




### Step 4: Formatting SVG element information


![step 07](../../screenshots/demo/tutorial01/step07.jpg)


The formatting of the SVG element information is done from the `Coordinates space`, `Region` and `Edit coordinate space` menu.

You select the `Text object` line to complete the `Generate text object` form like this: 


- Enter a `legend`.
- Enter the number of digits after the decimal point in `Digital formatting` e.g. 2
- Enter a unit of measurement in the line `unit of measurement` like qw
- Choose a background color
- Choose a text color
- Click on the "load" button

### Result

The end result will be like this: 

![step 08](../../screenshots/demo/tutorial01/step08.jpg)


## Create a point

### Step 1: Placing a point


![step 09](../../screenshots/demo/tutorial01/add-coordinate.png)

- To place a point, go to `Visualization`, then `Coordinates space`, `Point`, and `Add coordinate space`.

![step 09](../../screenshots/demo/tutorial01/point1.png)

You have to fill out the form like this: 

- Fill in the "label" of the point
- Inform his " size".
- Enter the X and Y position where you want the point to appear.


### Step 2: Add a color to the point



![step 03](../../screenshots/demo/tutorial01/lower-limit-point.png)


Adding a color to an SVG element is done from the `Coordinates space`, `point`, and `Edit coordinate space` menu.

You select the `Lower limit' line and then complete the form like this: 
 

- Enable `Trace the background` to activate the background color. 
- Select the `green` color in the `Edit background color` line.
- Enable `Trace the border` to activate the border color.
- Select the `red` color in the `Edit border color` line.
- Enter a value to set the size of the border `size border` for example 3
- Click on the "load" button


You get the following result

![step 04](../../screenshots/demo/tutorial01/result-color-point.png)


It is possible to define other parameters, referring to the [coordinates lower limit](../editor/coordinates-lower-limit.md) page.


### Step 3: Adding a Query to a point


![step 05](../../screenshots/demo/tutorial01/step05.jpg)


As seen in the previous section, we need a metric. So you can use the same metric as before, or you can give another metric B

Once you have done that, you will associate this query to your point


![step 06](../../screenshots/demo/tutorial01/step06.jpg)

The second step is from the `Coordinates space`, `region`, and `Edit coordinate space` menu of the `visualization` tab.

You select the `Main metric` line to complete the form like this: 

- Enter a `Query` for example A
- Click on the `load` button


The value will be automatically displayed after the page is refreshed.


It is possible to fill in the other fields with the additional settings available on the page [coordinates space region](../editor/coordinates-space-region.md)


### Result

The end result will be like this: 

![step 08](../../screenshots/demo/tutorial01/final-result-point.png)

## Creating an oriented link 

### Step 1: Place an oriented link

To create an oriented link you have to pass by [the panel menu](../panel/panel-oriented-link.md).

### Step 2: Adding a Query to a link

Once you have placed your link on the image you can go to `Coordinates space` and `point` menu of the `visualization` tab.


![step 06](../../screenshots/demo/tutorial01/OrientedLink1.png)

Here, you can see your link `OrientedLink 1`

You select the `Main metric` line to complete the form like this: 

- Enter a `Query` for example A
- Click on the `load` button


The value will be automatically displayed after the page is refreshed.


It is possible to fill in the other fields with the additional settings available on the page [coordinates space link](../editor/coordinates-space-link.md)

### Result

![step 06](../../screenshots/demo/tutorial01/final-result-link.png)

## Add everything with JSON

### Import JSON file

- It is possible to add all of those configurations through JSON files by doing an import. To know how to do it, [follow this link](../editor/import.md)

And here is the different JSON file :

- [demo1-svgRegion](../../resource/demo01-svgRegion.json) 
- [demo1-point](../../resource/demo01-point.json)
- [demo1-link](../../resource/demo01-link.json)



