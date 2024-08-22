- iframe
- api

L'iFrame-API implémente la fonctionnalité *postMessage* de HTML5 (les navigateurs récents sont compatibles avec *postMessage*) pour faire communiquer la carte et la page appelante.

Concrètement vous avez juste à ajouter le script de l'API sur votre page :

```javascript
<!-- 1. Charger le code de l'API -->
<script type="text/javascript" src="https://macarte.ign.fr/carte/MapIFrameAPI.js"></script>
```

ainsi que l'iFrame correspondant à votre carte :

```javascript
<!-- 2. <iframe> qui va contenir la carte a afficher -->
<iframe id="map" src="https://macarte.ign.fr/carte/MAP_ID/MAP_TITLE" width="100%" height="400"></iframe>
```

Ensuite, dans votre code javascript, il vous suffit d'attendre que l'API soit chargée pour vous en servir :

```javascript
<script>
  // 3. Récupération de l'API lorsque la carte est chargée
  MapIFrameAPI.ready('map', function(api) {
    // Center la carte sur Paris
    api.setCenter([2.33, 48.85]);
    // ou faire autre chose...
  }
</script>
```

[📔 Voir la documentation technique de l'iFrameAPI](https://ignf-ma-carte.github.io/mcviewer/doc/)

1. [Les avantages de l'iFrameAPI](./Aller_plus_loins_avec_le_widget_carto.md)
1. [Comment intégrer une carte sur mon site ?](./Comment_intégrer_une_carte_sur_un_site.md)
1. [Comment partager une carte ?](./Comment_partager_une_carte.md)
