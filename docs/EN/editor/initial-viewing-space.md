# Initial viewing space
[![](../../screenshots/other/Go-back.png)](README.md)



This section allows you to resize your workspace. It is possible to define 2 methods :

## Method 1

![display](../../screenshots/editor/initial/initial-space.jpg)


The referential error of the X and Y axes range from 0 to 100%. If none of the values is modified, we work on the whole dimension defined in the display, like this :

![init full](../../screenshots/editor/initial/init-space-full.svg)




The representation above shows the central axis in position 0 which will be the initial decomposed display space :

- X position: The point at the bottom left will be the 0 position. From the X axis, a graduation goes up to 100 on the horizontal.

- Y position: The point at the bottom left will be the 0 position. From the Y axis, a graduation goes up to 100 on the height.
 

## Method 2


![display](../../screenshots/editor/initial/initial-view-space.jpg)



The breakdown is as follows.


The X and Y axes range from -100% to plus 100%. If none of the values is changed, we work on the entire dimension defined in the display, like this:

![init full](../../screenshots/editor/initial/init-full.svg)

The representation above shows the central axis in position 0 which will be the initial decomposed display space :

- Position X : The center point is half the width of the dimension of the background space, which will give the position of the X axis. From the central X-axis, a scale goes up to 100 on the right and -100 on the left. 

- Position Y : The center point is half the height of the dimension of the background space, which will give the position of the Y-axis. From the central Y-axis, a scale goes up to 100 on the right and -100 on the left. 


### Example :


If you want to work on the upper part of the image the characteristics will be as follows

- X min: -100
- X max: 100
- Y min : 0
- Y max : 100

The part in red will, therefore, be editable. 

![decoupage](../../screenshots/editor/initial/initial-decoupage.svg)

