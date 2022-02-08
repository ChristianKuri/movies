import React from 'react'
import { Person } from '../../types'
import { getPopularPeople } from '../../utilities/api'
import Actor from '../../components/Actor'

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
            <Actor actor={actor} />
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
