- statistique
- méthode
- classification
- classe
- quantile

Cinq méthodes de classification vous sont proposées. Une information contextuelle les détaille. Les méthodes s'appliquent aux types de carte choroplèthes et symboles.

Afin de représenter les données sur la carte, nous devons les répartir dans des **classes** sur lesquelles on pourra définir un style de représentation donné.

### Quantiles
Les quantiles sont les valeurs qui partagent un jeu de données en n parts égales.
Ainsi, si on découpe un jeu de 20 données en 4 classes, elles contiendront 5 données chacune.

### Equidistance
Une répartition par équidistance partage un jeu de données en *n* parts de même largeur.
Ainsi si notre jeu de données a une valeur minimale de 2 et une valeur maximale de 14 (donc une amplitude de 12) et qu'on le découpe en 4 classes, elles auront chacune une largeur de 3.

### Logarithmique
Ce mode utilise une répartition équidistante mais sur une échelle logarithmique.

### Cluster ou k-moyenne
Une répartition par cluster (ou k-moyenne) consiste à découper un jeu de données en parts, appelées clusters, de façon à minimiser une fonction de distance entre les individus. 
📝 Cette méthode de répartition ne garantit pas d'obtenir exactement le nombre de classes demandé par l'utilisateur, car ce nombre de classes est par construction lié à la répartition des valeurs de la variable à cartographier.

### Manuelle
Vous définissez vous-même les bornes des classes.

1. [Faire une carte statistique](./Comment_créer_une_carte_statistique.md)
1. [Quels sont les types de cartes statistiques ?](./Quels_sont_les_types_de_cartes_statistiques_proposés.md)
1. [Comment choir les couleurs des statistiques ?](./les_couleurs_et_les_symboles_statistiques.md)
