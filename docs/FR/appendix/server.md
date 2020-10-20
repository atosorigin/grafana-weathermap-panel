# Settings server

[![](../../screenshots/other/Go-back.png)](README.md)

L'importation de fichiers par des liens est effectuée par un serveur associé.

Si vous n'effectuez pas l'opération, vous ne pourrez pas profiter de la fonctionnalité car vous obtiendrez le message d'erreur [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

La résolution se fait avec un serveur associé soit en installant [Apache](https://www.apache.org/)

# Apache 2

Vous devez d'abord installer Apache 2.4.x.

## Activer l'en-tête CORS sur apache2

Le fichier de configuration doit être modifié comme ceci

Depuis le terminal :

```
sudo nano /etc/apache2/apache2.conf
```

change:

```
    <Directory /var/www/>
	    Options Indexes FollowSymLinks
	    AllowOverride None
	    Require all granted
    </Directory>
```

en:

```
    <Directory /var/www/>
	    Options Indexes FollowSymLinks
	    AllowOverride None
	    Require all granted
	    Header set Access-Control-Allow-Origin "*"
    </Directory>
```

Après l'enregistrement, vous chargez l'en-tête et redémarrez le service :

```
$ sudo a2enmod headers

$ sudo systemctl restart apache2

```

Vous placez les fichiers de _resource_ dans le dossier suivant

```
/var/www/html

```

# Resultat

pour obtenir le résultat suivant

![path file](../../screenshots/appendix/file-import.jpg)
