import { storeToRefs } from 'pinia'
import { useQuery } from '@tanstack/vue-query'
import { useCharacterStore } from '@/stores/character.store'
import { getCharacters } from '@/services/character.service'

const useCharacter = () => {

  const { setCharacters } = useCharacterStore()
  const { characters } = storeToRefs(useCharacterStore())

  const { isLoading, error } = useQuery({
    queryKey: ['characters'],
    queryFn: async () => {
      const data = await getCharacters()
      setCharacters(data.results)
      return data
    },
  })


  return {
    characters,
    isLoading,
    error
  }
}

export default useCharacter