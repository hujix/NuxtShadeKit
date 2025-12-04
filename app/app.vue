<script lang="ts" setup>
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";

useHead({
  title: "NuxtShadeKit - 现代全栈模板",
  meta: [
    {
      name: "description",
      content:
        "基于 Nuxt 4 + Tailwind CSS v4 + shadcn-vue 的现代全栈模板项目，集成 OAuth 认证、接口安全防护、统一 UI 体系",
    },
    {
      name: "keywords",
      content:
        "Nuxt 4, Vue 3, Tailwind CSS, shadcn-vue, TypeScript, OAuth, nuxt-auth-utils, nuxt-security, 全栈模板, 项目脚手架",
    },
    { name: "author", content: "Hu.Sir" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { charset: "utf-8" },
    // Open Graph
    { property: "og:title", content: "NuxtShadeKit - 现代全栈模板" },
    {
      property: "og:description",
      content: "基于 Nuxt 4 + Tailwind CSS v4 + shadcn-vue 的现代全栈模板项目，集成 OAuth 认证、接口安全防护",
    },
    { property: "og:type", content: "website" },
    // Twitter Card
    { name: "twitter:title", content: "NuxtShadeKit - 现代全栈模板" },
    {
      name: "twitter:description",
      content: "基于 Nuxt 4 + Tailwind CSS v4 + shadcn-vue 的现代全栈模板项目",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <ClientOnly>
      <Toaster :rich-colors="true" position="top-center" />
    </ClientOnly>
  </NuxtLayout>
</template>

<style>
* {
  scrollbar-width: thin;
  scrollbar-color: hsl(214.3 31.8% 91.4%) transparent;
}
</style>
