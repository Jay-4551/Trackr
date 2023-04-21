export interface GameList extends Array<SingleGame> {
}

export interface PlatformList extends Array<Platform> {
}

export interface SingleGame {
  id: number,
  name: string,
  platforms: PlatformList[],
  cover: { id: number, image_id: string },
  involved_companies: { id: number, name: string }
}

export interface Platform {
  abbreviation: string,
  name: string
}

