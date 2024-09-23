export default defineNuxtConfig({
  components: true,
  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.scss',
    'normalize.css',
  ],
  typescript: {
    strict: true,
    shim: false
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.scss";'
        }
      }
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
        },
      ],
    },
  },
});
