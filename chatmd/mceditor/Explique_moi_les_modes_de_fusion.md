- mode de fusion
- fusion
- combiner

Les modes de fusion permettent de définir la façon dont la couche va se combiné avec les couches inférieurs.

Il existe différents modes de fusion :
* <img src="../../docs/img/modes/normal.png" class="left tiny"/> **Normal :** Il s'agit du mode par défaut. Le calque va s'afficher par dessus les autre calque et venir masquer ceux-ci.
* <img src="../../docs/img/modes/produit.png" class="left tiny"/> **Produit :** Les couleurs du calque vont venir se combiner avec celle du calque inférieur comme si on dessinait avec un marqueur. La couleur finale est toujours plus foncée. Le produit d'une couleur quelconque par le noir rend du noir. Le produit d'une couleur quelconque par le blanc n'a aucune incidence sur la couleur.
* <img src="../../docs/img/modes/superposition.png" class="left tiny"/> **Superposition :** Ce mode est l'inverse du produit. La couleur finale est toujours plus claire. Une superposition avec le noir n'a aucune incidence sur la couleur. Une superposition avec le blanc produit du blanc.
* <img src="../../docs/img/modes/recouvrement.png" class="left tiny"/> **Recouvrement :** Cet effet combine le mode produit et superposition. Lorsque la couche de base est claire, la couche supérieure devient plus claire ; là où la couche de base est sombre, le dessus devient plus sombre; là où la couche de base est gris moyen, le dessus n'est pas affecté.
* <img src="../../docs/img/modes/obscurcir.png" class="left tiny"/> **Obscurcir :** Les pixels plus clairs que la couleur de fusion sont remplacés, et les pixels plus foncés demeurent intacts.
* <img src="../../docs/img/modes/eclaircir.png" class="left tiny"/> **Eclaircir :** C'est l'inverse, les pixels plus foncés que la couleur de fusion sont remplacés, et les pixels plus clairs demeurent intacts.
* <img src="../../docs/img/modes/densite+.png" class="left tiny"/> **Densité couleur + :** L'effet vient obscurcir la couleur du dessous par la couleur du calque par augmentation du contraste entre les deux. La fusion avec du blanc ne produit aucun effet.
* <img src="../../docs/img/modes/densite-.png" class="left tiny"/> **Densité linéaire + :** L'effet vient éclaircir la couleur du dessous par la couleur du calque par réduction du contraste entre les deux. L'effet' avec du noir ne produit aucun effet.
* <img src="../../docs/img/modes/lumiere-crue.png" class="left tiny"/> **Lumière crue :** Cet effet équivaut à projeter une lumière crue sur une image.
* <img src="../../docs/img/modes/lumiere-douce.png" class="left tiny"/> **Lumière douce :** Cet effet équivaut à projeter une lumière diffuse sur l'image.
* <img src="../../docs/img/modes/difference.png" class="left tiny"/> **Différence :** Cet effet soustrait la couleur de base de la couleur du calque, ou inversement, en fonction de la couleur la plus lumineuse. L'effet avec du blanc inverse les valeurs de la couleur de base. L'effet avec du noir ne produit aucun effet.
* <img src="../../docs/img/modes/exclusion.png" class="left tiny"/> **Exclusion :** Cet effet est semblable au mode Différence avec un moindre contraste.
* <img src="../../docs/img/modes/teinte.png" class="left tiny"/> **Teinte** Cet effet va appliquer la teinte du calque aux calques inférieurs.
* <img src="../../docs/img/modes/saturation.png" class="left tiny"/> **Saturation :** Cet effet va appliquer la saturation de la couleur du calque aux calques inférieurs. Ce mode ne produit aucun effet sur une zone non saturée (avec une valeur de gris égale à 0).
* <img src="../../docs/img/modes/couleur.png" class="left tiny"/> **Couleur** Cet effet va appliquer la couleur et la saturation du calque aux calques inférieurs. Ce mode préserve les niveaux de gris de l'image et est pratique pour colorer des images monochromes ou pour teinter des images en couleurs.
* <img src="../../docs/img/modes/luminosite.png" class="left tiny"/> **Luminosité :** Cet effet va appliquer la luminance du calque au calques inférieurs. Ce mode crée l'effet inverse de celui du mode Couleurs.

1. [Le gestionnaire de couche](./Parle-moi_du_gestionnaire_de_couche.md)
1. [Ajouter un filtre à une couche](./Ajouter_un_filtre_à_une_couche.md)