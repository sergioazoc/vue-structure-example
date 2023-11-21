<script setup lang="ts">
import useCharacters from '@/composables/useCharacterTanstack'

const { characters, isLoading } = useCharacters()

</script>

<template>
  <h1 class="text-center text-2xl font-bold mb-4">Characters</h1>

  <p v-if="isLoading">Loading...</p>

  <div v-else class="flex justify-around gap-6 flex-wrap">
    <div v-for="character in characters" :key="character.id">
      <img :src="character.image" alt="">
      <p class="text-xl">{{ character.name }}</p>
    </div>
  </div>
</template>
