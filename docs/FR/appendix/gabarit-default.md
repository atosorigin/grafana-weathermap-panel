# Gabarit default file

[![](../../screenshots/other/Go-back.png)](README.md)


Le script complet [gabarit-default.json](../../resource/sampleJson/gabarit-default.json) est disponible, dont les détails de construction se trouvent ci-dessous.

Le fichier **gabarit** doit être déclaré comme un fichier JSON comme ceci :

```
{
  "global": {
     // global
  },
  "default": {
    "templates": [
      {
        // Point and/or Link and/or Region
      }
    ]
  }
}

```

Cette structure est fixe. Le modèle par défaut doit impérativement comporter une région, un point et un lien.

## Global

Le format **global** consiste en une liste d'interceptions de valeurs.

La liste des éléments est décrite dans la partie dédiée [gabarit global](gabarit-json-global.md)

## Point

Le format **point** consiste en une liste d'ordonnées de valeurs et d'ensembles de paires (clé/valeur).

La liste des éléments est décrite dans la partie dédiée [gabarit point](gabarit-json-point.md)

## Link

Le format **link** consiste en une liste d'ordonnées de valeurs et d'ensembles de paires (clé/valeur).

La liste des éléments est décrite dans la partie dédiée [gabarit link](gabarit-json-link.md)

## Region

Le format **region** consiste en une liste d'ordonnées de valeurs et d'ensembles de paires (clé/valeur).

La liste des éléments est décrite dans la partie dédiée [gabarit region](gabarit-json-region.md)

# Voir aussi

- [tutorial 13 : Gabarit dynamique](../demo/tutorial13.md)
- [tutorial 14 : Gabarit dynamique avancé](../demo/tutorial14.md)
- [tutorial 15 : Chargement multiple de gabarit](../demo/tutorial15.md)
