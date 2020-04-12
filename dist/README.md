# WeatherMap

Inspired by the [WeatherMap plugin for Cacti](https://www.network-weathermap.com/), WeatherMap Panel Plugin for Grafana.

Compatibility with  Prometheus

This project is still in development.

# Installation

* Weathermap requires [Grafana](https://www.grafana.com/) v6.6+ to run (not tested lower version). Download and install it first.

## Dependencies

- Grafana 6.6.x or 6.7.x
- Yarn 1.21.1


## Official version

Go to [weathermap-panel](https://grafana.com/plugins/grafana-weathermap-panel) official page and click on "install Plugin".


## Automatic

```sh
grafana-cli plugins install grafana-weathermap-panel
```

## Manual

```sh
$ git clone https://github.com/atosorigin/grafana-weathermap-panel.git
```

move the folder to grafana's plugins folder

```sh
$ mv grafana-weathermap-panel /var/lib/grafana/plugins
$ systemctl restart grafana-server
```



# Getting Help

* [WeatherMap documentation](https://github.com/atosorigin/grafana-weathermap-panel/tree/master/docs)

* [WeatherMap Demo](https://github.com/atosorigin/grafana-weathermap-panel/tree/master/demo)


# History

* [Changelog](https://github.com/atosorigin/grafana-weathermap-panel/blob/master/CHANGELOG.md)
