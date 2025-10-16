import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://faedo.es',
  image: {
    // Optimización de imágenes
    domains: ['faedo.es'],
    remotePatterns: [{ protocol: 'https' }],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@assets': '/src/assets',
        '@utils': '/src/utils',
        '@data': '/src/data',
        '@content': '/src/content',
        '@styles': '/src/styles',
      },
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
        },
      },
      serialize(item) {
        // Prioridades optimizadas para SEO
        if (item.url === 'https://faedo.es/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        if (item.url.includes('/ruta/faedo-de-cinera')) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        if (item.url.includes('/blog/') && !item.url.endsWith('/blog/')) {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        if (item.url.endsWith('/blog/')) {
          return { ...item, priority: 0.8, changefreq: 'weekly' };
        }
        if (item.url.includes('/guia-visitantes') || item.url.includes('/historia-naturaleza')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        return { ...item, priority: 0.6, changefreq: 'monthly' };
      },
    }),
  ],
});
