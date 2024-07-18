- maillage
- statistique
- découpage
- commune
- département

Afin de représenter un phénomène sur une carte, il est nécessaire d'avoir sa position dans l'espace.
Cette position peut être intégrée dans le fichier géographique (GeoJSON) ou liée à un découpage existant (maillage).
Différents maillages sont proposés par l'outil (communes, départements, EPCI, bassin de vie, IRIS, régions, états). Certains maillages dépendent de l'année des données utilisées (ainsi des communes peuvent fusionner et modifier le maillage d'une année sur l'autre).

Il faudra préciser lors de l'import des données le type de découpage (maillage) utilisé et l'attribut servant à coder le lien :
- pour les départements, le lien se fait sur le numéro de département (01 = département de l'Ain),
- pour les communes il s'agit du code INSEE de la commune (01001 = commune de L'Abergement-Clémenciat),
- pour les pays, on utilise le code ISO (fr = France).

Certains maillages sont données avec une version allégée pour optimiser l'affichage des statistiques.

Lorsqu'on n'a pas de coordonnées associées à une série de données, mais qu'on a des informations de localisation à l'adresse, à la commune ou au lieu-dit, on peut utiliser des outils de géocodage pour en déduire des coordonnées.

1. [Comment géocoder un fichier d'adresse ?](./mcadresse/1_géocodage_localiser_des_adresses.md)
1. [Comment optimiser une carte statistique ?](./Comment_optimiser_une_carte_statistique.md)
