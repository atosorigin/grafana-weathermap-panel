
## Construire un fichier SVG

### Background

L'image de fond est une part entière du plugins.

Il est rendu possible de le rendre dynamique. Pour cela, l'image de fond doit être au format vectorisé [SVG](https://fr.wikipedia.org/wiki/Scalable_Vector_Graphics)


## Editeur

### inkscape

Le logiciel préconisé pour réaliser une image de fond sera [Inkscape](https://inkscape.org). Il est disponible pour les environnements :

  - Linux
  - Windows
  - Mac

  le fichier sera sauvegardé au format **SVG simple** ou **SVG Inkscape**



### Draw.io

L'éditeur [Draw.io](https://draw.io/) est accessible à partir d'un navigateur.

Vous devez activer une des librairies shapes `networking` pour obtenir la représentation graphique de votre réseau.

Vous devez exporter l'image au format SVG
Les paramètres obligatoires à cocher sont `shadow` and `embed images`


## Sauvegarde

![main metric](../../screenshots/appendix/draw-export-svg.png)


Il est important que chaque élément doit posséder une clef `ID` pour que le fichier créé puisse être importer dans le plugin.


> Attention : 
> il ne faut pas sauvegarder au format à plat, ni compresser le fichier
