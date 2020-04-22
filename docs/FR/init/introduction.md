# Introduction

WeatherMap Panel Plugin pour Grafana est un logiciel gratuit. Vous pouvez le redistribuer et/ou le modifier selon les termes de la licence publique générale GNU telle que publiée par la Free Software Foundation

WeatherMap Panel Plugin est distribué dans l'espoir qu'il sera utile, mais SANS AUCUNE GARANTIE ; sans même la garantie implicite de QUALITÉ MARCHANDE ou d'ADAPTATION À UN USAGE PARTICULIER. Voir la licence publique générale GNU pour plus de détails.

Certaines parties de cette distribution de logiciels sont d'autres auteurs. Veuillez consulter le fichier README pour les détails d'attribution et de licence.

### Exemple :

![exemple](../../screenshots/init/exemple.png)

Exemple de sortie de WeatherMap Panel Plugin

## WeatherMap Panel Plugin

WeatherMap Panel Plugin pour Grafana est inspiré du plugin WeatherMap pour Cacti.

Ce plugin est créé pour cartographier un réseau informatique. Cela permet d'être informé en temps réel en cas de dysfonctionnement d'un système informatique ou autre.

Il prend les données de vos périphériques réseau et les utilise pour fournir un aperçu d'une seule page de l'état actuel du réseau

De nombreux paramètres sont disponibles pour personnaliser le rendu.

### Arrière-plan

Pour le fond de votre carte, vous pouvez utiliser une image vectorielle ou une image bitmap. 

L'image vectorielle vous permet d'utiliser facilement des formes d'image pour ajouter des couleurs ou des valeurs à l'image

### Espace coordonné

Sur ce fond, il est possible de créer plusieurs objets pour représenter votre réseau. 


Vous pouvez ajouter :

- Région
    - Si vous souhaitez utiliser une forme d'image vectorielle
    - Si vous souhaitez rassembler un ensemble d'appareils en un seul bloc

- Point
    - Vous pouvez ajouter un point où vous voulez sur votre fond et y ajouter une métrique, une couleur ou autre

- Lien orienté
    - Permet de créer un lien entre deux objets en y ajoutant une métrique. Cela peut être utile pour représenter un transfert de données ou autre chose.




![resultat](../../screenshots/init/resultat.png)
