- media
- média
- markdown
- MD
- images
- vidéo
- twitter

La syntaxe pour intégrer un média dans Ma carte est la suivante : 
```md
![info sur le média](url_du_media)
```
Des paramètres optionnels permettent de redimensionner l'image `largeur`x`hauteur`. S'ils ne sont pas présents la taille de l'image sera automatiquement calculée.
```md
Une image 500 par 200 pixels :
![info sur le média](url_du_media 500x200)
Une image de 200 pixels de haut :
![info sur le média](url_du_media x200)
```

Il peut s'agir d'une image, d'une vidéo ou d'un fichier de son. Dans ce cas, le paramètre `autoplay` permet de lancer la lecture automatiquement.
```md
![sample video](http://www.w3schools.com/html/mov_bbb.mp4 x200 autoplay) 
```

Utilisez la barre de Markdown pour vous aider à intégrer les images. En particulier pour ajouter un lien d'affichage en plein écran sur une image.
![](../../docs/img/insert-medai.png)

📝 On peut aussi intégrer un tweet avec l'url du tweet. Dans ce cas, le paramètre optionnel indique si on veut afficher les images du tweet et sa largeur.

🖼️ Il est également possible d'intégrer un comparateur d'images. Dans ce cas, deux images seront affichées l'une sur l'autre, avec une réglette pour les comparer.
```md
&#96imageSlider
img1: url_image_1
img2: url_image_2
fullscreen: true
&#96
```

💡 Pour plus d'informations, consultez l'aide en ligne disponible dans l'outil : <i class="fi-info"></i>.

1. [Montre-moi la barre de Markdown de Ma carte](../md/la_barre_de_Markdown_de_Ma_carte.md)
1. [Qu'est-ce que le Makdown ?](../md/markdown.md)
