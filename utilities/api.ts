import {
  Genre,
  GetGenreListResults,
  GetNowPlayingMoviesResults,
  GetPopularMoviesResults,
  Movie,
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

export const getGenreList = async (): Promise<Genre[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.THEMOVIEDB_API}`,
  )

  const { genres }: GetGenreListResults = await res.json()

  return genres
}
