# Comment créer une région en mode coordonnée

[![](../../screenshots/other/Go-back.png)](README.md)

## Ajouter un dashboard SVG

![step 01](../../screenshots/demo/tutorial01/step01.jpg)

L'ajout d'une image de fond se fait à partir du menu `display`.

L'image sélectionnée sera [demo01-background.svg](../../resource/demo01-background.svg).

Pour ce faire, nous la téléchargeons en base64 avec la fonction `Copier l'adresse de l'image`, ou avec le lien direct du dépôt :

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo01-background.svg

```

Les dimensions (largeur x hauteur) seront automatiquement renseignées.

Il est possible d'avoir plus de détails avec la page [display](../editor/display.md).

## Ajouter une région avec le mode de coordonnées

Dans cette section, nous expliquons comment créer différentes régions sur le dashboard avec le mode de coordonnées.

![header](../../screenshots/demo/tutorial09/header.png)

L'accès s'effectue à partir du menu `Coordinates space`, `region` et `Àdd coordinate space`. Nous renseignons le `label`

![AddCoordiante](../../screenshots/demo/tutorial09/RegionCoordinateMode.png)

Ici, nous pouvons voir une section avec `X min`,`X max`,`Y min`,`Y max`.

Le point de référence est le point (0,0) qui se trouve en bas à gauche de l'image.

Créons ces trois régions sur le tableau de bord.

Nous aurons donc les données suivantes :

Region 1

![zone1](../../screenshots/demo/tutorial09/zone1.png)

Region 2

![zone2](../../screenshots/demo/tutorial09/zone2.png)

Region3

![zone3](../../screenshots/demo/tutorial09/zone3.png)

## Ajoutez de la couleur à nos régions

Nous ajouterons différentes couleurs à nos régions pour les différencier. Allez à la `LowerLimit` et activez `Trace the border`. Ensuite, choisissez une couleur et une taille pour la frontière

![lowerLimit](../../screenshots/demo/tutorial09/lowerLimit.png)

## Résultat

Une fois que vous avez fait cela pour vos trois régions, vous devriez avoir quelque chose comme cela :

![result](../../screenshots/demo/tutorial09/result.png)

### Importer un fichier JSON

- Il est possible d'ajouter toutes ces configurations par le biais de fichiers json en faisant une importation. Pour savoir comment faire, [suivez ce lien](../editor/import.md)

Et voici le fichier JSON :

- [demo09-region](../../resource/demo09-region.json)
