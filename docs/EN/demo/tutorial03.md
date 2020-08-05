# Create an advanced dashboard with directional links

[![](../../screenshots/other/Go-back.png)](README.md)

## Step 1: Creating queries

The first step is through the `Queries` tab.

You must:

- Complete the line `metrics` with the following line

```
rate(node_network_receive_bytes{device="enp0s3"}[10s])

rate(node_network_transmit_bytes{device="enp0s3"}[10s])
```

The "A" and "B" markers will be used to identify this query as you can see below.

![step 01](../../screenshots/demo/tutorial03/query.jpg)

## Step 2: Determining a space

![step 02](../../screenshots/demo/tutorial03/display.jpg)

The creation of a background space is done from the `display' menu.

It requires

- Uncheck `use svg`
- Enter the width
- Enter height

## Step 3: Add a point 1

![step 03](../../screenshots/demo/tutorial03/point1.png)

The creation of a point is done from the `Coordinates space`, `point` and `Add point` menu.

You have to fill out the form like this:

- Enter a `label' for example Computer
- The `size`
- The `shape`
- position `X`
- position `Y`

![step 04](../../screenshots/demo/tutorial03/point1-color.jpg)

We take advantage of this by changing the color of our point. To do this, we add color to our point like this:

- Enable `trace the border`
- Let's choose the color as `green` to the line `edit border color` and customize a shade of our chosen color.
- Size border at 1

## Step 4 : Add an image

To add an illustration to our region, go to `Coordinates space`, `region`, and `Add coordinate space` menu. And choose our point.

![step 02](../../screenshots/demo/tutorial03/CoordinateMode.png)

You have to fill out the form like this:

- Enter a `label` for example New Computer
- Select `Coordinate mode`.
- Then choose an image

The selected image will be [computer-png.png](../../resource/computer-png.png). To do this, fill the input with the adresse of the svg file

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/computer-png.png
```

Then chosse the size of the region for your image. Here we choose :

- X Min : -10
- X Max : -50
- Y Min : -10
- Y Max : -50

![illustration1](../../screenshots/demo/tutorial03/illustration1.jpg)

## Step 5 : Define incurved oriented links

For this step, we will define 2 incurved oriented links. The first one, from the point to the pictures and the second one, from the picture to the point.

First let's create 2 oriented links.

To create an oriented link you have to pass by [the panel menu](../panel/panel-incurved-link.md).

Then, we will edit our links as follow :

![Position](../../screenshots/demo/tutorial03/PositionParameter.png)

## Step 6 : Main metric

To add the main metric to our link, go to `Coordinates space`, `OrientedLink` and click on your link.

Then in `Main metric`, choose your metric for the first link.

![resultat](../../screenshots/demo/tutorial03/MainMetricLink.png)

And choose the other metric for the second link

![resultat](../../screenshots/demo/tutorial03/MainMetricLinkB.png)

## Etape 7 : Text object

The customization of metric values is done from the **Generate text object** form, go to `Coordinates space`, `OrientedLink` and click on your link.

Then, in `Text object`, you need to check the `Generate text object` checkbox and fill this in:

- check `color text`.
- choose a colour: for example Red

![text objet](../../screenshots/demo/tutorial03/text.png)

Et choisissez l'autre métrique pour le deuxième lien avec

- check `color text`.
- choose a colour: for example blue

![texte objet B](../../screenshots/demo/tutorial03/textB.png)

Optionally, you can remove the label from the link as shown in the result

## Resultat

![resultat](../../screenshots/demo/tutorial03/resultat.png)

### Import JSON file

- It is possible to add all of those configurations through JSON files by doing an import. To know how to do it, [follow this link](../editor/import.md)

And here is the different JSON file :

- [demo3-region](../../resource/demo03-region.json)
- [demo3-point](../../resource/demo03-point.json)
- [demo3-link](../../resource/demo03-link.json)
