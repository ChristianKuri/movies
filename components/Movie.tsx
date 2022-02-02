import React from 'react'
import Image from 'next/image'
import { Genre, Movie } from '../types'
import { formatDate, formatGenres } from '../utilities/format'

type Props = {
  movie: Movie
  genres: Genre[]
}

export default function MovieComponent({ movie, genres }: Props) {
  return (
    <div className="mt-8">
      <a href={`movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="poster"
          className="transition duration-150 ease-in-out hover:opacity-75"
          width={500}
          height={750}
        />
      </a>
      <div className="mt-2">
        <a
          href={`movie/${movie.id}`}
          className="mt-2 text-lg hover:text-gray-300"
        >
          {movie.title}
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
          <span className="ml-1">{movie.vote_average * 10} %</span>
          <span className="mx-2">|</span>
          <span>{formatDate(movie.release_date)}</span>
        </div>
        <div className="text-sm text-gray-400">
          {formatGenres(genres, movie.genre_ids)}
        </div>
      </div>
    </div>
  )
}