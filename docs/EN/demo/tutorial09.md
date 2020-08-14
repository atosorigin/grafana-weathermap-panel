# How to create a coordinate mode region

[![](../../screenshots/other/Go-back.png)](README.md)

## Add a dashboard SVG

![step 01](../../screenshots/demo/tutorial01/step01.jpg)

Adding a background image is done from the `display` menu.

The selected image will be [demo01-background.svg](../../resource/demo01-background.svg).

To do this, we download it in base64 with the `Copy image address` function, or with the direct link to the repository:

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo01-background.svg

```

The dimensions (width x height) will be automatically filled in.

It is possible to have more details with the [display](../editor/display.md) page.

## Add region with coordinate mode

In this section we will explain how to create different regions on the dashboard with the coordinate mode.

![header](../../screenshots/demo/tutorial09/header.png)

Once you have placed your link on the image you can go to `Coordinates space` and ``OrientedLink`menu of the`visualization`tab. We inform the`label`

![AddCoordiante](../../screenshots/demo/tutorial09/RegionCoordinateMode.png)

Here, we can see a section with `X min`,`X max`,`Y min`,`Y max`.

The reference point is the point (0,0) at the bottom left of the image.

Let's create these three regions on the dashboard.

So we will have the following data :

Region 1

![zone1](../../screenshots/demo/tutorial09/zone1.png)

Region 2

![zone2](../../screenshots/demo/tutorial09/zone2.png)

Region3

![zone3](../../screenshots/demo/tutorial09/zone3.png)

## Add color to our regions

We will add different colors to our regions to differentiate them. Go the the `LowerLimit` and enable `Trace the border`. Then choose a color and a size for the border

![lowerLimit](../../screenshots/demo/tutorial09/lowerLimit.png)

## Result

Once you've done this for your three regions, you should have something like this :

![result](../../screenshots/demo/tutorial09/result.png)

### Import JSON file

- It is possible to add all of those configurations through JSON files by doing an import. To know how to do it, [follow this link](../editor/import.md)

And here is the JSON file :

[demo09-region](../../resource/demo09-region.json)
