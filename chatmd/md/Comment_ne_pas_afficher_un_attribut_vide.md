- afficher
- formater
- attribut
- attributs
- vide
- null
- affichage conditionnel
- conditionnel
- test conditionnels
- MD
- Markdown

Il est possible de conditionner l'affichage à la présence (ou non) d'un attribut lors de l'affichage de la fiche d'un objet.
Pour cela, il suffit de mettre l'attribut entre double parenthèses `((%attr%))`.
Dans ce cas, l'ensemble de l'expression entre parenthèses s'affiche ou non suivant la valeur de l'attribut.
Par exemple : `((longueur : %length% km))` n'affichera rien si length est vide (ou nul) et affichera `longueur : 10 km` si length=10.

Il est possible d'ajouter un texte alternatif qui s'affichera en lieu et place si l'attribut n'est pas défini en l'ajoutant dans les parenthèses après une double barre : `||`
Par exemple : `((valeur : %val% || pas de valeur))`

On peut aussi tester explicitement l'existence ou non d'un attribut pour en afficher un autre, en utilisant `((?%attr%` ou `((!%attr%`.
Par exemple pour afficher une valeur ou une erreur en fonction d'un boolean (dans l'attribut `isok`): 
`((?%isok% la valeur est %attr%))((!%isok% il y a une erreur : %error%))`

1. [Qu'est-ce que le Makdown ?](./markdown.md)
1. [Comment afficher des attributs en Markdown](./Afficher_des_attributs_en_Markdown.md)
1. [Comment intégrer des médias dans Ma carte](./Intégrer_des_médias_dans_Ma_carte.md)
