import React from 'react'
import Image from 'next/image'
import { getMovieDetails } from '../../utilities/api'
import { MovieDetails } from '../../types'
import imageLoader from '../../utilities/imageLoader'
import {
  formatAverage,
  formatDate,
  getNameFromGenders,
} from '../../utilities/format'
import ProfilePhoto from '../../components/ProfilePhoto'

type Props = {
  movie: MovieDetails
}

export default function MoviePage({ movie }: Props) {
  return (
    <>
      <div className="border-b border-gray-800 movie-info">
        <div className="container flex flex-col px-4 py-16 mx-auto lg:flex-row">
          <div className="flex-none">
            <Image
              loader={imageLoader}
              unoptimized
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="actor"
              className="w-64 lg:w-96"
              width={500}
              height={750}
            />
          </div>
          <div className="lg:ml-24">
            <h2 className="mt-4 text-4xl font-semibold lg:mt-0">
              {movie.title}
            </h2>
            <div className="flex flex-wrap items-center mt-4 text-sm text-gray-400">
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
              <span className="ml-1">{formatAverage(movie.vote_average)}</span>
              <span className="mx-2">|</span>
              <span>{formatDate(movie.release_date)}</span>
              <span className="mx-2">|</span>
              <span>{getNameFromGenders(movie.genres)}</span>
            </div>

            <p className="mt-8 text-gray-300">{movie.overview}</p>

            <div className="mt-12">
              <h4 className="font-semibold text-white">Featured Crew</h4>
              <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-4">
                {movie.credits?.crew.slice(0, 8).map((crew) => (
                  <div className="mr-8">
                    <div>{crew.name}</div>
                    <div className="text-sm text-gray-400">{crew.job}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* add video modal */}
            <div className="mt-12">
              <button
                type="button"
                className="flex items-center px-5 py-4 font-semibold text-gray-900 transition duration-150 ease-in-out bg-orange-500 rounded hover:bg-orange-600"
              >
                <svg className="w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <span className="ml-2">Play Trailer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end movie-info */}

      <div className="border-b border-gray-800 movie-cast">
        <div className="container px-4 py-16 mx-auto">
          <h2 className="text-4xl font-semibold">Cast</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {movie.credits?.cast.map((cast) => (
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
      {/* end movie-cast */}
    </>
  )
}

type Params = {
  params: {
    id: string
  }
}

export async function getServerSideProps({ params }: Params) {
  const movie = await getMovieDetails(params.id)

  // Pass data to the page via props
  return {
    props: {
      movie,
    },
  }
}
