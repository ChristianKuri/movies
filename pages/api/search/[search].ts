// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Movie, Serie } from '../../../types'
import { getSearchMovies, getSearchSeries } from '../../../utilities/api'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { search } = req.query
  const movies: Movie[] = await getSearchMovies(search as string)
  const series: Serie[] = await getSearchSeries(search as string)
  const results = [...movies, ...series]
  res.end(JSON.stringify(results))
}
