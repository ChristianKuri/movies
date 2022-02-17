import {
  Country,
  Genre,
  GetGenreListResults,
  GetNowPlayingMoviesResults,
  GetPopularMoviesResults,
  GetPopularPeopleResults,
  GetPopularSeriesResults,
  GetSearchResults,
  GetTopRatedSeriesResults,
  GetWatchProvidersResults,
  Movie,
  MovieDetails,
  Person,
  PersonDetails,
  Serie,
  SerieDetails,
} from '../types'

export const getPopularMovies = async (): Promise<Movie[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.THEMOVIEDB_API}`,
  )

  const { results }: GetPopularMoviesResults = await res.json()

  return results
}

export const getNowPlayingMovies = async (): Promise<Movie[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.THEMOVIEDB_API}`,
  )

  const { results }: GetNowPlayingMoviesResults = await res.json()

  return results
}

export const getMovieGenreList = async (): Promise<Genre[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.THEMOVIEDB_API}`,
  )

  const { genres }: GetGenreListResults = await res.json()

  return genres
}

export const getSerieGenreList = async (): Promise<Genre[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.THEMOVIEDB_API}`,
  )

  const { genres }: GetGenreListResults = await res.json()

  return genres
}

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.THEMOVIEDB_API}&append_to_response=credits,videos`,
  )

  const movieDetails: MovieDetails = await res.json()

  return movieDetails
}

export const getWatchProviders = async (id: string): Promise<Country> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${process.env.THEMOVIEDB_API}`,
  )

  const { results }: GetWatchProvidersResults = await res.json()

  return results
}

export const getSearch = async (query: string): Promise<Movie[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.THEMOVIEDB_API}&query=${query}`,
  )

  const { results }: GetSearchResults = await res.json()

  return results
}

export const getPopularPeople = async (page = 1): Promise<Person[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.THEMOVIEDB_API}&page=${page}`,
  )

  const { results }: GetPopularPeopleResults = await res.json()

  return results
}

export const getPersonDetails = async (id: string): Promise<PersonDetails> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.THEMOVIEDB_API}&append_to_response=external_ids,movie_credits,tv_credits`,
  )

  const movieDetails: PersonDetails = await res.json()

  return movieDetails
}

export const getPopularSeries = async (): Promise<Serie[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.THEMOVIEDB_API}`,
  )

  const { results }: GetPopularSeriesResults = await res.json()

  return results
}

export const getTopRatedSeries = async (): Promise<Serie[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.THEMOVIEDB_API}`,
  )

  const { results }: GetTopRatedSeriesResults = await res.json()

  return results
}

export const getSerieDetails = async (id: string): Promise<SerieDetails> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.THEMOVIEDB_API}&append_to_response=credits,videos`,
  )

  const serieDetails: SerieDetails = await res.json()

  return serieDetails
}
