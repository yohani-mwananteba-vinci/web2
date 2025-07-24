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