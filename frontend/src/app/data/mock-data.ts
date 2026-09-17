import { Company, NewsItem, Sector, Service } from '../models/site-content.model';

export const company: Company = {
  name: 'ServiFrance Solutions',
  tagline: 'Restauration collective et services aux organisations',
  heroTitle: 'Créer des expériences de restauration et de services utiles, durables et performantes.',
  heroDescription: 'Nous accompagnons les entreprises, établissements publics et collectivités avec des solutions de restauration collective, d’hospitalité et de services sur mesure.',
  contactText: 'Nos équipes conçoivent des solutions adaptées à vos sites, vos contraintes opérationnelles et vos ambitions sociales et environnementales.'
};

export const services: Service[] = [
  {
    title: 'Restauration d’entreprise',
    description: 'Offres de restauration sur site, cafétérias, corners et solutions de pause adaptées aux environnements de travail modernes.',
    highlight: 'Expérience collaborateur'
  },
  {
    title: 'Services aux collectivités',
    description: 'Accompagnement des écoles, établissements de santé, administrations et structures territoriales avec une approche qualitative et responsable.',
    highlight: 'Impact local'
  },
  {
    title: 'Hospitality & multiservices',
    description: 'Accueil, conciergerie légère, distribution automatisée et services complémentaires pour améliorer la qualité de vie sur site.',
    highlight: 'Services intégrés'
  }
];

export const sectors: Sector[] = [
  {
    name: 'Entreprises',
    description: 'Des solutions flexibles pour les sièges sociaux, campus tertiaires et sites industriels.'
  },
  {
    name: 'Éducation',
    description: 'Une restauration adaptée aux besoins nutritionnels, aux volumes et aux enjeux pédagogiques.'
  },
  {
    name: 'Santé et médico-social',
    description: 'Des prestations attentives aux exigences d’hygiène, de régimes spécifiques et de confort des usagers.'
  },
  {
    name: 'Collectivités',
    description: 'Des dispositifs de service pensés pour les réalités des territoires et des politiques publiques.'
  }
];

export const news: NewsItem[] = [
  {
    date: 'Mai 2026',
    title: 'Lancement d’une nouvelle offre de restauration responsable',
    summary: 'Une offre pilote autour des circuits courts, de la saisonnalité et d’indicateurs de réduction du gaspillage.'
  },
  {
    date: 'Avril 2026',
    title: 'Extension de nos services sur plusieurs sites tertiaires',
    summary: 'Déploiement progressif de services combinant restauration, hospitalité et expérience digitale.'
  },
  {
    date: 'Mars 2026',
    title: 'Programme d’innovation pour les parcours convives',
    summary: 'Préparation d’outils numériques et de tableaux de bord destinés aux équipes et aux clients.'
  }
];
