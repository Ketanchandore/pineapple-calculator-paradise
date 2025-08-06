
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize build for production
    target: 'es2020',
    minify: 'terser',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-popover', '@radix-ui/react-toast'],
          utils: ['date-fns', 'lucide-react', 'clsx', 'tailwind-merge']
        }
      }
    },
    // Compress assets
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'date-fns', 'lucide-react'],
    exclude: ['@vite/client', '@vite/env']
  }
}));
