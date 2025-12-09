<script setup lang="ts">
import { Sparkles } from "lucide-vue-next";

const { loggedIn } = useUserSession();
const router = useRouter();
definePageMeta({
  layout: false,
});

useHead({
  title: "Login - Nuxt Shade Kit",
  meta: [
    {
      name: "description",
      content: "Login to your account",
    },
  ],
});

onMounted(() => {
  if (loggedIn.value) {
    navigateTo("/");
  }
});
const loginWithGithub = () => {
  router.push("/auth/github");
};
</script>

<template>
  <div class="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
    <div class="flex w-full max-w-sm flex-col gap-6">
      <a href="#" class="flex items-center gap-2 self-center font-medium">
        <div class="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
          <Sparkles class="size-4" />
        </div>
        Nuxt Shade Kit
      </a>
      <div class="flex flex-col gap-6">
        <Button variant="outline" type="button" @click="loginWithGithub"> Login with Github </Button>
        <div class="px-6 text-center">
          点击继续即表示您同意我们的
          <NuxtLink to="#" class="underline-offset-4 hover:underline">服务条款</NuxtLink>
          和
          <NuxtLink to="#" class="underline-offset-4 hover:underline">隐私政策</NuxtLink>。
        </div>
      </div>
    </div>
  </div>
</template>
