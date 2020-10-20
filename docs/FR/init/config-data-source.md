# Configuration data source

[![](../../screenshots/other/Go-back.png)](README.md)

## Les données des séries chronologiques comme source de données


Le plugin `grafana-weathermap-panel` est actuellement compatible avec Prometheus.

Les autres bases de données comme : Graphite, InfluxDB, OpenTSDB, Prometheus, MySQL, Postgres, MSSQL, Elasticsearch pourront être de nouveaux compatibles dans les prochaines versions.

## Exemple d'utilisation avec Prometheus

Vous pouvez utiliser l'interface de Grafana à partir des modules disponibles ci-dessus

### Ajouter la source de données

- Dans la barre latérale de gauche, cliquez sur le bouton `Configuration`
- Cliquez sur le bouton `Add data source` dans l'en-tête supérieur.
- Sélectionnez Prometheus dans la liste déroulante Type.

![data source](../../screenshots/init/datasource.jpg)
![data source](../../screenshots/init/add-data-source.png)

### Insertion d'une `query` dans un tableau de bord

Pour insérer une requête dans un dashboard, vous devez d'abord créer ce dashboard, puis créer un panel.

- Dans la barre latérale de gauche, cliquez sur le bouton `Create Dashboard`

![data source](../../screenshots/init/New-dashboard.png)

- Cliquez ensuite sur `Add Query`

![query](../../screenshots/init/query.png)

- Dans les paramètres du panel, vous devez choisir la requête. Ici, choisissez `Prometheus`.
- Vous pouvez ensuite choisir les métriques à visualiser

### Externe

Il est possible d'utiliser la connexion sans passé par l'interface de Grafana
