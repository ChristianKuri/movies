export interface GetPopularMoviesResults {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface GetNowPlayingMoviesResults {
  dates: DateRange
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface GetGenreListResults {
  genres: Genre[]
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: OriginalLanguage
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Genre {
  id: number
  name: string
}

export type OriginalLanguage = 'en' | 'es' | 'ja'

export interface DateRange {
  maximum: Date
  minimum: Date
}
