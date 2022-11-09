---
title: '2 formes de pré-rendu'
date: '2022-11-09'
---

Next.js propose deux formes de pré-rendu : la **génération statique** et le **rendu côté serveur**. La différence réside dans **lorsque** il génère le code HTML d'une page.

- **Génération statique** est la méthode de pré-rendu qui génère le HTML au **moment de construction**. Le code HTML pré-rendu est ensuite _réutilisé_ à chaque requête.
- Le **rendu côté serveur** est la méthode de pré-rendu qui génère le code HTML à **chaque requête**.

Surtout, Next.js vous permet de **choisir** le formulaire de pré-rendu à utiliser pour chaque page. Vous pouvez créer une application Next.js "hybride" en utilisant la génération statique pour la plupart des pages et en utilisant le rendu côté serveur pour les autres.