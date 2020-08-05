# Comment ajouter un fichier json global

[![](../../screenshots/other/Go-back.png)](README.md)

Le tutorial suivant va vous montrer comment importer les différents fichiers JSON présenté dans le [tutorial1](tutorial1.md) dans un seul fichier global.json

## Ajouter une Query

![step 05](../../screenshots/demo/tutorial01/step05.jpg)

La première étape passe par l'onglet `Queries`

Vous devez :

- compléter la ligne `metrics` avec la ligne suivante

```
rate(go_memstats_gc_cpu_fraction[5m]) * 100000
```

Le marqueur "A" sera utilisé pour identifier cette requête

## Créer le fichier json global

Pour créer le fichier global json, vous pouvez aller dans le [fichier d'importation](./../editor/import.md) et suivre les instructions

## Ajouter le fichier global

Pour ce tutoriel, nous utiliserons le fichier json disponible directement sur le dépôt :

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo10-01-global.json
```

Une fois que vous êtes dans le menu `Vizualisation`, allez dans la section `Import Files`.

Ensuite, copiez et collez le dernier lien dans la section `Global Url Import`.

Cliquez sur `Finish` lorsque c'est terminé.

![global_import](../../screenshots/demo/tutorial10/GlobalImport.png)

## Result

![result](../../screenshots/demo/tutorial10/result.png)

# Bonus

Nous vous mettons à disposition 2 fichiers supplémentaires associés :

- [Tutorial2](tutorial2.md)

  - Créer les `queries`
  - Importer le fichier global suivant

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo10-02-global.json
```

- [Tutorial3](tutorial3.md)

  - Créer les `queries`
  - Importer le fichier global suivant

```
https://raw.githubusercontent.com/atosorigin/grafana-weathermap-panel/master/docs/resource/demo10-03-global.json
```
