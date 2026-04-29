# LVO-Ingénierie

Site vitrine professionnel développé avec Next.js 14, TypeScript et Tailwind CSS.

## Lancer en local

```bash
npm install
npm run dev
```

Application disponible sur `http://localhost:3000`.

## Déploiement Vercel

Le projet est prêt pour Vercel:

- Build command: `npm run build`
- Output: Next.js
- Node: 20

## Déploiement Render

Le fichier `render.yaml` est inclus pour un déploiement automatique.

- Runtime: Node 20
- Build command: `npm ci && npm run build`
- Start command: `npm run start`

Sur Render:
1. New + -> Blueprint
2. Connecter le repo GitHub
3. Render détecte `render.yaml` et crée le service
