- style
- couche
- layer
- calque

Chaque couche vecteur peut avoir un style de représentation des objets qu'elle contient. C'est cette symbolisation qui sera utilisée si elle n'a pas été surchargée par l'objet lui-même (dans ce cas on peut revenir à la symbolisation par défaut de la couche).

La couche peut adopter une **symbolisation paramétrique**, dans ce cas, elle sera prioritaire et prendra le pas sur la symbolisation des objets. On utilise alors les règles définies dans la couche pour symboliser son contenu.
Ceci a l'avantage de pouvoir plus facilement changer la symbolisation d'un groupe d'objet et de la rendre plus dynamique (si l'attribut d'un objet change, sa symbolisation va changer). Cela va également être pratique si on doit mettre à jour une couche de dessin (nouveau millésime de la donnée).
Dans le cas de couche vecteur en flux, c'est la seule façon d'affecter une symbolisation différente aux objets affichés.

On peut modifier la symbolisation d'une couche via le bouton <i class="fg-color"></i> dans la barre inférieure du gestionnaire de couche.

1. [Qu'est-ce qu'une représentation paramétrique ?](../symboliser/Qu'est-ce_qu'une_représentation_paramétrique.md)
2. [Comment créer une bibliothèque de symboles ?](./Comment_créer_une_bibliothèque_de_symboles.md)
2. [Comment mettre à jour les données d'un calque de dessin ?](./Comment_mettre_à_jour_les_données_d'un_calque_de_dessin.md)
