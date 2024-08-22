- iframe
- widget carto
- programmation
- iframeAPI
- api
- javascript

Si vous avez des besoins particuliers, vous aurez peut-être besoins de vous mettre à la programmation.
Pour cela, Macarte propose une iFrame-API qui permet d'intégrer une carte produite dans Ma carte sur votre site Web et de la contrôler à l'aide de JavaScript.
L'intégration des cartes se fait via une balise `<iframe>`, la configuration de la carte se fait simplement, de manière interactive sur le site Ma carte et vous pouvez vous concentrer sur le corps de votre métier.

### Les avantages de l'API
* la configuration de la carte se fait en mode interactif dans l'éditeur de Ma carte (no code)
* la carte peut être reprise à tout moment, mise à jour et une nouvelle version publiée
* pas besoins de connaissance particulière pour afficher la cartographie, c'est pris en charge par Ma carte
* vous pouvez vous concentrer sur la partie métier de votre application

Les fonctions de l'API JavaScript permettent d'afficher une carte, de contrôler sa position et son contenu et de récupérer des informations sur cette carte. Vous pouvez également ajouter des écouteurs d'événements qui s'exécutent en réponse à certaines actions déclenchées sur la carte tels qu'un déplacement ou une sélection d'objet entre autres.

> 💡 Par exemple, si vous êtes propriétaire d'une chaîne de magasins, vous pouvez créer une carte de manière interactive dans l'interface dédiée, choisir les fonds à afficher, ajouter vos données, les symboliser, ajouter une légende, des bulles, etc.
> Vous l'intégrez ensuite sur une page de votre site web et la centrez sur le magasin concerné, de la même manière que vous intégrez une image ou une vidéo.
> Avec l'iFrame-API vous pouvez de plus récupérer l'objet que le visiteur aura cliqué sur la carte (un magasin, un dépôt) et lui présenter des informations supplémentaires en interrogeant votre système d'information (horaires d'ouverture, disponibilité des stocks, etc.).

L'iFrame-API permet également d'ajouter [des outils d'édition](https://ignf-ma-carte.github.io/mcviewer/doc/api.html#addEditBar__anchor) pour créer des objets sur la carte. Vous pouvez ainsi intégrer facilement une carte sur un formulaire et, via l'API, récupérer les saisies faites par vos utilisateurs (attributs, géométrie) et les ajouter à la réponse de votre questionnaire !

[📔 Voir la documentation technique de l'iFrameAPI](https://ignf-ma-carte.github.io/mcviewer/doc/)

1. [Comment marche l'iFrameAPI ?](./Comment_marche_l'iFrameAPI.md)
1. [Comment intégrer une carte sur mon site ?](./Comment_intégrer_une_carte_sur_un_site.md)
1. [Comment partager une carte ?](./Comment_partager_une_carte.md)
