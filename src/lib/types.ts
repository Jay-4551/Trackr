export interface GameList extends Array<SingleGame> {
}

export interface SingleGame {
  id: number,
  name: string,
  platforms: any[]
}