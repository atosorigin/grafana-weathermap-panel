# Settings server

L'importation de fichiers par liens s'effectue par un serveur associé.

Si vous n'effectuez pas l'opération, vous ne pourrez pas bénéficier de la fonctionnalité car vous aurez le message d'erreur [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) 

La résolution s'effectue avec un serveur associén soit en installant [Apache]() ou [Nginx]()



# Apache 2


Il vous faut au préalable avoir installer la version Apache 2.4.x



## Enable CORS header on apache2

Il faut modifier le fichier de configuration de la manière suivante

A partir du terminal : 

```
sudo /etc/apache2/apache2.conf
```


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
    
Après avoir sauvegarder, vous chargez l'entete et relancer le service : 

```
$ sudo a2enmod headers

$ sudo systemctl restart apache2

```

Vous placez les fichiers demo dans le dossier

```
/var/www/html

```

pour obtenir le résultat suivant



![path file](../../screenshots/appendix/file-import.jpg)





# Nginx
