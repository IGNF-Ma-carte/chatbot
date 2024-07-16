- geocoder
- adresse
- améliorer
- géocodage

Le géocodage dépend fortement de **la façon dont est décrite l'adresse**, une imprecision dans l'adresse, un caractère parasite ou une faute de frappe risque d'induire le géocodage en erreur.

L'adresse fournie peut contenir des éléments perturbant le résultat tel qu'un complément d'adresse (bâtiment, escalier, étage, zone, etc.)
Par exemple *19 rue Jean Baptiste Colbert - ZI des Prés de Lyon 10600 LA CHAPELLE SAINT LUC* ne trouvera pas *ZI des Prés de Lyon* et risque de renvoyer un mauvais résultat.
Pour pallier ce type de problème, il est recommandé d'avoir les éléments informatifs dans une colonne séparée.

Les abréviations peuvent dégrader le résultat du géocodage. 

La localisation sur trois colonnes peut parfois apporter une amélioration grâce à un meilleur filtrage des résultats à la commune.
Veillez également à ce que les colonnes soient bien respectées et qu'il n'y ait pas de décalage dans votre fichier.

Vous pouvez aussi utiliser l'option pour prioriser autour d'un lieu (une adresse ou une commune) pour limiter la recherche dans une zone géographique et éviter des résultat trop éloignés de votre zone de recherche. 

1. [Quels sont les limites du géocodage ?](./les_limites_du_géocodage.md)
2. [Quels sont les formats de fichier pour le géocodage ?](./les_fichiers_pour_le_géocodage.md)
3. [Comment corriger une erreur de géocodage ?](./Comment_corriger_une_erreur_de_géocodage.md)
