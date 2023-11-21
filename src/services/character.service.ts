import API from '@/api'
import type { AxiosResponse } from 'axios'
import type { Characters } from '@/models/character'

const getCharacters = async () => {
  try {
    const response: AxiosResponse<Characters> = await API.get('character')
    return response.data
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}

export {
  getCharacters
}