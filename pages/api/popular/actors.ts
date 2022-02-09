// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPopularPeople } from '../../../utilities/api'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const page = +req.query.page || 1

  const popularPeople = await getPopularPeople(page)

  res.end(JSON.stringify(popularPeople))
}
