import React from 'react'
import Image from 'next/image'
import { Person } from '../../types'
import { getPopularPeople } from '../../utilities/api'
import imageLoader from '../../utilities/imageLoader'

type Props = {
  popularPeople: Person[]
}

export default function index({ popularPeople }: Props) {
  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="popular-actors">
        <h2 className="text-lg font-semibold tracking-wider text-orange-500 uppercase">
          Popular Actors
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {popularPeople.map((actor) => (
            <div className="mt-8 actor">
              <a href="{{ route('actors.show', $actor['id']) }}">
                <Image
                  loader={imageLoader}
                  unoptimized
                  src={`https://image.tmdb.org/t/p/w235_and_h235_face/${actor.profile_path}`}
                  alt="profile image"
                  className="transition duration-150 ease-in-out hover:opacity-75"
                  width={235}
                  height={235}
                />
              </a>
              <div className="mt-2">
                <a
                  href="{{ route('actors.show', $actor['id']) }}"
                  className="text-lg hover:text-gray-300"
                >
                  {actor.name}
                </a>
                <div className="text-sm text-gray-400 truncate">
                  {actor.known_for_department}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* add infinite scroll */}
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const popularPeople = await getPopularPeople()

  // Pass data to the page via props
  return {
    props: {
      popularPeople,
    },
  }
}
