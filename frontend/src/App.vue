<script setup lang="ts">
import AppMobileNav from '@/components/app-components/app-navigation/AppMobileNav.vue'
import AppSidebarNav from '@/components/app-components/app-navigation/AppSidebarNav.vue'
import useScreenWidth from '@/composable/useScreenWidth';

const screenWidth = useScreenWidth()

</script>

<template>
  <div class="flex">
    <AppMobileNav v-if="screenWidth < 768" />
    <AppSidebarNav v-if="screenWidth >= 768" :small="screenWidth < 1440" />
    <router-view />
  </div>
</template>

