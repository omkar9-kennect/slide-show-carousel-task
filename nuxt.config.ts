import vuetify from "vite-plugin-vuetify";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/variables.scss"],
  modules: ["@pinia/nuxt"],
  imports: {
    autoImport: true,
    dirs: ["store/**","composables/**", "components/**", "plugins/**"],
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins?.push(vuetify());
    },
  },
 
  ssr: true,
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  }
});
