# SVG
[![](../../screenshots/other/Go-back.png)](README.md)

## Build an SVG file

### Background

The background image is an integral part of the plugin.

It is made possible to make it dynamic. To do so, the background image must be in vectorized format [SVG](https://fr.wikipedia.org/wiki/Scalable_Vector_Graphics)


## Editor

### Inkscape

The recommended software to make a background image will be [Inkscape](https://inkscape.org). It is available for :

  - Linux
  - Windows
  - Mac

  the file will be saved as **Simple SVG** or **SVG Inkscape**.


### Draw.io

The [Draw.io](https://draw.io/) editor is accessible from a browser.

You must activate one of the `networking` shapes libraries to get a graphical representation of your network.

You must export the image in SVG format.
The mandatory parameters to check are `shadow` and `embed images`.


## Backup

![main metric](../../screenshots/appendix/draw-export-svg.jpg)

It is important that each element must have an `ID` key so that the created file can be imported into the plugin.


> Warning: 
> you must not save in flat format, nor compress the file
