- couche
- calque
- layer
- cluster
- grappes

Pour les objets ponctuels ou pour des objets surfaciques de petite taille, on peut utiliser la méthode des **clusters**.

![](../../docs/img/clusters.png)

Le principe des clusters (ou grappes) permet de regrouper un ensemble de données en différents "paquets" homogènes suivant un critère de proximité que l'on définit en introduisant une distance entre objets (40 pixels par défaut). En dessous de cette distance les points vont s'agréger.

![](https://viglino.github.io/Macarte-MI/assets/img/ch4.1-clusters.gif)

Cela a l'avantage d'améliorer la lisibilité de la carte en présentant les regroupements. On peut également définir un niveau de zoom à partir duquel les objets ne seront plus regroupés afin de permettre une meilleure visibilité de l'information granulaire.

⚠️ En mode édition il n'est plus possible d'accéder aux objets que contiennent les clusters. En particulier vous ne pourrez plus modifier le style des objets ou les déplacer (vous déplacerez le cluster qui se recalculera au prochain déplacement). Vous devrez déactiver le mode d'affichage des clusters ou zoomer au-delà du seuil d'agrégation.

Il existe 3 type de clusters : les clusters standards avec 3 couleurs en fonction du nombre d'objets dans le cluster, les clusters colorés pour lesquels on peut choisir la couleur et [les clusters statistiques](#./Afficher_les_clusters_statistiques.md).

1. [Utiliser des clusters statistiques](./Afficher_les_clusters_statistiques.md)
1. [Comment voir ce que contient un cluster](./Comment_voir_ce_que_contient_un_cluster.md)
