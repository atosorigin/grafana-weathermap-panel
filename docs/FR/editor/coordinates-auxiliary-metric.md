# Auxiliary metric
[![](../../resource/Go-back.png)](coordinates.md)

Cette fonction est commune pour 

- [Region](coordinates-space-region.md)
- [Point](coordinates-space-point.md)
- [Oriented Link](coordinates-space-link.md)


![main metric](../../screenshots/editor/coordinates/auxiliary-metric/metric.png)


- L'intêret de la metric auxilière et d'ajouter d'autres valeurs à une region ou à un point.
- La query de la main metric est recopier ici. 
- "Key" et "Value key" permettent de filtrer les données réçues par la Query pour ne garder que ce qui vous importe.


par exemple 

![main metric](../../screenshots/editor/coordinates/auxiliary-metric/metric-key.png)


Dans l'hypothese ou vous récupéré pluseurs valeurs, le champ suivant propose de vous retourner suivantes : 

- Average : Renvoie une moyenne des valeurs reçues.
- Total : Renvoie la somme total des valeurs reçues
- Error : Retourne la valeur si celle-ci est unique, retourne "erreur" s'il y a plusieurs valeurs

Choisissez celle qui vous désirez.





