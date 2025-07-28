# web2

# Installation dépendance:
npm i

# Lancement programme (Mode dev):
npm run dev

# Créer un projet react (Menu intéractif):
npm create vite@latest

# Création du projet React en une seule ligne de commande:
npm create vite@latest PROJECT_NAME -- --template react-swc-ts

# Installation React Router
npm i react-router-dom

# Installation Linter (projet react + Vite)
1) Commande à lancer:
npm i vite-plugin-checker -D

2) Modifier le fichier vite.config.ts (Voir ci-dessous)

# Fichier vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

