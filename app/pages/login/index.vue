<script setup lang="ts">
import { Sparkles } from "lucide-vue-next";

const { loggedIn, openInPopup } = useUserSession();

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
  openInPopup("/auth/github");
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
        <Card>
          <CardHeader class="text-center">
            <CardTitle class="text-xl"> Welcome back </CardTitle>
            <CardDescription> Login with your Apple or Google account </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <FieldGroup>
                <Field>
                  <Button variant="outline" type="button" @click="loginWithGithub"> Login with Github </Button>
                </Field>
                <FieldSeparator class="*:data-[slot=field-separator-content]:bg-card">
                  Or continue with
                </FieldSeparator>
                <Field>
                  <FieldLabel for="email"> Email </FieldLabel>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </Field>
                <Field>
                  <div class="flex items-center">
                    <FieldLabel for="password"> Password </FieldLabel>
                    <a href="#" class="ml-auto text-sm underline-offset-4 hover:underline"> Forgot your password? </a>
                  </div>
                  <Input id="password" type="password" required />
                </Field>
                <Field>
                  <Button type="submit"> Login </Button>
                  <FieldDescription class="text-center">
                    Don't have an account?
                    <a href="#"> Sign up </a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
        <FieldDescription class="px-6 text-center">
          点击继续即表示您同意我们的
          <NuxtLink to="#" class="underline-offset-4 hover:underline">服务条款</NuxtLink>
          和
          <NuxtLink to="#" class="underline-offset-4 hover:underline">隐私政策</NuxtLink>。
        </FieldDescription>
      </div>
    </div>
  </div>
</template>
