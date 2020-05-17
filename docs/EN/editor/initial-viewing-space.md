
# Initial viewing space
[![](../../screenshots/other/Go-back.png)](README.md)

![display](../../screenshots/editor/initial/initial-view-space.jpg)

This section allows you to resize your workspace. The cutout is as shown below.

![init editor](../../screenshots/editor/initial/initial-example.svg)

The X and Y axes range from -100% to plus 100%. If none of the values is changed, we work on the entire dimension defined in the display, like this:

![init full](../../screenshots/editor/initial/init-full.svg)

The representation above shows the central axis in position 0 which will be the initial decomposed display space :

- Position X : The center point is half the width of the dimension of the background space, which will give the position of the X axis. From the central X-axis, a scale goes up to 100 on the right and -100 on the left. 

- Position Y : The center point is half the height of the dimension of the background space, which will give the position of the Y-axis. From the central Y-axis, a scale goes up to 100 on the right and -100 on the left. 


## Example :


If you want to work on the upper part of the image the characteristics will be as follows

- X min: -100
- X max: 100
- Y min : 0
- Y max : 100

The part in red will, therefore, be editable. 

![decoupage](../../screenshots/editor/initial/initial-decoupage.svg)

