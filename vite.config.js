import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: true
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      outDir: 'dist',
      manifest: {
        name: 'Plantex',
        short_name: 'Plantex',
        description: 'Plants will make your life better',
        theme_color: '#fff',
        icons: [
          {
            src: '/assets/images/apple-icon-57x57.png',
            sizes: '57x57'
          },
          {
            src: '/assets/images/apple-icon-60x60.png',
            sizes: '60x60'
          },
          {
            src: '/assets/images/apple-icon-72x72.png',
            sizes: '72x72'
          },
          {
            src: '/assets/images/apple-icon-76x76.png',
            sizes: '76x76'
          },
          {
            src: '/assets/images/apple-icon-114x114.png',
            sizes: '114x114'
          },
          {
            src: '/assets/images/apple-icon-120x120.png',
            sizes: '120x120'
          },
          {
            src: '/assets/images/apple-icon-144x144.png',
            sizes: '144x144'
          },
          {
            src: '/assets/images/apple-icon-152x152.png',
            sizes: '152x152'
          },
          {
            src: '/assets/images/apple-icon-180x180.png',
            sizes: '180x180'
          },
          {
            src: '/assets/images/apple-icon.png',
            sizes: '192x192'
          },
          {
            src: '/assets/images/apple-icon-precomposed.png',
            sizes: '192x192'
          },
          {
            src: '/assets/images/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png'
          },
          {
            src: '/assets/images/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: '/assets/images/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: '/assets/images/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: '/assets/images/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: '/assets/images/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/images/android-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/assets/images/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: '/assets/images/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: '/assets/images/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: '/assets/images/favicon.ico',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: '/assets/images/ms-icon-70x70.png',
            sizes: '70x70',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/assets/images/ms-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/assets/images/ms-icon-150x150.png',
            sizes: '150x150',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/assets/images/ms-icon-310x310.png',
            sizes: '310x310',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      }
    })
  ]
})
