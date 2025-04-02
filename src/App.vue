<script lang="ts" setup>
import Toaster from './components/ui/toast/Toaster.vue'
</script>

<template>
  <Toaster />
  <main class="text-gray-700 p-10 text-center flex min-h-screen justify-center dark:text-gray-200 md:p-10">
    <div class="flex flex-col w-full justify-center items-center md:w-1/2">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <transition name="fade" mode="out-in">
        <TheFooter />
      </transition>
    </div>
  </main>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
