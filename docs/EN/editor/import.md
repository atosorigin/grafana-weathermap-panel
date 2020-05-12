 
# Import Files
[![](../../screenshots/other/Go-back.png)](README.md)
 
## Global URL Import


![coordinate mode](../../screenshots/editor/import/global.jpg)

For the Global import, it is necessary to fill in the link of the .json file which includes all the necessary information as below.

![coordinate mode](../../screenshots/editor/import/Json-Global.png)

With:
	
- coordinateSpaceInitial	
    - coordinate: Allows you to resize your workspace. X and Y axes ranging from -100% to plus 100%. 
    - displayArea: "True" or "False" to show the working space
- textSettings	
    - font: Choice of text font between "Helvetica", "Arial", "sans-serif", "mono".
    - size: Choice of text size in "em". Example: "1em" or "4em".
    - style	
        - bold: "True" or "False" to bold the text
        - italic: "True" or "False" to italicize the text
        - underline: "True" or "False" to put the text underline
- baseMap	
    - image : allows to fill in the link of the image, in base 64 or with a URL
    - layerImage : ""
    - SVG mode: "True" or "False" if you use an SVG image
    - width: Choice of width if you don't have an SVG image. If you have one, leave blank
    - height : Choice of height if you don't have an SVG image. If you have one, leave blank
    - idSVG ""
- regions	
    - 0 : Link to the .json file of the regions [Click here to know how to fill them](./../appendix/json-region.md)
- points	
    - 0 : Link to the .json file of the points [Click here to know how to fill them](./../appendix/json-point.md)
- links	
    - 0 : Link to the .json links file [Click here to know how to fill them](./../appendix/json-links.md)
 

## Multi URL Import


![coordinate mode](../../screenshots/editor/import/url-import.jpg)

For the Multi URL Import, you have to enter the required URLs in the field. 
The different URLs are those of regions, points, and links. 
You can find templates of the JSON type of these files at the following links:

- [region.json](./../appendix/json-region.md)
- [point.json](./../appendix/json-points.md)
- [lien.json](./../appendix/json-links.md)

Afterward, you click on the `add` button if you want to add more URLs
To finish you have to click on `finish`.


The result is instantaneous


You can add additional import files at will



## Multi local Import


![coordinate mode](../../screenshots/editor/import/local-import.jpg)



You select the file on your hard drive from the `Browse..` button.


After that, you click the `add` button, followed by the `finish` button.


The result is instantaneous 
It is possible to upload an additional configuration file but you have to save the page and reload the page



