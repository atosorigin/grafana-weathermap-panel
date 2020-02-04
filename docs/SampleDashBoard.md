# Dashboard Grafana/Prometheus

## Prerequisites

    - install/run prometheus : "https://prometheus.io/docs/prometheus/latest/installation/"
    - install/run node_exporter and link to prometheus : "https://prometheus.io/docs/guides/node-exporter/"
    - install/run grafana and link to prometheus : "https://prometheus.io/docs/visualization/grafana/"

## Create sample dashboard

    - In grafana create a new dashboard.
    - In hight right corner select your time range and refresh
    - In the dashboard create 4/5 panel
    - Edit evry panels:
        - Use multiples visualizations and change their options
        - In query panel select prometheus query
        - In metrics field u can use most of value find here "http://localhost:9100/metrics" you can find this url at "http://localhost:9090/targets"
            - Some example:
                - rate(node_cpu_seconds_total{mode="system"}[1m])
                - node_filesystem_avail_bytes
                - node_filesystem_avail_bytes
                - node_filesystem_avail_bytes
                - rate(node_network_receive_bytes_total[1m])
                - rate(promhttp_metric_handler_requests_total[1m])
    - Save your dashboard
    - Go to dashboard setting in {{}}JSON model you can copy the JSON