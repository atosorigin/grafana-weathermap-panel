# template file

[![](../../screenshots/other/Go-back.png)](README.md)

Le fichier **template** doit être déclaré comme un fichier JSON comme ceci :

```
{
  "global": {
    // global
  },
  "default": {
    "templates": [
      {
        // Point et/ou Link et/ou region
      }
    ]
  },
  "templates": [
      {
        // Point et/ou Link et/ou region
      },
   ]
}


```

## Global

Le format **global** consiste en une liste d'interceptions de valeurs.

La liste des éléments est décrite dans la partie dédiée [gabarit global](gabarit-json-global.md)

## Default templates

La partie **default templates** doit avoir au moins une des structures suivantes :

- [gabarit point](gabarit-json-point.md)
- [gabarit link](gabarit-json-link.md)
- [gabarit region](gabarit-json-region.md)

## Templates

la partie **modèle** est constituée d'une ou plusieurs des structures ci-dessous.

### Point

Le format **point** consiste en une liste d'ordonnées de valeurs et d'ensembles de paires (clé/valeur).

La liste des éléments est décrite dans la partie dédiée [gabarit point](gabarit-json-point.md)

### Link

Le format **link** consiste en une liste d'ordonnées de valeurs et d'ensembles de paires (clé/valeur).

La liste des éléments est décrite dans la partie dédiée [gabarit link](gabarit-json-link.md)

### Region

Le format **region** consiste en une liste d'ordonnées de valeurs et d'ensembles de paires (clé/valeur).

La liste des éléments est décrite dans la partie dédiée [gabarit region](gabarit-json-region.md)

# Voir aussi

- [tutorial 13 : Gabarit dynamique](../demo/tutorial13.md)
- [tutorial 14 : Gabarit dynamique avancé](../demo/tutorial14.md)
- [tutorial 15 : Chargement multiple de gabarit](../demo/tutorial15.md)
