import { storeToRefs } from 'pinia'
import { useCharacterStore } from '@/stores/character.store'
import { getCharacters } from '@/services/character.service'

const useCharacter = () => {

  const { setCharacters } = useCharacterStore()
  const { characters } = storeToRefs(useCharacterStore())

  const response = getCharacters()

  response.then(({results}) => {
    setCharacters(results)
  })

  return {
    characters
  }
}

export default useCharacter