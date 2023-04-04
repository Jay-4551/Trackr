export interface GameList extends Array<SingleGame> {
}

export interface PlatformList extends Array<Platform> {
}

export interface SingleGame {
  id: number,
  name: string,
  platforms: PlatformList[]
}

export interface Platform {
  abbreviation: string,
  name: string
}