# Gabarit

[![](../../screenshots/other/Go-back.png)](README.md)

## Default Gabarit URL

![](../../screenshots/editor/gabarit/defaut.png)

Pour l'importation Global, il est nécessaire de remplir le lien du fichier JSON qui comprend toutes les informations nécessaires pour remplir le tableau de bord.

Vous entrez l'url du fichier et vous cliquez sur le bouton `Add`.

> Vous ne pouvez avoir qu'un seul fichier gabarit par défaut

Le fichier **gabarit** doit être déclaré comme un fichier JSON comme ceci :

```
{
  "global": {
     // global
  },
  "default": {
    "templates": [
      {
        // Point et/ou Link et/ou Region
      }
    ]
  }
}

```

Cette structure est fixe. Le modèle par défaut doit impérativement comporter une région, un point et un lien.

La décomposition du fichier [default template](../appendix/gabarit-default.md) est disponible avec tous les détails.

## URL List

![](../../screenshots/editor/gabarit/url-list.png)

Vous devez pointer vers le fichier modèle en entrant un lien vers le fichier souhaité.

Ensuite, vous cliquez sur le bouton `Add`, le lien sera ajouté dans la liste correspondante.

Pour terminer, vous devez cliquer sur `finish`.

Vous pouvez ajouter des fichiers d'importation supplémentaires à volonté.

Le fichier **modèle** doit être déclaré comme un fichier JSON comme ceci :

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
  },
  "templates": [
      {
        // Point and/or Link and/or Region
      },
   ]
}

```

Il est important de noter que vous devez avoir un **default templates** associé à un **template**, c'est-à-dire que si vous voulez avoir un modèle (point ou lien ou région), vous devez avoir un **default templates**.

Vous pouvez avoir un modèle avec un lien et une région, alors vous aurez besoin d'un **default templates** avec un lien et une région
 
> Si le rendu n'est qu'une région, vous devez avoir une région dans les **default templates** et **template**

Cette structure est fixe. Le modèle par défaut doit impérativement comporter une région, un point et un lien.

La décomposition du fichier [default template](../appendix/gabarit-template.md) est disponible avec tous les détails.

## Gabarit List

![](../../screenshots/editor/gabarit/gabarit-list.png)

Cet onglet vous permet d'associer un fichier modèle à une demande d'identification. Lorsque l'association est faite, vous devez cliquer sur **Load** pour que Grafana puisse afficher le rendu.

> Vous devez d'abord charger un gabarit par défaut

# Voir aussi

- [tutorial 13 : Gabarit dynamique](../demo/tutorial13.md)
- [tutorial 14 : Gabarit dynamique avancé](../demo/tutorial14.md)
- [tutorial 15 : Chargement multiple de gabarit](../demo/tutorial15.md)
