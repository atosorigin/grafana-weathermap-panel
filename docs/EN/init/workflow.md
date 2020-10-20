# Workflow

[![](../../screenshots/other/Go-back.png)](../../introduction.md)


![workflow0](../../screenshots/init/workflow0.png)

Here, we will explain the different step of "How to use WeatherMap Panel Plugin"

Step 1 : Connect you to Grafana and add our plugin by following [This tutoriel](config-data-source.md)

Step 2 : Create a new dashboard

Step 3 : On the `queries` menu, select `Prometheus` and add as many queries as you want

Step 4 : On the `visualization` menu, you will be able to choose your background (SVG image, Bitmap image, or no image)

Step 5: The graduation of the coordinate space can be changed if you wish. By default, the graduation will be the one defined by the previous step.


The plugin proposes several methods to display the result of the query in the identified model : 

 - Displays the result of a query by the editor 
 - Manipulate the elements of a query by the editor
 - Import predefined views for queries into the editor
 - Control of the rendering by the query template


#### Method 1 : Displays the result of a query by the editor

![workflow1](../../screenshots/init/workflow1.png)

First method :

To apply this method, you must have previously completed steps 1 to 5.
 
Step 6 : Once you have done that, by going to the editor tabs, you can add some regions, points, and link to your dashboard

Step 7 : Then, you can assimilate metrics to the regions/points/links you just created. To do that, there are 3 different way that we are going to explain to you

Step 8 : You choose a query that returns only one value and you want to assimilate the result without adding any filter

**See too**

- [Tutorial 01 : Add a dashboard SVG](../demo/tutorial01.md)
- [Tutorial 02 : Add a dashboard PNG/JPEG](../demo/tutorial02.md)
- [Tutorial 03 : Create dashboard Avanced with link directionnel](../demo/tutorial03.md)
 
 
#### Method 2 : Manipulate the elements of a query by the editor

![workflow2](../../screenshots/init/workflow2.png)

Second method :

To apply this method, you must have previously completed steps 1 to 5.

Step 6 : Once you have done that, by going to the editor tabs, you can add some regions, points, and link to your dashboard

Step 7 : Then, you can assimilate metrics to the regions/points/links you just created. To do that, there are 3 different way that we are going to explain to you

Step 8 : You choose a query that return multiple values with differents key/valueKey, and you want to add a filter to refine your query.

 
**See too**

- [Tutorial 05 : Create a customizable query](../demo/tutorial05.md)
- [Tutorial 06 : Create modelisation advanced](../demo/tutorial06.md)
 
 
 
#### Method 3 : Import predefined views for queries into the editor

![workflow3](../../screenshots/init/workflow3.png)

Third method :

To apply this method, you must have previously completed steps 1 to 5.

Step 6 :  You choose a query that return multiple values with differents key/valueKey.

Step 7 : Then, to add the different regions, points, and links, you can use a global json file. This file contains all the necessary information to create and associate each object with its metrics

Step 8 : Once you have done all of those steps, you will see the result of your query on the dashboard, assimilate with a region/a point, or a link.

 
**See too**

- [Tutorial 10 : How to add a global json file](../demo/tutorial10.md)
- [Tutorial 12 : Building your dashboard from your computer](../demo/tutorial12.md)



#### Method 4 : Control of the rendering by the query template

![workflow4](../../screenshots/init/workflow4.png)


Fourth method : 

To apply this method, you must have previously completed steps 1 to 5.

Step 6 : in the `Gabarit` tab, you load the **default** file

Step 7 : You load the template file(s) that will be composed of the different rendering forms 

Step 8 : From the request elements (refined request), it will search for the elements of the associated filter by associating the query and the file

Step 9 : Once you have completed all these steps, you will see the result of your query in the panel (view).



**See too**

- [Tutorial 13 : Dynamic gabarit](../demo/tutorial13.md)
- [Tutorial 14 : Advanced dynamic template](../demo/tutorial14.md)
- [Tutorial 15 : Multiple gabarit loading](../demo/tutorial15.md)


