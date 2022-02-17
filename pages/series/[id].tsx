import React from 'react'
import Image from 'next/image'
import { getSerieDetails } from '../../utilities/api'
import { SerieDetails } from '../../types'
import {
  formatAverage,
  formatDate,
  getNameFromGenders,
} from '../../utilities/format'
import VideoPlayer from '../../components/VideoPlayer'
import imageLoader from '../../utilities/imageLoader'
import ProfilePhoto from '../../components/ProfilePhoto'

type Props = {
  serie: SerieDetails
}

export default function SeriePage({ serie }: Props) {
  return (
    <div>
      <div className="border-b border-gray-800 tv-info">
        <div className="container flex flex-col px-4 py-16 mx-auto md:flex-row">
          <div className="flex-none">
            <Image
              loader={imageLoader}
              unoptimized
              src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
              alt="actor"
              className="w-64 lg:w-96"
              width={500}
              height={750}
            />
          </div>
          <div className="md:ml-24">
            <h2 className="mt-4 text-4xl font-semibold md:mt-0">
              {serie.name}
            </h2>
            <div className="flex flex-wrap items-center text-sm text-gray-400">
              <svg
                className="w-4 text-orange-500 fill-current"
                viewBox="0 0 24 24"
              >
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
              <span className="mx-2">|</span>
              <span>{getNameFromGenders(serie.genres)}</span>
            </div>

            <p className="mt-8 text-gray-300">{serie.overview}</p>

            <div className="mt-12">
              <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-4">
                {serie.credits?.crew.slice(0, 8).map((crew) => (
                  <div className="mr-8">
                    <div>{crew.name}</div>
                    <div className="text-sm text-gray-400">Creator</div>
                  </div>
                ))}
              </div>
            </div>

            {serie.videos?.results.length > 0 && (
              <div className="mt-12">
                <VideoPlayer
                  buttonText="Play Trailer"
                  videoKey={serie.videos.results[0].key}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-b border-gray-800 tv-cast">
        <div className="container px-4 py-16 mx-auto">
          <h2 className="text-4xl font-semibold">Cast</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {serie.credits?.cast.map((cast) => (
              <div className="mt-8">
                <a href={`/actors/${cast.id}`}>
                  <ProfilePhoto cast={cast} />
                </a>
                <div className="mt-2">
                  <a
                    href={`/actors/${cast.id}`}
                    className="mt-2 text-lg hover:text-gray:300"
                  >
                    {cast.name}
                  </a>
                  <div className="text-sm text-gray-400">{cast.character}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

type Params = {
  params: {
    id: string
  }
}

export async function getServerSideProps({ params }: Params) {
  const serie = await getSerieDetails(params.id)

  // Pass data to the page via props
  return {
    props: {
      serie,
    },
  }
}
