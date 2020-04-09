- **regions** : Tableau contenant 1 ou plusieurs régions
    - **0** : Première région
        - **colorMode** : Si la couleur de la région est unique, saisir "false". Si la couleur est variable dépendamment de la valeur de la query, saisir "true". 
        - **coords** : Renseigner les coordonnées de la région à dessiner seulement si vous n'utiliser pas un idSVG. Si c'est la cas, laisser tous à 0.
        - **id** : id de la région
        - **idSVG** : id de la zone SVG, si vous utilisez une zoneSVG. Sinon, laisser vide.
        - **img** : permet de renseigner une image autre que svg
        - **label** : Nom de la zone
        - **linkURL**
            - **followLink** : Permet une redirection vers le lien renseigné en cliquant sur la region
            - **hoveringTooltipLink** : Permet une redirection vers le lien renseigné dans le tool type en cliquant sur le lien
            - **hoveringTooltipText** : Affiche le lien dans le tool type qui apparait quand on passe le curseur sur la zone ou sur le point
        - **lowerLimit** : Si **colorMode** est false, premet de renseigner une couleur pour l'interieur et le contour de la zone. Si **ColorMode** est true, permet de définir des couleurs dépendamment des valeurs de la query associé.
            - **0**	: Première couleur
                - **backColor**	: Renseigner une couleur sous la forme #7FFF00 par exemple pour la background
                - **borderColor** : Renseigner une couleur sous la forme #7FFF00 par exemple pour la bordure
                - **id** : id de la couleur
                - **lowerLimitMax** : Valeur maximume pour cette couleur
                - **lowerLimitMin** : Valeur minimal pour cette couleur
                - **sizeBorder** : epaisseur de la bordure
        - **mainMetric**	
            - **expr** : Expresison en PrompQL
            - **format** "" (Laisser vide)
            - **key** : permet de filtrer les données réçues par la Query pour ne garder que ce qui vous importe.
            - **keyValue** : permet de filtrer les données réçues par la Query pour ne garder que ce qui vous importe.
            - **manageValue** : Vous avez le choix entre "sum", "avg" ou "error"
            - **refId** : Référence de la metric associé a cette région
            - **returnQuery** : Ne pas renseigner.      
            - **unit** : (Laisser vide)
        - **meta** : ""     
        - **metrics** : Il s'agit d'un tableau de metric pour ajouter des metrics auxilières
            - **0**
                - **expr** : Expresison en PrompQL
                - **format** "" (Laisser vide)
                - **key** : permet de filtrer les données réçues par la Query pour ne garder que ce qui vous importe.
                - **keyValue** : permet de filtrer les données réçues par la Query pour ne garder que ce qui vous importe.
                - **manageValue** : Vous avez le choix entre "sum", "avg" ou "error"
                - **refId** : Référence de la metric associé a cette région
                - **returnQuery** : Ne pas renseigner.      
                - **unit** : (Laisser vide)
            - **1**
                - ...
        - **mode** : Renseigner "true" si vous utilisez une image svg. Sinon renseigner "false"
        - **orientedLink** :
            - **0**
                **name** : string;
                **orientationLink** : Choisir "monodirectional" ou "bidirectional"
                **pointAPositionX** : Choisir la position horizontal du point A entre "-100" et "100"
                **pointAPositionY** : Choisir la position vertical du point A entre "-100" et "100"
                **colorCoordinateA** : string;
                **pointBPositionX** : Choisir la position horizontal du point B entre "-100" et "100"
                **pointBPositionY** : Choisir la position vertical du point B entre "-100" et "100"
                **colorCoordinateB** : string;
                **valueMainMetricA** : string;
                **valueMainMetricB** : string;
                **pointIn** : string;
                **pointOut** : string;
                **regionIn** : string;
                **regionOut** : string;
                **zIndex** : number;
                **pointCPositionX** : Choisir la position horizontal du point A entre "-100" et "100";
                **pointCPositionY** : Choisir la position horizontal du point A entre "-100" et "100";
                **isIncurved** : Saisir "true" si votre lien est incurvé. Sinon, saisir "false"
                **mainMetricB** : Renseigner le metric de B
                **metricsB** : Renseigner les metrics auxilière de B

        - **positionParameter**
            - **labelAPositionX** : Choisir la position horizontal du label A entre "-100" et "100"
            - **labelAPositionY** : Choisir la position vertical du label A entre "-100" et "100"
            - **labelBPositionX** : Choisir la position horizontal du label B entre "-100" et "100"
            - **labelBPositionY** : Choisir la position vertical du label B entre "-100" et "100"
            - **tooltipPositionA** : Position du tooltip A
            - **tooltipPositionB** : Position du tooltip B
        - **textObj**
            - **colorBack** : Choisir la couleur du background du texte en rgba. Exemple : rgba(255, 255, 255, 0)
            - **colorText** : Choisir la couleur du texte en rgba. Exemple : rgba(0, 0, 0, 1)
            - **generateAuxiliaryElement** : Permet d'afficher 
                - **addColorBackElement** : Ajouter une couleur au background. "true" ou "false"
                - **addColorTextElement** : Ajouter une couleur au texte. "true ou "false"
                - **colorBackElement** : Choisir la couleur du background
                - **colorTextElement** :  Choisir la couelur du texte 
                - **displayObjectInText** : Afficher l'object dans le texte. "true" ou "false"
                - **displayObjectPermanently** : Afficher l'objet de facon permanente. "true" ou false"
                - **legendElement** : Associer une légende à votre élément 
                - **numericFormatElement** : élément de format numérique 
                - **unityMesureElement** : Affiche une unité de mesure
            - **generateObjectText** : Généré un objet texte. "true" ou "false"
            - **isTextRegion** : affichage du texte dans l'élément ou l'infobulle
            - **legend** : Permet d'ajouter une légende
            - **style**	
                - **bold** : "True" ou "False" pour mettre le texte en gras
                - **italic** : "True" ou "False" pour mettre le texte en italique
                - **underline** : "True" ou "False" pour mettre le texte en sousligné
            - **unit** : Permet d'afficher une unité de mesure
            - **value**	: Valeur de l'objet
            - **valueGenerateObjectText** : A utiliser et remplir si generateObjectText est true lors de l'utilisation de la variable pour stocker des données
                - **addColorBackElement** : Ajouter une couleur au background. "true" ou "false"
                - **addColorTextElement** : Ajouter une couleur au texte. "true ou "false"
                - **colorBackElement** : Choisir la couleur du background
                - **colorTextElement** :  Choisir la couelur du texte 
                - **displayObjectInText** : Afficher l'object dans le texte. "true" ou "false"
                - **displayObjectPermanently** : Afficher l'objet de facon permanente. "true" ou false"
                - **legendElement**	: Associer une légende à votre élément 
                - **numericFormatElement** : élément de format numérique 
                - **unityMesureElement**: Affiche une unité de mesure
        - **traceBack** : Permet d'associer une couleur au background. "true" ou "false"
        - **traceBorder** : Permet d'associer une couleur à la bordure. "true" ou "false"
    - **1** : Deuxième région
        - ...
            - ...
                - ...