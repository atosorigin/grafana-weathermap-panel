

The `dashboard` directory offers different examples for the WeatcherMap plugin of grafana.

## Settings

the above demos were made with an associated server. The configuration of this one is explained on the dedicated page : [settings server](../docs/annex/server.md)



## Demo1

The associated files you can import are =>

![demo1](../docs/screenshots/demo/demo1.png)

  - Picture background SVG => file *demo1-background.svg*        
  - Displays a selected element SVG => file *demo1-coordRegion.json*      
  - Adds links => file *demo1-Links.json*            
  - Adds points => file *demo1-Point.json*            
  - Settings demo1 => file *demo1-total.json*

To see the tutorial, [follow this link](../docs/EN/demo/tutorial1.md)


  
    
## Demo2

The associated files you can import are =>

![demo3](../docs/screenshots/demo/demo3.jpg)

  - Picture background SVG => file *demo3-background.svg*        
  - Displays a selected element SVG and selected region => file *demo3-coordRegion.json*     
  - Adds points => file *demo3-Point.json*            
  - Adds links => file *demo3-Links.json*            

To see the tutorial, [follow this link](../docs/EN/demo/tutorial2.md)
  
## Demo4

![demo5](demo4-background.jpg)
To see the tutorial, [follow this link](../docs/EN/demo/tutorial5.md)
  
## Demo5

The associated files you can import are =>

![demo5](../docs/screenshots/demo/demo5.jpg)



  - Picture background SVG => file *demo5-background.svg*        
  - query : rate(go_memstats_alloc_bytes[5m])
  - Displays a selected element SVG and selected region => file *demo5-coordRegion.json*     
  - Adds points => file *demo5-Point.json*  
  - Adds links => file *demo5-Links.json* 
  
To see the tutorial, [follow this link](../docs/EN/demo/tutorial3.md)


  
## Demo6

The associated files you can import are =>

![demo6](../docs/screenshots/demo/demo6.jpg)



  - Picture background SVG => file *demo6-background.svg*        
  - Displays a selected element SVG and selected region => file *demo6-region-svg.json*     
  - Adds points => file *demo6-point.json*  
  - Adds links => file *demo6-links.json* 
  - query A : rate(node_network_transmit_bytes{device="enp0s3"}[10s])*8/1024/1024
  - query B : rate(node_network_receive_bytes{device="enp0s3"}[10s])*8/1024/1024
  
To see the tutorial, [follow this link](../docs/EN/demo/tutorial4.md)
