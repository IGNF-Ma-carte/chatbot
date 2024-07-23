- géocoder
- parcelle

Pour procéder à ce mode de géocodage vous devez fournir au système des codes parcelles.
Le code parcelle est formé de 14 caractères comme suit :
- le code INSEE de la commune sur 5 caractères. Pour les communes à arrondissements (Paris, Lyon et Marseille), il faut préciser le code de l'arrondissement et pas le code INSEE de la commune agrégée.
- le préfixe de la parcelle. la plupart du temps il correspond à 000. Dans le cas d'une commune associée (Lomme et Hellemmes à Lille par exemple) ou dans les cas des communes à arrondissement, il s'agit de trois chiffres.
- le code de section cadastrale sur 2 caractères : soit 2 lettres majuscules si la section est sur 2 lettres, soit un zéro et la lettre de la section en majuscules
- le code de la parcelle sur 4 caractères : La parcelle n°1 est encodée 0001, la parcelle n°10 donne 0010, la parcelle n°100 donne 0100

Par exemple une des parcelles où se situe le pôle Géosciences, siège de l'IGN sera encodée : 940670000D0050.

Dans ce mode, vous pouvez récupérer non seulement le point mais aussi la géométrie de la parcelle (polygone) si cette option est cochée dans les informations supplémentaires.

1. [Quels sont les formats de fichier ?](./les_fichiers_pour_le_géocodage.md)
2. [Comment formater un fichier pour le géocoder ?](./Comment_formater_un_fichier_pour_le_géocoder.md)