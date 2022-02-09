import Head from 'next/head'
import SerieComponent from '../../components/Serie'
import { Genre, Serie } from '../../types'
import {
  getSerieGenreList,
  getPopularSeries,
  getTopRatedSeries,
} from '../../utilities/api'

type Props = {
  popularSeries: Serie[]
  genreList: Genre[]
  topRatedSeries: Serie[]
}

export default function Home({
  popularSeries,
  genreList,
  topRatedSeries,
}: Props) {
  return (
    <div className="container px-4 pt-16 mx-auto">
      <Head>
        <title>Series</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="popular-series">
        <h2 className="text-lg font-semibold tracking-wider text-orange-500 uppercase">
          Popular Series
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {popularSeries.map((serie) => (
            <SerieComponent serie={serie} genres={genreList} />
          ))}
        </div>
      </div>

      <div className="py-24 now-playing-series">
        <h2 className="text-lg font-semibold tracking-wider text-orange-500 uppercase">
          Top Rated
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {topRatedSeries.map((serie) => (
            <SerieComponent serie={serie} genres={genreList} />
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const popularSeries = await getPopularSeries()
  const genreList = await getSerieGenreList()
  const topRatedSeries = await getTopRatedSeries()

  // Pass data to the page via props
  return {
    props: {
      popularSeries,
      genreList,
      topRatedSeries,
    },
  }
}
