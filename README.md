# web2

# Installation dépendance:
npm i

# Lancement programme (Mode dev):
npm run dev

# Créer un projet react (Menu intéractif):
npm create vite@latest

# Création du projet React en une seule ligne de commande:
npm create vite@latest PROJECT_NAME -- --template react-swc-ts

# Installation Linter (projet react + Vite)
1) Commande à lancer:
npm i vite-plugin-checker -D

2) Modifier le fichier vite.config.ts:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'     //à ajouter

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  checker({                                  // à ajouter                           
    // e.g. use TypeScript check
    typescript: true,
  }),
  ],
})
