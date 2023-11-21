export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: Date
}

export interface Info {
  count: number,
  next: string | null,
  pages: number,
  prev: string | null,
}

export interface Characters {
  info: Info,
  results: Character[]
}