import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-11-24",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxt/eslint", "shadcn-nuxt", "nuxt-auth-utils", "nuxt-security"],
  nitro: {
    preset: "cloudflare-pages",
    cloudflare: {
      nodeCompat: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    oauth: {
      github: {
        clientId: "",
        clientSecret: "",
      },
    },
  },
  security: {
    csrf: true,
    headers: {
      contentSecurityPolicy: {
        "img-src": ["'self'", "data:", "https:"],
      },
    },
  },
  routeRules: {
    "/api/**": {
      csurf: {
        enabled: false,
        methodsToProtect: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      },
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },
});
