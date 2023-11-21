<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex justify-center gap-8 p-6 bg-emerald-600 text-slate-100 text-xl mb-8">
    <RouterLink :to="{ name: 'home' }" class="px-2 py-1 rounded-md" active-class="bg-emerald-800">
      Home
    </RouterLink>
    <RouterLink :to="{ name: 'tanstack-query' }" class="px-2 py-1 rounded-md" active-class="bg-emerald-800">
      With Tanstack Query
    </RouterLink>
  </nav>
  <div class="px-8">
    <RouterView />
  </div>
</template>
