export const USER = {
  firstName: 'Yasmine',
  lastName: 'El Amrani',
  email: 'yasmine.elamrani@gmail.com',
  joined: '12 mars 2026',
  city: 'Casablanca',
};

export const INSTRUCTORS = [
  { id: 1, name: 'Karim Bennani', rating: 4.9, reviews: 127, distance: 1.2, type: 'Manuel', car: 'Dacia Logan', slots: ["Aujourd'hui 14h", 'Demain 09h', 'Demain 16h'], x: 28, y: 42, avatar: 'KB', color: '#E91E8C' },
  { id: 2, name: 'Nadia Cherkaoui', rating: 4.8, reviews: 89, distance: 2.4, type: 'Automatique', car: 'Renault Clio', slots: ['Demain 10h', 'Ven. 11h'], x: 55, y: 28, avatar: 'NC', color: '#8B2FC9' },
  { id: 3, name: 'Youssef Tazi', rating: 5.0, reviews: 203, distance: 0.8, type: 'Manuel', car: 'Peugeot 208', slots: ["Aujourd'hui 18h", 'Demain 14h'], x: 42, y: 58, avatar: 'YT', color: '#C42A9E' },
  { id: 4, name: 'Samira Idrissi', rating: 4.7, reviews: 64, distance: 3.1, type: 'Moto', car: 'Yamaha MT-07', slots: ['Jeudi 15h', 'Ven. 09h'], x: 72, y: 52, avatar: 'SI', color: '#A42BB8' },
  { id: 5, name: 'Hamid Berrada', rating: 4.6, reviews: 51, distance: 2.9, type: 'Automatique', car: 'Toyota Yaris', slots: ['Demain 08h', 'Sam. 10h'], x: 18, y: 68, avatar: 'HB', color: '#7A35D0' },
];

export const FORFAITS_CLASSIC = [
  { name: 'Découverte', price: 1200, hours: 10, popular: false, features: ['10h de conduite', 'Code en ligne illimité', 'Examen blanc inclus', 'Support par email'] },
  { name: 'Essentiel', price: 2400, hours: 20, popular: true, features: ['20h de conduite', 'Code en ligne illimité', '2 examens blancs', 'Moniteur dédié', 'Assistance 7j/7'] },
  { name: 'Confort', price: 3600, hours: 30, popular: false, features: ['30h de conduite', 'Code en ligne illimité', 'Examens blancs illimités', 'Moniteur dédié', 'Véhicule le jour J', 'Dossier admin inclus'] },
];

export const FORFAITS_ACCEL = [
  { name: 'Express 15j', price: 3200, hours: 20, popular: false, features: ['20h en 15 jours', 'Créneaux prioritaires', 'Code intensif 5j', 'Examen blanc inclus'] },
  { name: 'Turbo 10j', price: 4800, hours: 25, popular: true, features: ['25h en 10 jours', 'Créneaux prioritaires', 'Code intensif 3j', 'Moniteur dédié', 'Suivi personnalisé'] },
  { name: 'Intensif 7j', price: 6500, hours: 30, popular: false, features: ['30h en 7 jours', 'Stage résidentiel', 'Code intensif', 'Moniteur dédié', 'Passage rapide examen', 'Garantie réussite'] },
];

export const UPCOMING_LESSONS = [
  { id: 'L-0412', date: 'Lundi 20 avril', time: '14:00 — 16:00', instructor: 'Karim Bennani', location: 'Agence Maârif', type: 'Conduite ville' },
  { id: 'L-0418', date: 'Mercredi 22 avril', time: '09:00 — 11:00', instructor: 'Karim Bennani', location: 'Agence Maârif', type: 'Manoeuvres' },
  { id: 'L-0421', date: 'Vendredi 24 avril', time: '16:00 — 18:00', instructor: 'Karim Bennani', location: 'Circuit Aïn Diab', type: 'Conduite autoroute' },
];

export const RESERVATIONS = [
  { id: 'R-2026-041', date: '20 avr. 2026', time: '14:00', vehicle: 'Dacia Logan — 4892-A-12', location: 'Agence Maârif', teacher: 'Karim Bennani', status: 'Confirmée' },
  { id: 'R-2026-038', date: '22 avr. 2026', time: '09:00', vehicle: 'Dacia Logan — 4892-A-12', location: 'Agence Maârif', teacher: 'Karim Bennani', status: 'Confirmée' },
  { id: 'R-2026-035', date: '24 avr. 2026', time: '16:00', vehicle: 'Dacia Logan — 4892-A-12', location: 'Circuit Aïn Diab', teacher: 'Karim Bennani', status: 'Confirmée' },
  { id: 'R-2026-031', date: '15 avr. 2026', time: '10:00', vehicle: 'Dacia Logan — 4892-A-12', location: 'Agence Maârif', teacher: 'Karim Bennani', status: 'Terminée' },
  { id: 'R-2026-028', date: '12 avr. 2026', time: '18:00', vehicle: 'Dacia Logan — 4892-A-12', location: 'Agence Maârif', teacher: 'Karim Bennani', status: 'Terminée' },
  { id: 'R-2026-024', date: '08 avr. 2026', time: '14:00', vehicle: 'Dacia Logan — 4892-A-12', location: 'Agence Maârif', teacher: 'Karim Bennani', status: 'Terminée' },
];

export const TRANSACTIONS = [
  { id: 'TX-20261203', date: '12 mars 2026', label: 'Forfait Essentiel — 20h', amount: 2400, method: 'Carte CMI', status: 'Payée', type: 'achat' },
  { id: 'TX-20261215', date: '15 mars 2026', label: 'Heure supplémentaire', amount: 180, method: 'Carte CMI', status: 'Payée', type: 'achat' },
  { id: 'TX-20261320', date: '02 avr. 2026', label: 'Examen blanc individuel', amount: 250, method: 'Virement', status: 'Payée', type: 'achat' },
  { id: 'TX-20261324', date: '08 avr. 2026', label: 'Parrainage — Sara B.', amount: -200, method: 'Crédit compte', status: 'Crédité', type: 'credit' },
  { id: 'TX-20261340', date: '14 avr. 2026', label: 'Leçon annulée (remboursement)', amount: -180, method: 'Carte CMI', status: 'Remboursée', type: 'refund' },
];

export const QUIZ = [
  {
    q: 'Vous arrivez à cette intersection sans signalisation. Qui a la priorité ?',
    img: 'priorite-droite',
    options: ['Le véhicule venant de votre droite', 'Le véhicule venant de votre gauche', 'Vous avez la priorité', 'Le véhicule le plus rapide'],
    correct: 0,
    explain: "En l'absence de signalisation, la priorité est accordée au véhicule venant de la droite.",
  },
  {
    q: 'Quelle est la vitesse maximale autorisée en agglomération au Maroc ?',
    img: 'vitesse-ville',
    options: ['40 km/h', '50 km/h', '60 km/h', '70 km/h'],
    correct: 1,
    explain: "La vitesse maximale en agglomération est de 50 km/h, sauf signalisation contraire.",
  },
  {
    q: 'Que signifie ce panneau ?',
    img: 'stop',
    options: ['Cédez le passage', 'Stop obligatoire', 'Sens interdit', 'Fin de priorité'],
    correct: 1,
    explain: "Ce panneau octogonal rouge impose un arrêt complet avant de redémarrer.",
  },
];
