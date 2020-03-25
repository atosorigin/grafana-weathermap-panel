# settings server




# Enable CORS header on apache2

- prérequis:
    - admin

- edit file:
    ```/etc/apache2/apacche2.conf```
    change:
    ```
    <Directory /var/www/>
	    Options Indexes FollowSymLinks
	    AllowOverride None
	    Require all granted
    </Directory>
    ```
    to:
    ```
    <Directory /var/www/>
	    Options Indexes FollowSymLinks
	    AllowOverride None
	    Require all granted
	    Header set Access-Control-Allow-Origin "*"
    </Directory>
    ```
- set header:
    ```sudo a2enmod headers```
- reaload service:
    ```sudo systemctl restart apache2```
