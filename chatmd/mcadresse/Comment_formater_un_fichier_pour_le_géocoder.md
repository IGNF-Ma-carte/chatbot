- formater
- formatage
- adresse
- csv
- table
- colonne

Les colonnes utilisées pour le géocodage doivent être organisées de façon à pouvoir retrouver l'adresse :
- soit dans une seule colonne contenant l'ensemble des informations rue, code postal et commune
- soit en trois colonnes contenant séparément la rue, le code postal et la commune
- soit une colonne avec l'identifiant IDU de la parcelle

💡 Une colone contenant le nom de l'entité sera utilisé pour la différencier des autres sur la carte.
Il est recommandé d'avoir une ligne de titre pour identifier facilement les colonnes mais ce n'est pas obligatoire

Par exemple : 
| Nom | Adresse |
|-----|------|
| IGN | 73 avenue de paris 94160 Saint-Mandé |

| Nom | Rue | Code postal | Commune |
|-----|-----|-----|-----|
| IGN | 73 avenue de paris | 94160 |Saint-Mandé |

| Nom | IDU |
|-----|------|
| K0214 | 940420000K0214 |

📝 la présence de colonnes supplémentaires non utilisées pour le géocodage ne perturbe pas l'application. Elle seront conservées dans un export du résultat.

1. [Quels sont les formats de fichier pour le géocodage ?](./les_fichiers_pour_le_géocodage.md)
2. [Quels sont les limites du géocodage ?](./les_limites_du_géocodage.md)
