- **regions**: Table containing 1 or more regions
    - **0** : First region
        - **colorMode**: If the color of the region is unique, enter "false". If the color is variable depending on the query value, enter "true". 
        - **coords**: Fill in the coordinates of the region to draw only if you don't use an idSVG. If this is the case, leave all to 0.
        - **id** : id of the region
        - **idSVG**: id of the SVG field, if you use a SVG field. Otherwise, leave blank.
        - **img** : allows you to fill in an image other than svg
        - **label** : Name of the zone
        - **linkURL**
            - **followLink** : Allows a redirection to the link by clicking on the region.
            - **hoveringTooltipLink** : Allows a redirection to the link filled in the tool type by clicking on the link.
            - **hoveringTooltipText** : Displays the link in the tool type that appears when the cursor is passed over the area or point.
        - **lowerLimit**: If **colorMode** is false, set a color for the interior and the contour of the area. If **ColorMode** is true, allows to define colors depending on the values of the associated query.
            - **0** : First color
                - **backColor**: Enter a color in the form #7FFF00 for example for the background
                - **borderColor** : Enter a color in the form #7FFF00 for example for the border.
                - **id** : color id
                - **lowerLimitMax**: Maximum value for this colour
                - **lowerLimitMin**: Minimum value for this colour
                - **sizeBorder**: thickness of the border
        - **mainMetric**	
            - **format** "" (Leaves blank)
            - **key**: allows you to filter the data received by the Query to keep only what is important to you.
            - **keyValue** : allows you to filter the data received by the Query to keep only what is important to you.
            - **manageValue** : You can choose between "sum", "avg" or "error".
            - **refId**: metric reference associated with this region
            - **returnQuery**: Do not ask.      
            - **unit** : (Leave blank)
        - **meta** : ""     
        - **metrics** : This is a metric table to add metrics to the auxilary metrics.
            - **0**
                - **format** "" (Leaves blank)
                - **key**: allows you to filter the data received by the Query to keep only what is important to you.
                - **keyValue** : allows you to filter the data received by the Query to keep only what is important to you.
                - manageValue** : You can choose between "sum", "avg" or "error".
                - **refId**: metric reference associated with this region
                - **returnQuery**: Do not ask.      
                - **unit** : (Leave blank)
            - **1**
                - ...
        - **mode**: Fill in "true" if you are using a svg image. Otherwise enter "false".
        - **orientedLink** :
            - **0**
                **name**: thong;
                **orientationLink** : Choose "monodirectional" or "bidirectional".
                **pointAPositionX** : Choose the horizontal position of point A between "-100" and "100".
                **pointAPositionY** : Choose the vertical position of point A between "-100" and "100".
                **colorCoordinateA**: thong;
                **pointBPositionX** : Choose the horizontal position of point B between "-100" and "100".
                **pointBPositionY** : Choose the vertical position of point B between "-100" and "100".
                **colorCoordinateB**: thong;
                **valueMainMetricA**: string;
                **valueMainMetricB** : string;
                **pointIn** : string;
                **dotOut** : string;
                **regionIn** : string;
                **regionOut** : string;
                **zIndex** : number;
                **pointCPositionX** : Choose the horizontal position of point A between "-100" and "100";
                **pointCPositionY** : Choose the horizontal position of point A between "-100" and "100";
                **isIncurved** : Enter "true" if your link is curved. Otherwise, enter "false".
                **mainMetricB** : Inform the metric of B
                **metricsB**: Inform the metrics auxilière of B

        - **Parameter position**
            - **labelAPositionX** : Choose the horizontal position of label A between "-100" and "100".
            - **labelAPositionY** : Choose the vertical position of label A between "-100" and "100".
            - **labelBPositionX** : Choose the horizontal position of label B between "-100" and "100".
            - **labelBPositionY** : Choose the vertical position of label B between "-100" and "100".
            - **tooltipPositionA**: Tooltip A position
            - **tooltipPositionB**: Tooltip position B
        - **textObj**
            - **colorBack**: Choose the background color of the text in rgba. Example: rgba(255, 255, 255, 0)
            - **colorText**: Choose the color of the text in rgba. Example : rgba(0, 0, 0, 1)
            - **generateAuxiliaryElement**: Displays 
                - **addColorBackElement**: Add a color to the background. "true" or "false"
                - **addColorTextElement**: Add a color to the text. "true or "false"
                - **colorBackElement**: Choose the background color
                - **colorTextElement** : Choose the color of the text 
                - **displayObjectInText**: Display the object in the text. "true" or "false"
                - **displayObjectPermanently**: Display the object permanently. "true" or false"
                - **legendElement** : Associate a legend to your element 
                - **numericFormatElement**: numeric format element 
                - **unityMesureElement**: Displays a unit of measurement
            - **generateObjectText**: Generate a text object. "true" or "false"
            - **isTextRegion**: display text in the element or tooltip
            - **legend** : Allows to add a legend
            - **style**	
                - **bold** : "True" or "False" to put the text in bold.
                - **italic**: "True" or "False" to italicize text
                - **underline**: "True" or "False" to put the text in underline
            - **unit** : Allows to display a unit of measurement
            - **value**: Value of the object
            - **valueGenerateObjectText**: Use and fill in if generateObjectText is true when using the variable to store data.
                - **addColorBackElement**: Add a color to the background. "true" or "false"
                - **addColorTextElement**: Add a color to the text. "true or "false"
                - **colorBackElement**: Choose the background color
                - **colorTextElement** : Choose the color of the text 
                - **displayObjectInText**: Display the object in the text. "true" or "false"
                - **displayObjectPermanently**: Display the object permanently. "true" or false"
                - **legendElement** : Associate a legend to your element 
                - **numericFormatElement**: numeric format element 
                - **unityMesureElement**: Displays a unit of measurement
        - **traceBack**: Allows to associate a color to the background. "true" or "false"
        - **traceBorder**: Allows to associate a color to the border. "true" or "false"
    - **1** : Second region
        - ...
            - ...
                - ...