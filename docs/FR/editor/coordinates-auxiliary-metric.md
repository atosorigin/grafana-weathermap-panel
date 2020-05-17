# Auxiliary metric
[![](../../screenshots/other/Go-back.png)](coordinates.md)

Cette fonction est commune pour 

- [Region](coordinates-space-region.md)
- [Point](coordinates-space-point.md)
- [Oriented Link](coordinates-space-link.md)


![main metric](../../screenshots/editor/coordinates/auxiliary-metric/metric.png)


- L'intérêt de la métrique auxiliaire et d'ajouter d'autres valeurs à une région ou à un point.
- La query de la main métrique est recopié ici. 
- "Key" et "Value key" permettent de filtrer les données reçues par la Query pour ne garder que ce qui vous importe.


## Exemple 

![main metric](../../screenshots/editor/coordinates/auxiliary-metric/metric-key.png)


Dans l'hypothèse où vous récupérez plusieurs valeurs, le champ suivant propose de vous retourner suivantes : 

- Average : Renvoie une moyenne des valeurs reçues.
- Total : Renvoie la somme total des valeurs reçues
- Error : Retourne la valeur si celle-ci est unique, retourne "erreur" s'il y a plusieurs valeurs

Choisissez celle qui vous désirez.






