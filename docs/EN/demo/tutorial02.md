# Add PNG/JPG in your dashboard

[![](../../screenshots/other/Go-back.png)](README.md)

## Add an image as a display

For this tutorial, you will first download the picture background :

![step 01](../../screenshots/demo/tutorial02/ImagePNG.png)

Adding a background image is done from the `display` menu.

The selected image will be [demo02-background.jpg](../../resource/demo02-background.jpg).

To do this, we download it in base64 with the `Copy image address` function, or with the direct link to the repository:

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo02-background.jpg
```

It is possible to have more details with the [display](../editor/display.md) page.

## Define a coordinate mode region with image

### Add an image in a region

The creation of a region in an SVG image is done from the `Coordinates space`, `region`, and `Add coordinate space` menu.

![step 02](../../screenshots/demo/tutorial02/CoordinateMode.png)

You have to fill out the form like this:

- Enter a `label` for example New Computer
- Select `Coordinate mode`.
- Then choose an image

To finish

- Click on the `save` button

The selected image will be [cumputer-png.png](../../resource/computer-png.png). To do this, we download it in base64 with the `Copy image address` function.

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/computer-png.png
```

Then choose the size of the region for your image. Here we choose :

- X Min : 70
- X Max : 180
- Y Min : 200
- Y Max : 270

![](../../screenshots/demo/tutorial02/ImageRegion.png)

### Result

The end result will be like this:

![](../../screenshots/demo/tutorial02/Result1.png)


### Metadata

In the editor, we choose the `metadata` line to add a message.

![](../../screenshots/demo/tutorial02/meta-new.png)

An empty field is displayed and we fill it with our `region` object. For that, we fill in the field, then a click on `add`


![](../../screenshots/demo/tutorial02/meta-config.png)

A configuration panel is available to configure the display of the result.


We choose :

 - Background: white
 - Text: Red
 - Style: Bold


![](../../screenshots/demo/tutorial02/meta-result.png)

The message will be visible when the mouse hovers over the object


## Define a coordinate mode region without image

### Step 1 : Create the region

The creation of a region in an SVG image is done from the `Coordinates space`, `region`, and `Add coordinate space` menu.

![step 02](../../screenshots/demo/tutorial02/CoordinateMode.png)

You have to fill out the form like this:

- Enter a `label` for example hello
- Select `Coordinate mode`.

![step 03](../../screenshots/demo/tutorial02/CoordinateModeNoImage.png)

Then choose the size of the region for your image. Here we choose :

- X Min : 308
- X Max : 374
- Y Min : 237
- Y Max : 270

To finish

- Click on the `save` button

### Step 2 : Add color to a region

![step 03](../../screenshots/demo/tutorial02/LowerLimit.png)

Adding a color to an SVG element is done from the `Coordinates space`, `region`, and `Edit coordinate space` menu.

You select the `Lower limit' line and then complete the form like this:

- Enable `Trace the background` to activate the background color.
- Select the `green` color in the `Edit background color` line.

You get the following result

![](../../screenshots/demo/tutorial02/Cumputer2.png)

It is possible to define other parameters, referring to the [coordinates lower limit](../editor/coordinates-lower-limit.md) page.

### Result

The end result will be like this:

![](../../screenshots/demo/tutorial02/Result2.png)

## Define an oriented link between two regions

To create an oriented link you have to pass by [the panel menu](../panel/panel-oriented-link.md).

## New Result

![](../../screenshots/demo/tutorial02/Result3.png)


## Add metadata for the link

In the editor, we choose the `metadata` line to add a message in the `orientedLink`.

![](../../screenshots/demo/tutorial02/link-meta-new.png)

An empty field is displayed and we fill it with our `link` object. For that, we fill in the field, then a click on `add`

![](../../screenshots/demo/tutorial02/link-meta-config.png)

A configuration panel is available to configure the display of the result.


We choose :

 - Background: white
 - Text: Red
 - Style: Bold, Italic, Underline


The message will be visible when the mouse hovers over the object

## Final Result

![demo2](../../screenshots/demo/tutorial02/Result-final.png)

### Import JSON file

- It is possible to add all of those configurations through JSON files by doing an import. To know how to do it, [follow this link](../editor/import.md)

And here is the different JSON file :

- [demo02-CoorRegion](../../resource/demo02-CoorRegion.json)
- [demo02-link](../../resource/demo02-link.json)
