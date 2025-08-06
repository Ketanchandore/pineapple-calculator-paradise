
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
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('@radix-ui')) {
              return 'ui';
            }
            if (id.includes('lucide-react') || id.includes('date-fns')) {
              return 'utils';
            }
            return 'vendor';
          }
          if (id.includes('src/components/calculators/')) {
            return 'calculators';
          }
        }
      }
    },
    // Compress assets
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        unsafe_arrows: true,
        passes: 2
      },
      mangle: {
        safari10: true
      }
    }
  },
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'date-fns', 
      'lucide-react',
      'react-hook-form',
      'zod',
      '@radix-ui/react-dialog',
      '@radix-ui/react-popover'
    ],
    exclude: ['@vite/client', '@vite/env']
  },
  // Add preload for common routes
  experimental: {
    renderBuiltUrl(filename: string) {
      return { runtime: `window.__prependPath(${JSON.stringify(filename)})` }
    }
  }
}));
