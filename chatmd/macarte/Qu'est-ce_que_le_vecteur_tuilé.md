- vecteur tuilé
- tile
- MVT
- PBF

Le tuilage vecteur est un mode de diffusion des données analogue au WMTS (de la tuile "image"), mais qui transmet des objets plutôt que des pixels. Le tuilage vecteur vient apporter de nouvelles possibilités de personnalisation de l'affichage des données.

Les données sont prédécoupées par le serveur et diffusées sous forme de dalles vecteur (tuiles) adaptées à l'échelle de visualisation, ce qui permet à l'utilisateur de ne charger que les données sur la zone concernée, d'avoir des données suffisamment généralisées pour être affichées aux petites échelles et de conserver les dalles calculées dans un cache.

![](../../docs/img/WMTStilematrix.png)

Les avantages apportés par les tuiles vectorielles multiples :
- Rapidité d'accès à la donnée : les données chargées sont adaptées à l'échelle de visualisation et la navigation sur ces données est donc très fluide.
- Facilité de modification du style : les données étant côté client au format vecteur, on peut appliquer un nouveau style sans entraîner un nouveau téléchargement.
- Interaction directe des utilisateurs avec les objets : les données étant servies avec des attributs, on peut y accéder au clic ou changer de style au survol…

Des outils permettent de modifier et d'adapter les styles d'affichage des tuiles en fonction de vos besoins (voir [l'outil proposé sur les tuiles IGN](https://viglino.github.io/ol-ext/examples/layer/map.layer.gppvtile.html?embed=1)).

1. [Comment ajouter des tuiles vectorielles à une carte ?](../mceditor/Comment_ajouter_des_tuiles_vectorielles.md)