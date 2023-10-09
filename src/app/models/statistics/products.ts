export type productsList = productsStats[]

export interface productsStats {
  stats: Stats
}

export interface Stats {
  appName: string
  runsCount: string
  deniedAccessCount: string
  downloadCount: number
}