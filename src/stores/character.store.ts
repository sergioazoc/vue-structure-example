import { defineStore } from 'pinia'
import type { Character } from '@/models/character'

interface State {
  characters: Character[] | null
}

export const useCharacterStore = defineStore('character', {
  
  state: (): State => ({ 
    characters: [],
  }),

  getters: {
    // doubleCount: (state) => state.count * 2,
  },

  actions: {

    setCharacters(characters: Character[]) {
      this.characters = characters
    },

  }

})
