- bulle
- info-bulle
- infobulle
- popup
- calque 
- couche
- layer

Vous pouvez ajouter une bulle d'information aux calques (<i class="fi-comment"></i> dans le menu bas du gestionnaire de couche). Cette bulle s'affichera lorsqu'un objet du calque est sélectionné (sauf ci celui-ci a une bulle personnalisée).
Le contenu de la bulle est défini en Markdown et il est possible d'afficher les attributs de l'objet sélectionné avec la syntaxe `%nom_de_l_attribut%`. 
Afin de vous aider à paramétrer la bulle, pensez à sélectionner un objet sur le calque afin d'avoir accès en direct à ces attributs lors de la saisie du Markdown.

S'il s'agit d'une couche image (WMS, WMTS) la bulle affichera le résultat du getFeatureInfo du flux (si celui-ci est paramétré dans le flux et répond en json). Dans ce cas, vous n'aurez pas directement accès aux attributs du clic, vous pouvez indiquer dans le Mardown `%ATTRIBUTES%` pour afficher la liste des attributs renvoyés par le service.

1. [Comment paramétrer l'info-bulle d'un objet ?](./Comment_paramétrer_l'info-bulle_d'un_objet.md)
1. [Qu'est-ce que le Makdown ?](../md/markdown.md)
1. [Modifier les attributs d'un objet](../mceditor/Comment_ajouter_des_attributs_à_un_objet.md)
