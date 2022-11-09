---
title: 'Quand utiliser la génération statique vs le rendu côté serveur'
date: '2022-11-09'
---

Nous vous recommandons d'utiliser la **Génération statique** (avec et sans données) dans la mesure du possible, car votre page peut être créée une fois et servie par CDN, ce qui la rend beaucoup plus rapide que si un serveur rendait la page à chaque requête.

Vous pouvez utiliser la génération statique pour de nombreux types de pages, notamment :

- pages marketing
- Articles de blog
- Listes de produits e-commerce
- Aide et documentation

Vous devez vous demander : "Puis-je pré-afficher cette page **avant** la demande d'un utilisateur ?" Si la réponse est oui, vous devez choisir la génération statique.

D'un autre côté, la génération statique n'est ** pas ** une bonne idée si vous ne pouvez pas pré-rendre une page avant la demande d'un utilisateur. Peut-être que votre page affiche des données fréquemment mises à jour et que le contenu de la page change à chaque demande.

Dans ce cas, vous pouvez utiliser le **rendu côté serveur**. Ce sera plus lent, mais la page pré-rendue sera toujours à jour. Ou vous pouvez ignorer le pré-rendu et utiliser JavaScript côté client pour remplir les données.