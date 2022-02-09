import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Person } from '../../types'
import { getPopularPeople } from '../../utilities/api'
import Actor from '../../components/Actor'

type Props = {
  popularPeople: Person[]
}

export default function index({ popularPeople }: Props) {
  const [people, setPeople] = useState<Person[]>([])
  const [page, setPage] = useState<number>(2)

  const fetchData = async () => {
    const res = await fetch(`/api/popular/actors?page=${page}`)
    const morePeople: Person[] = await res.json()
    setPage(page + 1)
    setPeople([...people, ...morePeople])
  }

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
        <InfiniteScroll
          dataLength={people.length}
          next={fetchData}
          hasMore
          loader={<h4>Loading...</h4>}
          endMessage={
            <p className="text-center">
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {people.map((actor) => (
              <Actor actor={actor} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
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
