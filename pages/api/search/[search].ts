// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Movie } from '../../../types'
import { getSearch } from '../../../utilities/api'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { search } = req.query
  const results: Movie[] = await getSearch(search as string)
  res.end(JSON.stringify(results))
}
