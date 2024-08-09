- statistique
- type
- choroplèthe
- catégorie
- symbole
- sectorielle
- chaleur
- heatmap

Plusieurs type de carte sont proposés.

### Carte dégradée ou choroplèthe
<img class="small left" src="https://macarte.ign.fr/edition/statistique/img/type/choroplethe.png" />
Une carte choroplèthe, du grec chôros (χώρος), zone/région et plethos (πληθαίν), multiple, est une carte statistique en aplat de couleur suivant un attribut de type numérique qui servira à définir une classification.
Elle est particulièrement adaptée à représenter une mesure statistique, comme la densité d'un phénomène. Ce type de carte facilite la comparaison d'une mesure d'une région à l'autre, ou montre la variabilité du phénomène.
Les données à représenter sont plutôt de type surfacique (dans le cas de données ponctuelles, on lui préférera généralement une carte de symbole).

### Carte par catégories
<img class="small left" src="https://macarte.ign.fr/edition/statistique/img/type/categorie.png" />
C'est une carte en aplat de couleur en fonction d'un attribut de tous types. Dans ce cas, ce sont les valeurs d'un attribut qui serviront à coder la couleur.
Elle ne peut pas représenter un phénomène statistique ordonné mais peut indiquer la répartition spatiale d'un phénomène.

### Carte de symboles proportionnels
<img class="small left" src="https://macarte.ign.fr/edition/statistique/img/type/symbol.png" />
Ce type de carte permet l'affichage d'un symbole suivant un attribut numérique qui code la classe et la grosseur du point affiché.
Il est particulièrement indiqué pour représenter un phénomène impliquant une quantité. La taille du cercle peut être répartie entre deux valeurs ou proportionnelle à la quantité.
La proportionnalité peut s'appliquer sur des points (taille du symbole) ou sur des lignes (largeurs). Dans ce cas, la largeur de la ligne va indiquer la valeur représentée (fréquentation d'une route par exemple).

### Carte sectorielle
<img class="small left" src="https://macarte.ign.fr/edition/statistique/img/type/sectoriel.png" />
Ce type de carte représente sous forme de diagramme statistique (camembert, barres) un phénomène localisé sur un point. Lorsqu'il s'applique à une surface, il est localisé sur un point à l'intérieur de celle-ci (centroïde).
La superposition intégrale en un seul point étant impossible (sauf à passer en 3D), il permet de représenter plusieurs variables (attributs) en même temps et est recommandé pour visualiser un phénomène impliquant plusieurs candidats (résultat d'élection par exemple).
La taille du graphique correspond à la valeur totale des variables représentées. On peut le conditionner entre deux valeurs ou l'afficher de manière proportionnelle.

### Carte d'activité ou carte de chaleur
<img class="small left" src="https://macarte.ign.fr/edition/statistique/img/type/heatmap.png" />
Une carte de chaleur est une représentation cartographique qui, à la grandeur d'une variable, fait correspondre une teinte donnée dans une palette de couleurs.
C'est une carte d'accumulation et deux phénomènes proches spatialement vont s'additionner (se cumuler) sur la carte. Elle nécessite d'avoir des données ponctuelles pour fonctionner. Par défaut, seule la position du point est utilisée mais en choisissant un attribut numérique, on va pouvoir donner un poids au point représentant le phénomène.

1. [Faire une carte statistique](./Comment_créer_une_carte_statistique.md)
1. [Quels sont les méthodes de classification proposées ?](./Les_méthodes_de_classification.md)
1. [Comment choir les couleurs des statistiques ?](./les_couleurs_et_les_symboles_statistiques.md)
