# Installation

[![](../../screenshots/other/Go-back.png)](README.md)

- Weathermap nécessite [Grafana](https://www.grafana.com/) v6.7 pour fonctionner (version inférieure non testée). Téléchargez-la et installez-la d'abord.

```
Le plugin Weathermap n'est pas compatible avec Grafana 7.x
```

## Dépendances

- Grafana 6.7.x

## Version officielle

Allez sur la page officielle de [weathermap-panel](https://grafana.com/plugins/grafana-weathermap-panel) et cliquez sur "install Plugin".

## Automatique

```sh
grafana-cli plugins install grafana-weathermap-panel
```

## Manuel

```sh
$ git clone https://github.com/atosorigin/grafana-weathermap-panel.git
```

Déplacer le dossier dans le dossier plugins de grafana

```sh
$ mv grafana-weathermap-panel /var/lib/grafana/plugins
$ systemctl restart grafana-server
```
