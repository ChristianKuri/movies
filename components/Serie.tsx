import Image from 'next/image'
import { Genre, Serie } from '../types'
import imageLoader from '../utilities/imageLoader'
import { formatAverage, formatDate, formatGenres } from '../utilities/format'

type Props = {
  serie: Serie
  genres: Genre[]
}

export default function SerieComponent({ serie, genres }: Props) {
  return (
    <div className="mt-8">
      <a href={`/series/${serie.id}`}>
        {serie.poster_path ? (
          <Image
            loader={imageLoader}
            unoptimized
            src={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`}
            alt="poster"
            className="transition duration-150 ease-in-out hover:opacity-75"
            width={300}
            height={450}
          />
        ) : (
          <img
            className="transition duration-150 ease-in-out hover:opacity-75"
            src="https://via.placeholder.com/300x450"
            alt="actor"
            width={300}
            height={450}
          />
        )}
      </a>
      <div className="mt-2">
        <a
          href={`/series/${serie.id}`}
          className="mt-2 text-lg hover:text-gray-300"
        >
          {serie.name}
        </a>
        <div className="flex items-center mt-1 text-sm text-gray-400">
          <svg className="w-4 text-orange-500 fill-current" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              />
            </g>
          </svg>
          <span className="ml-1">{formatAverage(serie.vote_average)}</span>
          <span className="mx-2">|</span>
          <span>{formatDate(serie.first_air_date)}</span>
        </div>
        <div className="text-sm text-gray-400">
          {formatGenres(genres, serie.genre_ids)}
        </div>
      </div>
    </div>
  )
}
