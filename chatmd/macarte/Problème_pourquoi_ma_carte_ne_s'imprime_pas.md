- problème
- erreur
- impression

Si vous n'arrivez pas à enregistrer une image de votre carte (une alerte `Impossible d'enregistrer la carte` apparaît), cela vient du fait qu'une image incluse dans la carte interdit ce type d'opération. En effet, dans un navigateur, l'accès aux ressources est restreint si les entêtes de ces ressources ne sont pas correctement remplis (voir CORS).

L'impression via une imprimante fonctionne, mais l'enregistrement est bloqué.

![](https://macarte.ign.fr/api/image/img_kfq7956)

Il peut s'agir d'une image utilisée comme symbolisation sur un point ou d'un service inclus dans un calque (WMS, WMTS, etc.).
Pour débloquer la situation, recherchez le calque qui pose problème (lorsqu'il est masqué, la sauvegarde va fonctionner) et si vous en avez la possibilité de demande au fournisseur d'activer les entêtes CORS.
Pour l'utilisation d'images comme symbolisation sur un objet, vous pouvez demander à Ma carte de l'héberger pour l'utiliser ensuite sans restriction sur vos cartes.

1. [Comment imprimer une carte ?](./Comment_imprimer_une_carte.md)
1. [Ma carte peut-il héberger des images ?](./Ma_carte_peut-il_héberger_des_images.md)