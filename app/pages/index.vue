<script lang="ts" setup>
import { Rocket, ArrowRight, LoaderCircle } from "lucide-vue-next";
import { toast } from "vue-sonner";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const loading = ref(false);

const getSentence = async () => {
  loading.value = true;
  try {
    const { headerName, csrf } = useCsrf();
    const { code, message, data } = await $fetch<Response<{ hitokoto: string; from: string }>>("/api/sentence", {
      method: "POST",
      headers: {
        [headerName]: csrf,
      },
    });
    if (code === 200) {
      toast.success(data?.hitokoto || "");
    } else if (code === 401) {
      toast.warning(message);
      navigateTo("/login");
    } else {
      toast.error(message);
    }
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section class="from-background to-muted/80 relative h-full overflow-hidden bg-linear-to-b">
    <div class="mx-auto max-w-3xl pt-24 text-center">
      <Badge variant="secondary" class="mb-4">
        <Rocket class="mr-2 size-3" />
        Nuxt 4 + Tailwind CSS v4 + shadcn-vue
      </Badge>
      <h1 class="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        构建现代 Web 应用
        <span class="from-primary to-primary/60 bg-linear-to-r bg-clip-text text-transparent">的新起点</span>
      </h1>
      <p class="text-muted-foreground mb-8 text-lg sm:text-xl">
        基于 Nuxt 4 + Tailwind CSS v4 + shadcn-vue 的现代前端模板项目， 内置基础登录功能、统一 UI
        体系、完善的工程化配置， 可作为企业级项目的起点或个人快速开发的脚手架。
      </p>
      <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <NuxtLink
          to="https://github.com/hujix/NuxtShadeKit?tab=readme-ov-file#nuxtshadekit"
          target="_blank"
          :class="cn(buttonVariants({ variant: 'default', size: 'lg' }), 'group')"
        >
          开始使用
          <ArrowRight class="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </NuxtLink>
        <Button size="lg" variant="outline" :disabled="loading" @click="getSentence">
          <LoaderCircle v-if="loading" class="size-4 animate-spin" />
          一言
        </Button>
      </div>
    </div>
  </section>
</template>
