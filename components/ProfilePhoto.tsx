import React from 'react'
import Image from 'next/image'
import { Cast } from '../types'
import imageLoader from '../utilities/imageLoader'

type Props = {
  cast: Cast
}

export default function ProfilePhoto({ cast }: Props) {
  return (
    <div>
      {cast.profile_path ? (
        <Image
          loader={imageLoader}
          unoptimized
          src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
          alt="actor"
          className="transition duration-150 ease-in-out hover:opacity-75"
          width={300}
          height={450}
        />
      ) : (
        <img
          className="transition duration-150 ease-in-out hover:opacity-75"
          src={cast.gender === 1 ? '/images/female.png' : '/images/male.png'}
          alt="actor"
          width={300}
          height={450}
        />
      )}
    </div>
  )
}
