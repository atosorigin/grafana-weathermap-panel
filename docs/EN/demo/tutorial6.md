 
# create modelisation advanced





![step 05](../../screenshots/demo/tutorial5/step05.jpg)


http_request_duration_microseconds

Nous obtenons de nombreux résultats 



```
http_request_duration_microseconds{handler="alertmanagers",instance="localhost:9090",job="prometheus",quantile="0.5"}
http_request_duration_microseconds{handler="alertmanagers",instance="localhost:9090",job="prometheus",quantile="0.9"}
http_request_duration_microseconds{handler="alertmanagers",instance="localhost:9090",job="prometheus",quantile="0.99"}
http_request_duration_microseconds{handler="alerts",instance="localhost:9090",job="prometheus",quantile="0.5"}
http_request_duration_microseconds{handler="alerts",instance="localhost:9090",job="prometheus",quantile="0.9"}
http_request_duration_microseconds{handler="alerts",instance="localhost:9090",job="prometheus",quantile="0.99"}
http_request_duration_microseconds{handler="config",instance="localhost:9090",job="prometheus",quantile="0.5"}
http_request_duration_microseconds{handler="config",instance="localhost:9090",job="prometheus",quantile="0.9"}
http_request_duration_microseconds{handler="config",instance="localhost:9090",job="prometheus",quantile="0.99"}
http_request_duration_microseconds{handler="flags",instance="localhost:9090",job="prometheus",quantile="0.5"}
http_request_duration_microseconds{handler="flags",instance="localhost:9090",job="prometheus",quantile="0.9"}
http_request_duration_microseconds{handler="flags",instance="localhost:9090",job="prometheus",quantile="0.99"}
http_request_duration_microseconds{handler="graph",instance="localhost:9090",job="prometheus",quantile="0.5"}
http_request_duration_microseconds{handler="graph",instance="localhost:9090",job="prometheus",quantile="0.9"}
http_request_duration_microseconds{handler="graph",instance="localhost:9090",job="prometheus",quantile="0.99"}
http_request_duration_microseconds{handler="heap",instance="localhost:9090",job="prometheus",quantile="0.5"}
http_request_duration_microseconds{handler="heap",instance="localhost:9090",job="prometheus",quantile="0.9"}
http_request_duration_microseconds{handler="heap",instance="localhost:9090",job="prometheus",quantile="0.99"}
http_request_duration_microseconds{handler="label_values",instance="localhost:9090",job="prometheus",quantile="0.5"}
http_request_duration_microseconds{handler="label_values",instance="localhost:9090",job="prometheus",quantile="0.9"}
http_request_duration_microseconds{handler="label_values",instance="localhost:9090",job="prometheus",quantile="0.99"}
http_request_duration_microseconds{handler="options",instance="localhost:9090",job="prometheus",quantile="0.5"}
http_request_duration_microseconds{handler="options",instance="localhost:9090",job="prometheus",quantile="0.9"}
http_request_duration_microseconds{handler="options",instance="localhost:9090",job="prometheus",quantile="0.99"}
http_request_duration_microseconds{handler="prometheus",instance="localhost:9090",job="prometheus",quantile="0.5"}
http_request_duration_microseconds{handler="prometheus",instance="localhost:9090",job="prometheus",quantile="0.9"}
http_request_duration_microseconds{handler="prometheus",instance="localhost:9090",job="prometheus",quantile="0.99"}
http_request_duration_microseconds{handler="query",instance="localhost:9090",job="prometheus",quantile="0.5"}
http_request_duration_microseconds{handler="query",instance="localhost:9090",job="prometheus",quantile="0.9"}
http_request_duration_microseconds{handler="query",instance="localhost:9090",job="prometheus",quantile="0.99"}

```


![step 06](../../screenshots/demo/tutorial5/step06.jpg)


nous sélections une query 




l'élément handler sera utilisé comme argument variable 



![step 07](../../screenshots/demo/tutorial5/step07.jpg)



= probleme





















