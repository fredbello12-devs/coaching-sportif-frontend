# Coaching Sportif Frontend

Application React (Create React App) pour le tableau de bord coach sportif.

## Prérequis

- Node.js 20+
- npm

## Installation

```bash
npm install
```

## Configuration

Créez un fichier `.env` à la racine du projet :

```env
REACT_APP_API_URL=http://localhost:3001
```

## Lancement

```bash
npm run dev
```

L’application démarre sur http://localhost:3000.

## Fonctionnalités

- Connexion via `POST /auth/login` (token JWT stocké dans `localStorage`)
- Affichage des utilisateurs via `GET /users`
- Création d’utilisateurs via `POST /users` (rôle admin requis)
- Affichage des séances via `GET /sessions`
- Création de séances via `POST /sessions`
- Affichage des paiements via `GET /payments`
- Création de paiements via `POST /payments` (rôle admin requis)
- Affichage météo via `GET /weather/:city` (ex. Dakar, Paris)

## Tests backend recommandés

Backend NestJS démarré sur http://localhost:3001 :

```bash
cd ../coaching-sportif-backend
npm install
npm run seed
npm run start:dev
```
