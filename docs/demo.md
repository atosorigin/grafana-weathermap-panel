# Demo

La version `demo` offre la possibilité de voir de suite les métrics qui sont disponible dans le plugin.
La configuration est déjà préconfiguré.


## Etape 1 : Architecture

La première étape permet de charger une image d'arrière plan. Pour cela, vous ajouter un nouveau [Dashboard](http://localhost:3000/dashboard/import)


## Etape 2 : Chargement fond d'écran
La seconde étape permet de charger une image d'arrière plan.
Vous éditez le rendu


dispklay u [Dashboard](http://localhost:3000/dashboard/new)





## Construire son weatherMap

new Dashboard


  - tab queries
query A : rate(node_cpu{cpu="cpu0",mode="system"}[1m])
Query B : rate(node_cpu{cpu="cpu0",mode="system"}[30s])

  - tab visualization

select plugin : `WeatherMap`

* Onglet display

saisir l'url de l'image SVG d'arrière plan `image url`

le chemin doit être encoder en base64. Pour cela, il faut faire "clic droit \ Copier l'adresse de l'image"

Saisir une dimension largeur x hauteur

Sauvegarder

Etape 2 :  Importer des régions

* onglet Import files

Mono url

add le chemin du fichier JSON
