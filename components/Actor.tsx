import React from 'react'
import Image from 'next/image'
import imageLoader from '../utilities/imageLoader'
import { Person } from '../types'

type Props = {
  actor: Person
}

export default function Actor({ actor }: Props) {
  return (
    <div className="mt-8 actor">
      <a href={`/actors/${actor.id}`}>
        <Image
          loader={imageLoader}
          unoptimized
          src={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w235_and_h235_face/${actor.profile_path}`
              : `https://ui-avatars.com/api/?size=235&name=${actor.name}`
          }
          alt="profile image"
          className="transition duration-150 ease-in-out hover:opacity-75"
          width={235}
          height={235}
        />
      </a>
      <div className="mt-2">
        <a href={`/actors/${actor.id}`} className="text-lg hover:text-gray-300">
          {actor.name}
        </a>
        <div className="text-sm text-gray-400 truncate">
          {actor.known_for_department}
        </div>
      </div>
    </div>
  )
}
