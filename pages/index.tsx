import Head from 'next/head'
import { Genre, Movie } from '../types'
import MovieComponent from '../components/Movie'
import {
  getGenreList,
  getPopularMovies,
  getNowPlayingMovies,
} from '../utilities/api'

type Props = {
  popularMovies: Movie[]
  genreList: Genre[]
  nowPlayingMovies: Movie[]
}

export default function Home({
  popularMovies,
  genreList,
  nowPlayingMovies,
}: Props) {
  return (
    <div className="container px-4 pt-16 mx-auto">
      <Head>
        <title>Movies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="popular-movies">
        <h2 className="text-lg font-semibold tracking-wider text-orange-500 uppercase">
          Popular Movies
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {popularMovies.map((movie) => (
            <MovieComponent movie={movie} genres={genreList} />
          ))}
        </div>
      </div>

      <div className="py-24 now-playing-movies">
        <h2 className="text-lg font-semibold tracking-wider text-orange-500 uppercase">
          Now Playing
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {nowPlayingMovies.map((movie) => (
            <MovieComponent movie={movie} genres={genreList} />
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const popularMovies = await getPopularMovies()
  const genreList = await getGenreList()
  const nowPlayingMovies = await getNowPlayingMovies()

  // Pass data to the page via props
  return {
    props: {
      popularMovies,
      genreList,
      nowPlayingMovies,
    },
  }
}
