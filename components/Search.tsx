import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Movie, Serie } from '../types'
import imageLoader from '../utilities/imageLoader'
import useDebounce from '../hooks/useDebounce'

export default function Search() {
  const [search, setSearch] = useState<string>('')
  const [results, setResults] = useState<Movie[] | Serie[]>([])

  const debouncedSearch = useDebounce(search, 400)

  useEffect(() => {
    if (debouncedSearch.length > 2) {
      const onSearch = async (searchText: string) => {
        const res = await fetch(`/api/search/${searchText}`)
        setResults(await res.json())
      }

      onSearch(debouncedSearch)
    } else {
      setResults([])
    }
  }, [debouncedSearch])

  return (
    <div className="relative mt-3 md:mt-0">
      <input
        type="search"
        placeholder="Search"
        className="w-64 px-4 py-1 pl-8 text-sm bg-gray-800 rounded-full focus:shadow-outline focus:outline-none"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div className="absolute top-0">
        <svg
          className="w-4 mt-2 ml-2 text-gray-500 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
        </svg>
      </div>

      {results.length > 0 && (
        <div className="absolute z-50 w-64 mt-4 text-sm bg-gray-800 rounded">
          <ul>
            {results.map((result) => (
              <li className="border-b border-gray-700">
                <a
                  href={
                    'title' in result
                      ? `/movies/${result.id}`
                      : `/series/${result.id}`
                  }
                  className="flex items-center px-3 py-3 transition duration-150 ease-in-out hover:bg-gray-700"
                >
                  <Image
                    loader={imageLoader}
                    unoptimized
                    src={
                      result.poster_path
                        ? `https://image.tmdb.org/t/p/w92/${result.poster_path}`
                        : 'https://via.placeholder.com/50x75'
                    }
                    alt="poster"
                    className="w-8"
                    width={50}
                    height={75}
                  />
                  <span className="ml-4">
                    {'title' in result ? result.title : result.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
