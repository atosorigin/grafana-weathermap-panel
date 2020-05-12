# Main metric
[![](../../screenshots/other/Go-back.png)](coordinates.md)

Cette fonction est commune pour 

- [Region](coordinates-space-region.md)
- [Point](coordinates-space-point.md)
- [Oriented Link](coordinates-space-link.md)


![main metric](../../screenshots/editor/coordinates/main-metric/main-metric.jpg)


Le paramètre suivant permet de 

- Associer une Query, défini au préalable, à une région ou à un point. Cela permettra de définir une valeur et/ou une couleur à une zone spécifique en fonction de la Query.

![main metric](../../screenshots/editor/coordinates/main-metric/main-metric-query-a.jpg)


- "Key" et "Value key" permettent de filtrer les données reçues par la Query pour ne garder que ce qui vous importe.

par exemple 


![main metric](../../screenshots/editor/coordinates/main-metric/main-metric-key-value.png)


Dans l'hypothèse où vous récupérez plusieurs valeurs, le champ suivant propose de vous retourner suivantes : 

- Average : Renvoie une moyenne des valeurs reçues.
- Total : Renvoie la somme total des valeurs reçues
- Error : Retourne la valeur si celle-ci est unique, retourne "erreur" s'il y a plusieurs valeurs

Choisissez celle qui vous désirez.





