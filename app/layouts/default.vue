<script lang="ts" setup>
import { LogIn, Sparkles } from "lucide-vue-next";

const { loggedIn, user, clear } = useUserSession();

const router = useRouter();
</script>

<template>
  <div class="bg-background min-h-screen">
    <!-- Navigation Bar -->
    <nav class="bg-background/95 supports-backdrop-filter:bg-background/60 border-b backdrop-blur">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
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
      </div>
    </nav>

    <main>
      <slot />
    </main>
  </div>
</template>
