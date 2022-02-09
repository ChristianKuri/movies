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
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  first_air_date?: string
  name?: string
  origin_country?: string
  original_name?: string
}

export interface MovieDetails {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: BelongsToCollection
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  credits?: Credits
  videos: VideoResults
  images: Images
}

export interface Genre {
  id: number
  name: string
}

export interface DateRange {
  maximum: string
  minimum: string
}

export interface BelongsToCollection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export interface ProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface Credits {
  cast: Cast[]
  crew: Cast[]
}

export interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: null | string
  cast_id?: number
  character?: string
  credit_id: string
  order?: number
  department?: string
  job?: string
}

export interface Images {
  backdrops: Backdrop[]
  logos: Backdrop[]
  posters: Backdrop[]
}

export interface Backdrop {
  aspect_ratio: number
  height: number
  iso_639_1: null | string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export interface VideoResults {
  results: Video[]
}

export interface Video {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}

export interface GetWatchProvidersResults {
  id: number
  results: Country
}

export interface Country {
  [key: string]: ProvidersByCountry
}

export interface Provider {
  display_priority: number
  logo_path: string
  provider_id: number
  provider_name: string
}

export interface ProvidersByCountry {
  link: string
  flatrate?: Provider[]
  buy?: Provider[]
  rent?: Provider[]
}

export interface GetSearchResults {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface GetPopularPeopleResults {
  page: number
  results: Person[]
  total_pages: number
  total_results: number
}

export interface Person {
  adult: boolean
  gender: number
  id: number
  known_for: Movie[]
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
}

export interface PersonDetails {
  adult: boolean
  also_known_as: string[]
  biography: string
  birthday: string | null
  deathday: string | null
  gender: number
  homepage: string | null
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string | null
  popularity: number
  profile_path?: string
  external_ids: ExternalIDS
  movie_credits: MovieCredits
  tv_credits: TvCredits
}

export interface MovieCredits {
  cast: MovieCredit[]
  crew: any
}

export interface TvCredits {
  cast: TvCredit[]
  crew: any
}

export interface MovieCredit {
  character: string
  credit_id: string
  release_date: string
  vote_count: number
  video: boolean
  adult: boolean
  vote_average: number
  title: string
  genre_ids: number[]
  original_language: string
  original_title: string
  popularity: number
  id: number
  backdrop_path: string | null
  overview: string
  poster_path: string | null
}

export interface TvCredit {
  credit_id: string
  original_name: string
  id: number
  genre_ids: number[]
  character: string
  name: string
  poster_path: string | null
  vote_count: number
  vote_average: number
  popularity: number
  episode_count: number
  original_language: string
  first_air_date: string
  backdrop_path: string | null
  overview: string
  origin_country: string[]
}

export interface ExternalIDS {
  imdb_id: string | null
  facebook_id: string | null
  freebase_mid: string | null
  freebase_id: string | null
  tvrage_id: number | null
  twitter_id: string | null
  id: number
  instagram_id: string | null
}
