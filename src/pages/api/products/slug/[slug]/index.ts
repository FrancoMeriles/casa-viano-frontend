import type { NextApiRequest, NextApiResponse } from 'next'
import service from '@services/bff'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.query
  const response = await service.get(`/products/slug/${slug}`)
  res.status(200).json({ ...response.data })
}
