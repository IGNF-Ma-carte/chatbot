---
clavier: true
typeWriter: false
gestionGrosMots: true
rechercheContenu: true
avatar: ./img/poibot.svg
favicon: ./img/poibot.svg
footer: 'Ma carte'
---
# Ma carte : aide en ligne

Je suis un chatbot programmé pour vous aider à utiliser les outils **Ma carte** développés par l'Institut national de l'information géographique et forestière (IGN).

Vous pouvez écrire votre question, ou bien vous laisser guider par les propositions ci-dessous.

1. [Qu'est ce que Ma carte ?](macarte/macarte.md)
2. [Comment créer une carte en ligne ?](mceditor/créer_une_carte.md)
3. [Localiser une couche d'adresse](mcadresse/localiser_des_adresses.md)
4. [Créer une couche statistique](mcstat/créer_une_statistique.md)
5. [Raconter une histoire sur une carte](mcstory/raconter_une_histoire.md)


## macarte/exemples.md
- exemple
- demo

Le site Ma carte propose un [atlas](https://macarte.ign.fr/atlas/?mode=gallery) qui répertorie les cartes faites par les utilisateurs du service.

La carte ci-dessous présente le voyage du Nautilus, d'après le roman de Jules Verne, sous forme de carte narrative.
<iframe src="https://macarte.ign.fr/carte/5aea2d2515d03442521ddc91347e8427/Nautilus" width="100%" height="480px" allow="geolocation clipboard-read; clipboard-write"></iframe>

[Voir l'atlas de Ma carte](https://macarte.ign.fr/atlas/?mode=gallery)

1. [Qu'est-ce qu'une carte narrative ?](macarte/qu'est-ce-qu'une-carte-narrative.md)
2. [Comment créer une carte en ligne ?](mceditor/créer_une_carte.md)


## macarte/historique.md
- Edugéo
- Édugéo
- historique
- Opensource
- licence

Fruit d'un partenariat entre l'Éducation nationale et l'IGN, le site Edugéo propose depuis 2008 aux enseignant de créer des cartes et des projets pédagogiques en lignes.
![](../img/edugeo.png)
D'abord réservé aux enseignant, le projet est proposé au grand public en 2015 sous le nom de Ma carte et s'étoffe de nouveaux modules pour localiser des adresses, créer des couches statistiques et raconter des histoire autour d'une image.
Il est diffusé en Opensource depuis 2023 sur [Github](https://github.com/IGNF-Ma-carte).

1. [Montre-moi des exemples](macarte/exemples.md)
2. [Comment créer une carte en ligne ?](mceditor/créer_une_carte.md)
3. [Localiser une couche d'adresse](mcadresse/localiser_des_adresses.md)
4. [Créer une couche statistique](mcstat/créer_une_statistique.md)
5. [Raconter une histoire sur une carte](mcstory/raconter_une_histoire.md)


## macarte/macarte.md
- macarte
- IGN

Ma carte est un ensemble d'outils en ligne développés par l'Institut national de l'information géographique et forestière (IGN).
Ils permettent de créer et publier des carte en lignes simplement, directement depuis un navigateur internet.
Ils sont accessible dans un navigateur à l'adresse [macarte.ign.fr](https://macarte.ign.fr).
Les cartes produites peuvent être partagées ou intégrées dans un blogue ou une communication sur les réseaux sociaux.

1. [En savoir plus sur Ma carte](macarte/historique.md)
2. [Montre-moi des exemples de cartes](macarte/exemples.md)
3. [Comment créer une carte](macarte/créer_une_carte.md)

## macarte/qu'est-ce-qu'une-carte-narrative.md
- carte narrative
- storymap
- narration
- définition

Une carte narrative (ou storymap en anglais) est un récit organisé autour d'une carte.
Par exemple, un récit de voyage par étapes dans lequel la carte se déplace au fur et à mesure de l'avancement du récit pour présenter le voyage au spectateur.
Ce peut être aussi une carte comparative avec, sur la même zone, deux phénomènes ou deux époques différents qu'on veut présenter à l'utilisateur.
L'affichage d'images et de contenu multimédia (vidéo, son) lorsqu'on clique sur la carte participe également à la narration.

1. [Montre-moi des exemples](macarte/exemples.md)
2. [Comment créer une histoire autour d'une carte](mcstory/raconter_une_histoire.md)


## mcadresse/Comment-géocoder-un-fichier-d'adresses.md
- géocoder
- géocodage
- fichier

Vos données doivent être organisées de façon à rendre la recherche possible.

1. Une adresse correspond à une ligne du fichier
2. Les informations doivent être organisées de la même façon pour chaque ligne
3. Il est recommandé d'avoir une ligne de titre pour identifier facilement les colonnes mais ce n'est pas obligatoire
4. Il est possible d'ignorer des lignes dont la première colonne commence par un texte déterminé mais ce n'est pas obligatoire
5. Il est possible de sélectionner une plage de ligne à traiter mais ce n'est pas obligatoire

Le fichier doit contenir une adresse dans une colonne ou dans 3 colonnes (rue, code postal et commune) ou un identifiant de parcelle qui permette de retrouver la localisation de la igne.

1. [Quels sont les formats de fichier ?](mcadresse/les-fichiers-pour-le-géocodage.md)

## mcadresse/les-fichiers-pour-le-géocodage.md
- adresse
- géocodage
- géocoder
- csv
- xls
- tabulation

Le fichier doit être tabulé dans un format reconnu de l'application : **Excel**, **Calc** ou **csv**.

Pour les fichiers au format Excel ou Calc, il recommandé de n'avoir qu'une seule feuille dans le fichier. S'il y en a plusieurs, c'est la première qui sera utilisée

Pour les fichiers **csv**, il est possible d'avoir une tabulation personnalisée.


## mcadresse/les-limites-du-géocodage.md
- limite
- restriction
- géocodage
- adresse

Les adresses ne peuvent être localisées que sur le **territoire français** à l'exclusion de tout territoire étranger.
Certaines territoires ne sont pas couverts par les données de référence :
- La BD TOPO® et le PCI ne couvrent pas la Polynésie Française, Wallis-et-Futuna, la Nouvelle-Calédonie et Clipperton.
- Le PCI ne couvre pas Saint-Pierre-et-Miquelon.
- La BAN couvre l’ensemble des départements français ainsi que les collectivités d’Outre-Mer (Saint-Barthélemy, Saint-Martin, Saint-Pierre-et-Miquelon, Wallis-et-Futuna, Polynésie Française) et d’autres territoires (Nouvelle-Calédonie et Clipperton).

Le géocodage dépend fortement de **la façon dont est décrite l'adresse**, une imprecision dans l'adresse, un caractère parasite ou une faute de frappe risque d'induire le géocodage en erreur.

1. [Comment géocoder un fichier d'adresses avec Ma carte ?](mcadresse/Comment-géocoder-un-fichier-d'adresses.md)
2. [Comment améliorer le résultat du géocodage ?](mcadresse/Comment-améliorer-le-résultat-du+géocodage.md)

## mcadresse/localiser_des_adresses.md
- geolocaliser
- adresse
- géocodage

Le processus qui permet de localiser une adresse s'appelle le **géocodage**.   
Le géocodage est un procédé qui permet de retrouver à partir d'une adresse littérale sa position sur la terre et ainsi l'afficher sur une carte.
Par exemple, '*73 avenue de Paris, 94160 SAINT-MANDÉ*' est situé à 48,845726 de latitude Nord et 2,424573 de longitude Est.
Le géocodage peut se faire à partir d'une adresse, d'lieu-dit, une unité administrative on un point d'intérêt ou d'une parcelle cadastrale.

1. [Comment géocoder un fichier d'adresses avec Ma carte ?](mcadresse/Comment-géocoder-un-fichier-d'adresses.md)
2. [Quels sont les limites du géocodage ?](mcadresse/les-limites-du-géocodage.md)


## mceditor/créer_une_carte.md


## mcstat/créer_une_statistique.md


## mcstory/raconter_une_histoire.md


