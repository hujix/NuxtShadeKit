<script lang="ts" setup>
import { LogIn, Sparkles } from "lucide-vue-next";

const { loggedIn, user, clear } = useUserSession();

const router = useRouter();
</script>

<template>
  <div class="bg-background min-h-screen">
    <!-- Navigation Bar -->
    <header
      class="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-20 flex h-12 w-full shrink-0 items-center justify-between border-b px-4 backdrop-blur-lg ease-linear"
    >
      <div class="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2">
          <div class="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
            <Sparkles class="size-4" />
          </div>
          <span class="font-semibold">Nuxt Shade Kit</span>
        </div>
        <div class="flex items-center gap-4">
          <ColorModeButton />
          <div v-if="loggedIn">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage :src="user?.avatar || ''" :alt="user?.name" />
                  <AvatarFallback>{{ user?.name.charAt(0) }}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Name: {{ user!.name }}</DropdownMenuLabel>
                <DropdownMenuLabel>Email: {{ user!.email }}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem class="cursor-pointer" @click="clear">登出</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button v-else variant="default" @click="router.push('/login')">
            <LogIn class="mr-2 size-4" />
            登录
          </Button>
        </div>
      </div>
    </header>

    <main class="h-[calc(100vh-48px)]">
      <slot />
    </main>
  </div>
</template>
