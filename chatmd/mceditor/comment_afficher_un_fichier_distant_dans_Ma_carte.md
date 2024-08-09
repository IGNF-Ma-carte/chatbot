- ajouter
- couche
- layer
- calque
- url
- kml
- geojson
- fichier
- distant

Il est possible de connecter un fichier distant (hébergé sur un autre serveur) à une couche Ma carte.
Pour cela, dans la fenêtre d'ajout de fonds cartographiques (accessible via le gestionnaire de couches <i class="fg-layer-alt-add-o"></i>)

Dans le dialogue, choisissez `Depuis un fichier` puis `Fichier distant...`.
Entrez l'url du fichier pour vous connecter dessus.
⚠️ Attention, le fichier doit être accessible en https et les entêtes [CORS](https://fr.wikipedia.org/wiki/Cross-origin_resource_sharing) doivent être remplies pour permettre d'accéder aux données. Si le fichier n'est pas accessible aucune donnée ne sera chargée.

L'avantage de lier un fichier externe et qu'il est parfois plus facile de mettre à jour ce fichier. A chaque nouvel affichage de la carte le fichier va être rechargé et les nouvelles données affichées. Ce peut être pratique pour certains usages (données en temps réel, mise à jour automatique, etc.).

Par contre vous n'aurez pas accès aux données directement pour les symboliser et vous devrez utiliser une symbolisation paramétrique pour les représenter sur la carte.

1. [Comment ajouter des données à un calque ?](./Comment_ajouter_des_données_à_un_calque.md)
1. [Qu'est-ce qu'une représentation paramétrique ?](../symboliser/Qu'est-ce_qu'une_représentation_paramétrique.md)
2. [Comment créer une bibliothèque de symboles ?](./Comment_créer_une_bibliothèque_de_symboles.md)
